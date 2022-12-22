import styled from "styled-components";

const LengthSelectorContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 45%;
padding: 8px 0;
user-select: none;
letter-spacing: 1px;
font-weight: 700;
`

const ValueBox = styled.div`
    background-color: ${({ theme }) => theme.colors.darker};
    width: 2rem;
    text-align: center;
    border-radius: 4px;
    font-weight: 400;
`

export {LengthSelectorContainer, ValueBox}