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

const PetInfo = () => {
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
      <FormLabel>Insira imagens do pet</FormLabel>
      <UploadArea>
        <ImageUpload image={UploadIcon}></ImageUpload>
        <ImageUpload image={UploadIcon}></ImageUpload>
        <ImageUpload image={UploadIcon}></ImageUpload>
      </UploadArea>

      <FormLabel>Sexo</FormLabel>
      <FormButtonGroup
        buttons={["feminino", "masculino", "não sei"]}
        onChange={handleChange}
      />

      <FormLabel>Idade</FormLabel>
      <FormSelect
        options={[
          { label: "0 a 6 meses", value: "water" },
          { label: "6 meses a 2 anos", value: "beer" },
          { label: "2 anos 5 anos", value: "wine" },
          { label: "5 anos ou mais", value: "win11e" },
        ]}
      ></FormSelect>

      <FormLabel>Porte</FormLabel>
      <FormSelect
        options={[
          { label: "pequeno", value: "water" },
          { label: "médio", value: "beer" },
          { label: "grande", value: "wine" },
        ]}
      ></FormSelect>
    </Root>
  );
};

export default PetInfo;