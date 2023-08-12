import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import PetCard, { CardBody, CardMedia } from "components/atoms/PetCard";
import styled from "styled-components";

const UserTitle = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary.dark};
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 400;
`;

const PetsGrid = ({ pets }) => {
  return (
    <>
      <Grid md={3} proportion={"1fr"}>
        {pets.map((pet) => (
          <PetCard key={pet.id}>
            <CardBody>
              <CardMedia image={pet.image} />
              <UserTitle>{pet.user.name}</UserTitle>
              <Description>{pet.title}</Description>

              <div>
                <Button
                  color="primary"
                  variant="link"
                  as={Link}
                  to={`/servicos/${pet.slang}`}
                >
                  adotar
                </Button>
              </div>
            </CardBody>
          </PetCard>
        ))}
      </Grid>
    </>
  );
};

PetsGrid.defaultProps = {
  pets: [],
};

PetsGrid.propTypes = {
  pets: Array,
};

export default PetsGrid;
