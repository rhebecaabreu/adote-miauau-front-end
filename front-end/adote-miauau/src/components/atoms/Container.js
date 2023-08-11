import styled, { css } from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const breakColumnAt = (size) => (props) =>
  props[size] &&
  css`
    ${breakAt(BreakpointSizes[size])} {
      grid-template-columns: repeat(${(props) => props[size]}, 1fr);
    }
  `;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}
`;

export default Grid;
