import React from "react";
import styled from "styled-components";
import FormLabel from "components/atoms/FormLabel";
import FormButtonGroup from "components/atoms/FormButtonGroup";
import FormSelect from "components/atoms/FormSelect";

const Root = styled.div`
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const PetHealth = ({ setPublication }) => {
  const handlePetChange = (e) => {
    let { name, value } = e.target;

    setPublication((prev) => ({
      ...prev,
      pet: {
        ...prev.pet,
        [name]: value,
      },
    }));
  };

  return (
    <Root>
      <FormLabel>O pet foi vacinado?</FormLabel>
      <FormButtonGroup
        name={"vaccinated"}
        buttons={[
          { id: "yes", name: "sim" },
          { id: "no", name: "não" },
          { id: "unknown", name: "não sei" },
        ]}
        onChange={handlePetChange}
      />

      <FormLabel>O pet foi castrado?</FormLabel>
      <FormButtonGroup
        name={"castrated"}
        buttons={[
          { id: "yes", name: "sim" },
          { id: "no", name: "não" },
          { id: "unknown", name: "não sei" },
        ]}
        onChange={handlePetChange}
      />

      <FormLabel>O pet foi vermifugado?</FormLabel>
      <FormButtonGroup
        name={"vermifugated"}
        buttons={[
          { id: "yes", name: "sim" },
          { id: "no", name: "não" },
          { id: "unknown", name: "não sei" },
        ]}
        onChange={handlePetChange}
      />

      <FormLabel>Cor da pelagem</FormLabel>
      <FormSelect
        name={"coat_color"}
        onChange={handlePetChange}
        options={[
          { label: "branca", value: "branca" },
          { label: "preta", value: "preta" },
          { label: "laranja", value: "laranja" },
          { label: "cinza", value: "cinza" },
          { label: "tricolor", value: "tricolor" },
          { label: "bicolor", value: "bicolor" },
          { label: "caramelo", value: "caramelo" },
        ]}
      ></FormSelect>

      {/* <FormLabel>Raça (opcional)</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="raca"
        onChange={handlePetChange}
      ></FormInput> */}
    </Root>
  );
};

export default PetHealth;
