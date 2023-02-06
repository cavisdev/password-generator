import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.midtone};
  border-radius: 4px;
  width: 45%;
  text-align: center;
  padding: 0.5em 0;
  font-size: 6vw;
  text-transform: capitalize;
  letter-spacing: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  user-select: none;

  &.inactive {
    background-color: ${({ theme }) => theme.colors.darker};
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: rgba(245, 245, 244, 0.5);
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.bright};
  }

  &:active {
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

export { ButtonContainer };
