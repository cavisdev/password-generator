import styled from "styled-components";

const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.main};
  min-height: 100vh;
  width: 100%;
  padding: 1.5em 0.75em;
`;

const Title = styled.h1`
  margin: 0;
  margin-right: -0.06em;
  margin-bottom: 0.5em;
  text-align: center;
  font-size: 12vw;
  line-height: 90%;
  letter-spacing: 0.06em;
  user-select: none;

  @media only screen and (min-width: 768px) {
    font-size: 8vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 6vw;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4vw;
  }
`;

export { GeneratorContainer, Title };
