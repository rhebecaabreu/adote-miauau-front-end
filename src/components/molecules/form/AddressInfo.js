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

const AddressInfo = ({ publication, setPublication }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublication((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  return (
    <Root>
      <FormLabel>Estado</FormLabel>
      <FormSelect
        name={"state"}
        onChange={handleChange}
        options={[
          { label: "MS", value: "ms" },
          { label: "MT", value: "mt" },
          { label: "SP", value: "sp" },
          { label: "PR", value: "pr" },
        ]}
      ></FormSelect>

      <FormLabel>Cidade</FormLabel>
      <FormSelect
        name={"city"}
        onChange={handleChange}
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
        value={publication.address.cep}
        placeholder=""
        name="cep"
        onChange={handleChange}
      />

      <FormLabel>Rua</FormLabel>
      <FormInput
        type="text"
        value={publication.address.street}
        placeholder=""
        name="street"
        onChange={handleChange}
      />
      <FormLabel>Número</FormLabel>
      <FormInput
        type="text"
        value={publication.address.number}
        placeholder=""
        name="number"
        onChange={handleChange}
      />
      <FormLabel>Complemento</FormLabel>
      <FormInput
        type="text"
        value={publication.address.complement}
        placeholder=""
        name="complement"
        onChange={handleChange}
      />
    </Root>
  );
};

export default AddressInfo;
