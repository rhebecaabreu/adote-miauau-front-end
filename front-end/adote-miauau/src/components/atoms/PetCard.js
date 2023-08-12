import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region CardBody

const StyledBody = styled.div`
  padding: 16px;
  height: 100%;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region CardMedia

const StyledMedia = styled.div`
  border: 6px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  display: flex;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 220px;
`;

export const CardMedia = ({ image, children }) => (
  <StyledMedia image={image}>{children}</StyledMedia>
);

CardMedia.defaultProps = {
  image: undefined,
  children: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

//#endregion

//#region CardMediaDescription

const StyledMediaDescription = styled.div`
  padding: 8px 16px;
  color: #fff;
  align-self: flex-end;
  flex: 1;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const CardMediaDescription = ({ children }) => (
  <StyledMediaDescription>{children}</StyledMediaDescription>
);

CardMediaDescription.defaultProps = {
  children: undefined,
};

CardMediaDescription.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region Card

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary.light};
  border-radius: 4px;
  border: none;
  overflow: hidden;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;

//#endregion
