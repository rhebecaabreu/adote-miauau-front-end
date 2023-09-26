import React, { useState } from "react";
import styled from "styled-components";
import { getAllStates, getStateCities } from "easy-location-br";
import FormLabel from "components/atoms/FormLabel";
import FormInput from "components/atoms/FormInput";
import FormSelect from "components/atoms/FormSelect";

const Root = styled.div`
  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const AddressInfo = ({ publication, setPublication }) => {
  const [cities, setCities] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "state") {
      setCities(findCities(value));
    }

    setPublication((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const states = () => {
    const states = [];
    states.push(defaultItem);
    getAllStates().forEach((state) => {
      states.push({
        label: state.name,
        value: state.id,
      });
    });
    return states;
  };

  const defaultItem = {
    label: "Selecione",
    value: "",
  };

  const findCities = (state) => {
    const cities = [];
    cities.push(defaultItem);
    getStateCities(state).forEach((citie) => {
      cities.push({
        label: citie.name,
        value: citie.name,
      });
    });
    return cities;
  };

  return (
    <Root>
      <FormLabel>Estado</FormLabel>
      <FormSelect
        name={"state"}
        onChange={handleChange}
        options={states()}
      ></FormSelect>

      <FormLabel>Cidade</FormLabel>
      <FormSelect
        name={"city"}
        onChange={handleChange}
        options={cities}
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
