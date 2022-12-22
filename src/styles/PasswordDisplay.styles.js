import styled from "styled-components";

const DisplayContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darker};
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
`;

const Password = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25%;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.bright}
  }

  &:active {
    opacity: 0.5;
  }
`;

const CopyBox = styled.div`
  position: absolute;
  padding: .5rem 1rem;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  top: 8px;
  right: 8px;
  z-index: 10;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;

  visibility: ${props => props.isVisible ? "visible" : "hidden"}
`

export { DisplayContainer, Password, CopyBox };
