import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import PetCard, { CardBody, CardMedia } from "components/atoms/PetCard";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { CgGenderFemale, CgGenderMale } from "react-icons/cg";

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

const PetsGrid = ({ pets }) => {
  return (
    <Root>
      <Grid md={3} proportion={"1fr"}>
        {pets.map((pet) => (
          <PetCard key={pet.id}>
            <CardBody>
              <CardMedia image={pet.image} />
              <UserTitle>{pet.user.name}</UserTitle>
              <Description>{pet.title}</Description>
              <CardFooter>
                <PublicationInfos>
                  <p>
                    {pet.address.city}, {pet.address.state}
                  </p>
                  <p>{pet.created_at}</p>
                </PublicationInfos>
                <Actions>
                  {pet.characteristics.sex === "female" ? (
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
    </Root>
  );
};

PetsGrid.defaultProps = {
  pets: [],
};

PetsGrid.propTypes = {
  pets: Array,
};

export default PetsGrid;
