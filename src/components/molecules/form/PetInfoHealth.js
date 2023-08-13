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

const UploadArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageUpload = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 120px;
  width: 120px;
  height: 150px;
`;

const PetHealth = () => {
  const [inputValue, setInputValue] = useState({ title: "", price: "" });
  const { title } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // setInputValue((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    // console.log(inputValue);
  };

  return (
    <Root>
      <FormLabel>O pet foi vacinado?</FormLabel>
      <FormButtonGroup buttons={["sim", "não"]} onChange={handleChange} />

      <FormLabel>O pet foi castrado?</FormLabel>
      <FormButtonGroup buttons={["sim", "não"]} onChange={handleChange} />

      <FormLabel>O pet foi vermifugado?</FormLabel>
      <FormButtonGroup buttons={["sim", "não"]} onChange={handleChange} />

      <FormLabel>Cor da pelagem</FormLabel>
      <FormSelect
        options={[
          { label: "branca", value: "water" },
          { label: "preta", value: "beer" },
          { label: "laranja", value: "wine" },
          { label: "caramelo", value: "win11e" },
        ]}
      ></FormSelect>

      <FormLabel>Raça (opcional)</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="raca"
        onChange={handleChange}
      ></FormInput>
    </Root>
  );
};

export default PetHealth;
