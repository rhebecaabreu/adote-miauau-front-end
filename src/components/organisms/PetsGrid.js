import React, { useState } from "react";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import PetCard, { CardBody, CardMedia } from "components/atoms/PetCard";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";
import PropTypes from "prop-types";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const UserTitle = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary.dark};
  font-weight: 500;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 400;
  margin: 0 0 2px 0;
`;

const Root = styled.div`
  max-height: 82vh;
  overflow: auto;
  padding: 0 56px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 24px;
    margin-left: 8px;
  }
`;

const PublicationInfos = styled.div`
  font-size: 12px;
  font-weight: 500;

  p {
    padding: 0;
    margin: 0;
  }
`;

const Actions = styled.div``;

const PetDescription = styled.div`
  .carousel-root {
    background: ${(props) => props.theme.colors.border};
    border-radius: 12px;
    padding: 4px;

    .control-arrow {
      border-radius: 12px;
    }
    .slider-wrapper {
      border-radius: 12px;
    }

    img {
      border-radius: 12px;
    }
  }

  p {
    font-size: 14px;
  }
`;

const PetInfos = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.8px;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 400;
    margin: 4px 0 0;
    letter-spacing: 0.8px;

    span {
      font-weight: 600;
    }

    &:first-of-type {
      font-weight: 500;
      color: ${(props) => props.theme.colors.primary.main};
    }
  }

  h3 {
    font-size: 14px;
    margin: 20px 0 0;
    letter-spacing: 0.8px;
  }

  p {
    font-size: 13px;
    margin: 6px 0 0;
    padding: 0;
    letter-spacing: 0.8px;
  }
`;

const ModalActionArea = styled.div`
  display: flex;
  justify-content: right;

  button {
    margin-left: 14px;
  }
`;

const PET_SIZE = {
  small: "Pequeno",
  medium: "Médio",
  big: "Grande",
};

const PetsGrid = ({ pets }) => {
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState({});

  const onOpenModal = (pet) => {
    setOpen(true);
    setSelectedPet(pet);
  };

  const onCloseModal = () => {
    setOpen(false);
    setSelectedPet({});
  };

  const boolLabel = (bool) => (bool ? "Sim" : "Não");
  const isFemale = (pet) => pet.pet?.sex === "female";
  const formatDateTime = (datetime) => {
    if (!datetime) return;
    const parsedDate = parseISO(datetime.replace("T", " ").replace("Z", ""));
    return format(parsedDate, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
      locale: ptBR,
    });
  };

  return (
    <Root>
      <Grid md={3} proportion={"1fr"}>
        {pets.map((pet) => (
          <PetCard id={pet.id} key={pet.id} onClick={() => onOpenModal(pet)}>
            <CardBody>
              <CardMedia image={pet.pet ? pet.pet?.images[0]?.file_url : ""} />
              <UserTitle>{pet.user.full_name}</UserTitle>
              <Description>{pet.title}</Description>
              <CardFooter>
                <PublicationInfos>
                  <p>
                    {pet.address?.city}, {pet.address?.state}
                  </p>
                  <p>{formatDateTime(pet.updated_at)}</p>
                </PublicationInfos>
                <Actions>
                  {isFemale(pet) ? (
                    <Button color="danger" variant="link">
                      <CgGenderFemale />
                    </Button>
                  ) : (
                    <Button color="primary" variant="link">
                      <CgGenderMale />
                    </Button>
                  )}
                  <Button color="danger" variant="link">
                    <FaRegHeart />
                  </Button>
                </Actions>
              </CardFooter>
            </CardBody>
          </PetCard>
        ))}
      </Grid>
      <Modal
        key={`modal-${selectedPet.id}`}
        modalId={`modal-${selectedPet.id}`}
        open={open}
        onClose={onCloseModal}
        center
      >
        <>
          <Grid md={2} proportion={"1fr"}>
            <PetDescription>
              <Carousel showThumbs={false}>
                {selectedPet.pet?.images.map((image) => (
                  <div>
                    <img src={image?.file_url} alt={selectedPet.title} />
                  </div>
                ))}
              </Carousel>
              <p>{selectedPet.description}</p>
            </PetDescription>
            <PetInfos>
              <h1>{selectedPet.title}</h1>
              <h2>
                <span>{selectedPet.user?.role === "ong" ? "ONG" : ""}</span>
                {selectedPet.user?.full_name}
              </h2>
              <h2>{formatDateTime(selectedPet.updated_at)}</h2>
              <h2>
                {selectedPet.address?.city}, {selectedPet.address?.state}
              </h2>
              <Grid md={2} proportion={"1fr"}>
                <div>
                  <h3>Idade</h3>
                  <p>{selectedPet.pet?.age}</p>

                  <h3>Sexo</h3>
                  <p>{isFemale(selectedPet) ? "Feminino" : "Masculino"} </p>

                  <h3>Vacinado</h3>
                  <p>{boolLabel(selectedPet.pet?.vaccinated)}</p>

                  <h3>Vermifugado</h3>
                  <p>{boolLabel(selectedPet.pet?.vermifugated)}</p>
                </div>
                <div>
                  <h3>Porte</h3>
                  <p>{PET_SIZE[selectedPet.pet?.size]}</p>

                  <h3>Cor</h3>
                  <p>{selectedPet.pet?.coat_color}</p>

                  <h3>Castrado</h3>
                  <p>{boolLabel(selectedPet.pet?.castrated)}</p>
                </div>
              </Grid>
            </PetInfos>
          </Grid>
          <ModalActionArea>
            <Button color="primary" variant="primary">
              {selectedPet.user?.phone}
            </Button>
            <Button color="danger" variant="link">
              <FaRegHeart />
            </Button>
          </ModalActionArea>
        </>
      </Modal>
    </Root>
  );
};

PetsGrid.defaultProps = {
  pets: [],
};

PetsGrid.propTypes = {
  pets: PropTypes.array,
};

export default PetsGrid;
