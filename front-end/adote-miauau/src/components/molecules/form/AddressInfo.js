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

const AddressInfo = () => {
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
      <FormLabel>Estado</FormLabel>
      <FormSelect
        options={[
          { label: "MS", value: "ms" },
          { label: "MT", value: "mt" },
          { label: "SP", value: "sp" },
          { label: "PR", value: "pr" },
        ]}
      ></FormSelect>

      <FormLabel>Cidade</FormLabel>
      <FormSelect
        options={[
          { label: "Campo Grande", value: "cg" },
          { label: "São Paulo", value: "SP" },
          { label: "Curitiba", value: "PR" },
          { label: "Cuiabá", value: "MT" },
        ]}
      ></FormSelect>

      <FormLabel>CEP</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="cep"
        onChange={handleChange}
      />

      <FormLabel>Rua</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="street"
        onChange={handleChange}
      />
      <FormLabel>Número</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="number"
        onChange={handleChange}
      />
      <FormLabel>Complemento</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="compl"
        onChange={handleChange}
      />
    </Root>
  );
};

export default AddressInfo;
