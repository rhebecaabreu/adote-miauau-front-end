import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import PetForm from "components/organisms/PetForm";
import MotherPet from "../../assets/MotherPet.svg";

const initialFormValues = {
  title: "",
  description: "",
  publication_type: "",
  images: [],
  pet: {
    type: "",
    sex: "",
    age: "",
    size: "",
    vaccinated: "",
    castrated: "",
    vermifugated: "",
    coat_color: "",
    race: "",
  },
};

const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GridFill = styled(Grid)`
  flex: 1 1 auto;
  max-height: 100%;
`;

const PublishPet = () => {
  const [pet, setPet] = useState(initialFormValues);
  return (
    <Root>
      <GridFill md={2} proportion={"1fr"}>
        <PetForm pet={pet} setPet={setPet}>
          form
        </PetForm>
        <Image image={MotherPet} />
      </GridFill>
    </Root>
  );
};

export default PublishPet;
