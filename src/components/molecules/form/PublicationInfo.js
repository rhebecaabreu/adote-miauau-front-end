import React, { useState } from "react";
import styled from "styled-components";
import FormLabel from "components/atoms/FormLabel";
import FormInput from "components/atoms/FormInput";
import FormTextArea from "components/atoms/FormTextArea";
import FormButtonGroup from "components/atoms/FormButtonGroup";

const Root = styled.form`
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const PublicationInfo = () => {
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
      <FormLabel>Título da publicação</FormLabel>
      <FormInput
        type="text"
        value={title}
        placeholder=""
        name="title"
        onChange={handleChange}
      ></FormInput>
      <FormLabel>Descrição</FormLabel>
      <FormTextArea
        type="text"
        value={title}
        placeholder=""
        name="title"
        onChange={handleChange}
      ></FormTextArea>
      <FormLabel>Tipo de publicação</FormLabel>
      <FormButtonGroup
        buttons={["adoção", "achado", "perdido"]}
        onChange={handleChange}
      />
      <FormLabel>Tipo de pet</FormLabel>
      <FormButtonGroup buttons={["gato", "cão"]} onChange={handleChange} />
    </Root>
  );
};

export default PublicationInfo;
