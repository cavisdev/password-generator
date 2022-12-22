import styled from "styled-components";

const ArrowButton = styled.svg`
margin: 0 4px;
  stroke: ${({ theme }) => theme.colors.white};
  fill: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.bright};
    fill: ${({ theme }) => theme.colors.bright};
  }
`;

export { ArrowButton };
