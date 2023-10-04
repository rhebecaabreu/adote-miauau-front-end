import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormLabel from "components/atoms/FormLabel";
import FormInput from "components/atoms/FormInput";
import FormTextArea from "components/atoms/FormTextArea";
import FormButtonGroup from "components/atoms/FormButtonGroup";
import api from "services/api";

const Root = styled.form`
  button {
    text-transform: lowercase;
  }
`;

const PublicationInfo = ({ publication, setPublication }) => {
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublication((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [categories]);

  return (
    <Root>
      <FormLabel>Título da publicação</FormLabel>
      <FormInput
        type="text"
        value={publication.title}
        placeholder=""
        name="title"
        onChange={handleChange}
      ></FormInput>

      <FormLabel>Descrição</FormLabel>
      <FormTextArea
        type="text"
        value={publication.description}
        placeholder=""
        name="description"
        onChange={handleChange}
      ></FormTextArea>

      <FormLabel>Tipo de publicação</FormLabel>
      <FormButtonGroup
        buttons={categories}
        name={"category_id"}
        onChange={handleChange}
      />

      <FormLabel>Tipo de pet</FormLabel>
      <FormButtonGroup
        name={"kind"}
        buttons={[
          { id: "cat", name: "gato" },
          { id: "dog", name: "cão" },
        ]}
        onChange={handlePetChange}
      />
    </Root>
  );
};

export default PublicationInfo;
