import React, { useState, useRef } from "react";
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
  justify-content: space-between;
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

const PetInfo = ({ publication, setPublication }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files;
    console.log(event.target.files);
    setPublication((prev) => ({
      ...prev,
      images: [...prev.images, ...file],
    }));

    console.log(publication);
  };

  const handlePetChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
      <FormLabel>Insira imagens do pet</FormLabel>
      <UploadArea>
        <ImageUpload
          image={
            publication.images[0]
              ? URL.createObjectURL(publication.images[0])
              : UploadIcon
          }
          alt="Select File"
          onClick={handleImageClick}
        ></ImageUpload>
        <input
          multiple
          type="file"
          hidden
          onChange={handleFileChange}
          accept=".jpeg, .jpg, .png, image/jpeg, image/jpg, image/png"
          ref={fileInputRef}
          style={{ opacity: "0", width: "120px", height: "150px" }}
        />

        <ImageUpload
          image={
            publication.images[1]
              ? URL.createObjectURL(publication.images[1])
              : UploadIcon
          }
          alt="Select File"
          onClick={handleImageClick}
        ></ImageUpload>
        <input
          multiple
          type="file"
          hidden
          onChange={handleFileChange}
          accept=".jpeg, .jpg, .png, image/jpeg, image/jpg, image/png"
          ref={fileInputRef}
          style={{ opacity: "0", width: "120px", height: "150px" }}
        />

        <ImageUpload
          image={
            publication.images[2]
              ? URL.createObjectURL(publication.images[2])
              : UploadIcon
          }
          alt="Select File"
          onClick={handleImageClick}
        ></ImageUpload>
        <input
          multiple
          type="file"
          hidden
          onChange={handleFileChange}
          accept=".jpeg, .jpg, .png, image/jpeg, image/jpg, image/png"
          ref={fileInputRef}
          style={{ opacity: "0", width: "120px", height: "150px" }}
        />
      </UploadArea>

      <FormLabel>Sexo</FormLabel>
      <FormButtonGroup
        name={"sex"}
        buttons={[
          { id: "female", name: "feminino" },
          { id: "male", name: "masculino" },
          { id: "undefined", name: "não sei" },
        ]}
        onChange={handlePetChange}
      />

      <FormLabel>Idade</FormLabel>
      <FormSelect
        name={"age"}
        onChange={handlePetChange}
        options={[
          { label: "0 a 6 meses", value: "0 a 6 meses" },
          { label: "6 meses a 2 anos", value: "6 meses a 2 anos" },
          { label: "2 anos 5 anos", value: "2 anos 5 anos" },
          { label: "5 anos ou mais", value: "5 anos ou mais" },
        ]}
      ></FormSelect>

      <FormLabel>Porte</FormLabel>
      <FormSelect
        name={"size"}
        onChange={handlePetChange}
        options={[
          { label: "pequeno", value: "small" },
          { label: "médio", value: "medium" },
          { label: "grande", value: "big" },
        ]}
      ></FormSelect>
    </Root>
  );
};

export default PetInfo;
