import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import PetCard, { CardBody, CardMedia } from "components/atoms/PetCard";
import styled from "styled-components";

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const PetsGrid = ({ pets }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Grid md={3} proportion={"1fr"}>
        {pets.map((pet) => (
          <PetCard key={pet.id}>
            <CardBody>
              <CardMedia image={pet.image} />
              <p>
                <h6>{pet.title}</h6>
              </p>
              <p>{pet.user.name}</p>
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
