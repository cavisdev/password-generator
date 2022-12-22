import styled from "styled-components";

const GenerateButtonContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.green};
    width: 45%;
    padding: 8px 0;
    border-radius: 4px;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    user-select: none;

    &:hover, &:focus {
        background-color: ${({ theme }) => theme.colors.ltgreen};
    }

    &:active {
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        opacity: 0.5;
    }
`

export {GenerateButtonContainer}