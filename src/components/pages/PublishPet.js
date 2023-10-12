import React, { useState } from "react";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import PetForm from "components/organisms/PetForm";
import MotherPet from "../../assets/MotherPet.svg";

const initialFormValues = {
  title: "",
  description: "",
  category_id: 1,
  images: [],
  pet: {
    kind: "cat",
    sex: "female",
    age: "0 a 6 meses",
    vaccinated: true,
    castrated: true,
    vermifugated: true,
    coat_color: "branca",
    status: "",
    size: "small",
  },
  address: {
    state: "",
    city: "",
    cep: "",
    number: "",
    street: "",
    complement: "",
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
  const [publication, setPublication] = useState(initialFormValues);
  return (
    <Root>
      <GridFill md={2} proportion={"1fr"}>
        <PetForm
          publication={publication}
          setPublication={setPublication}
        ></PetForm>
        <Image image={MotherPet} />
      </GridFill>
    </Root>
  );
};

export default PublishPet;
