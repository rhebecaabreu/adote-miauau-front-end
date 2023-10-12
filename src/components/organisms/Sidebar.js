import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormButtonGroup from "components/atoms/FormButtonGroup";
import api from "services/api";
import Adote from "../../assets/Adote.svg";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: #aaa;
  padding: 20px;

  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.colors.primary.light};
  }

  h4 {
    margin: 12px 0 16px 0;
    text-transform: uppercase;
  }

  h5 {
    letter-spacing: 1px;
    line-height: 1;
    margin: 0 0 16px 0;
  }
`;

const Categories = styled.div`
  width: 100%;

  button {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    padding: 10px 14px;
    text-transform: capitalize;
  }
`;

const FilterLabel = styled.h5`
  font-weight: 500;
  padding: 0;
`;

const Sidebar = ({ setPets }) => {
  const [categories, setCategories] = useState([]);
  const [kindFilter, setKindFilter] = useState("cat");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handlePetKindChange = (e) => {
    const { value } = e.target;
    setKindFilter(value);
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/publications?kind=${kindFilter}&category=${selectedCategory}`)
      .then((response) => setPets(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [kindFilter, selectedCategory]);

  return (
    <Root>
      <Categories>
        <FormButtonGroup
          name={"category"}
          buttons={categories}
          onChange={handleCategoryChange}
          variant={"group"}
          icon={Adote}
        />
      </Categories>

      <h4>Filtros</h4>
      <FilterLabel>espécie</FilterLabel>

      <FormButtonGroup
        name={"kind"}
        variant={"group"}
        buttons={[
          { id: "cat", name: "gatos" },
          { id: "dog", name: "cães" },
        ]}
        onChange={handlePetKindChange}
      />
    </Root>
  );
};

export default Sidebar;
