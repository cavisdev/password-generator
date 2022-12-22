import styled from "styled-components";

const GeneratorContainer = styled.div`
display: flex;
flex-direction: column;
  max-width: 560px;
  max-height: 560px;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0px 4px 6px 4px rgba(94, 69, 95, 0.45);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  min-width: 280px;
  padding: 24px 12px;
`;

const Title = styled.h1`
  margin: 0;
  margin-right: -0.06em;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 3rem;
  line-height: 90%;
  letter-spacing: 0.06em;
  user-select: none;
`;

export { GeneratorContainer, Title };
