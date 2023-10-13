import React from "react";
import styled, { css } from "styled-components";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { TfiPlus } from "react-icons/tfi";
import "rc-dropdown/assets/index.css";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import Container from "components/atoms/Container";
import Miauau from "../../assets/MiauauLogo.svg";
import Button from "components/atoms/Button";

const Root = styled.header`
  position: relative;
  color: #fff;
  padding: 50px 0;

  ${(props) => css`
    background-color: ${(props) => props.theme.colors.primary.light};
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const NavbarMenu = styled.div`
  display: flex;

  a {
    margin-right: 10px;
  }
`;

const FavoriteIcon = styled(FaHeart)``;

const Logo = styled.div`
  display: flex;
  width: 230px;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
  height: 50px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    margin-right: 8px;
    font-size: 20px;

    &:last-child {
      margin-left: 8px;
    }
  }

  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;

const AccountMenu = () => {
  const menuSelected = ({ key }) => {
    console.log(key);
    if (key === "logout") {
      Cookies.remove("email");
      Cookies.remove("authentication_token");
      window.location = "/";
    }
  };

  return (
    <Menu onSelect={menuSelected}>
      <MenuItem key="logout">Sair</MenuItem>
    </Menu>
  );
};

const Navbar = ({ children }) => {
  const auth = Cookies.get("authentication_token");

  return (
    <Root data-testid="navbar">
      <Container>
        <Content>
          <Link>
            <Logo image={Miauau} />
          </Link>
          <NavbarMenu>
            <Button as={Link} to="/" color="default" variant="default">
              Início
            </Button>
            <Button as={Link} to="/" color="default" variant="default">
              Sobre o Miauau
            </Button>
            <Button as={Link} to="/publicar" color="primary" variant="primary">
              <TfiPlus /> Publicar pet
            </Button>
            {auth && (
              <>
                <Button as={Link} to="/" color="primary" variant="primary">
                  <FavoriteIcon /> Favoritos
                </Button>

                <Dropdown
                  trigger={["click"]}
                  overlay={AccountMenu}
                  animation="slide-up"
                  overlayClassName={"menu"}
                >
                  <Button as={Link} color="primary" variant="primary">
                    <FaUserCircle /> Meu perfil <SlArrowDown />
                  </Button>
                </Dropdown>
              </>
            )}
            {!auth && (
              <Button as={Link} to="/entrar" color="primary" variant="primary">
                Entrar
              </Button>
            )}
          </NavbarMenu>
        </Content>
      </Container>
    </Root>
  );
};

export default Navbar;
