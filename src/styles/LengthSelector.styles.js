import styled from "styled-components";

const LengthSelectorContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 45%;
padding: 0.5em 0;
user-select: none;
font-size: 4vw;
letter-spacing: 0.06em;
font-weight: 700;
gap: 0.5em;

@media only screen and (min-width: 768px) {
    font-size: 3vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5vw;
  }
`

const ValueBox = styled.div`
    background-color: ${({ theme }) => theme.colors.darker};
    padding: 0.5em 1em;
    text-align: center;
    border-radius: 4px;
    font-size: 4vw;
    font-weight: 400;

    @media only screen and (min-width: 768px) {
        font-size: 3vw;
      }
    
      @media only screen and (min-width: 1024px) {
        font-size: 2vw;
      }
    
      @media only screen and (min-width: 1024px) {
        font-size: 1.5vw;
      }
`

export {LengthSelectorContainer, ValueBox}