import styled from "styled-components";

const GenerateButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green};
  width: 45%;
  padding: 0.5em 0;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 6vw;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.ltgreen};
  }

  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    opacity: 0.5;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5vw;
  }
`;

export { GenerateButtonContainer };
