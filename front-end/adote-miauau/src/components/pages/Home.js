import React, { useState, useEffect } from "react";
import Grid from "components/atoms/Grid";
import Sidebar from "../organisms/Sidebar";
import PetsGrid from "components/organisms/PetsGrid";
import styled from "styled-components";

const Root = styled.section`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  // const pets = [
  //   {
  //     id: 1,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 1,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 1,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 1,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 1,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 1,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 7,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  //   {
  //     id: 7,
  //     title: "gatinho lindo 40 dias",
  //     description:
  //       "estou doando esse bebe, tem 40 dias, já come ração e usa caixa de areiaa",
  //     status: "waiting_approval",
  //     updated_at: "2023-08-13T02:52:20.240Z",
  //     user: {
  //       id: 1,
  //       email: "rhebecaabreu@gmail.com",
  //       role: "protector",
  //       permissions: "common",
  //       full_name: "rhebeca abreu",
  //       user_name: "rhebeca 2",
  //       phone: "secret123",
  //     },
  //     address: {
  //       id: 1,
  //       state: "Mato Grosso do Sul",
  //       city: "Campo Grande",
  //       cep: "7900000",
  //       number: 123,
  //       street: "Afonso Pena",
  //       complement: "perto do shopping",
  //       addressable_type: "Publication",
  //       addressable_id: 1,
  //       created_at: "2023-08-13T02:52:20.293Z",
  //       updated_at: "2023-08-13T02:52:20.293Z",
  //     },
  //     pet: {
  //       id: 7,
  //       kind: "cat",
  //       age: "menos de 1 ano",
  //       vaccinated: false,
  //       castrated: false,
  //       vermifugated: true,
  //       coat_color: "caramelo",
  //       status: "looking_home",
  //       size: "small",
  //       sex: null,
  //       images: [
  //         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  //       ],
  //     },
  //   },
  // ];

  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://192.168.100.6:3000")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setPets(data);
        },
        (error) => {
          console.log(error);
          setError(error);
        }
      );
  }, []);

  return (
    <Root>
      <Grid md={1} proportion={"1fr 6fr"}>
        <Sidebar></Sidebar>
        <PetsGrid pets={pets}></PetsGrid>
      </Grid>
    </Root>
  );
};

export default Home;
