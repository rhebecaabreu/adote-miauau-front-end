import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/atoms/Button";
import FormLabel from "components/atoms/FormLabel";
import FormInput from "components/atoms/FormInput";
import FormTextArea from "components/atoms/FormTextArea";
import FormButtonGroup from "components/atoms/FormButtonGroup";
import FormSelect from "components/atoms/FormSelect";
import { BsFileImageFill } from "react-icons/bs";
import UploadIcon from "../../../assets/upload.svg";

const Root = styled.div`
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const PetHealth = ({ setPublication }) => {
  const handlePetChange = (e) => {
    const { name, value } = e.target;
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
          { id: "true", name: "sim" },
          { id: "false", name: "não" },
        ]}
        onChange={handlePetChange}
      />

      <FormLabel>O pet foi castrado?</FormLabel>
      <FormButtonGroup
        name={"castrated"}
        buttons={[
          { id: "true", name: "sim" },
          { id: "false", name: "não" },
        ]}
        onChange={handlePetChange}
      />

      <FormLabel>O pet foi vermifugado?</FormLabel>
      <FormButtonGroup
        name={"vermifugated"}
        buttons={[
          { id: "true", name: "sim" },
          { id: "false", name: "não" },
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
