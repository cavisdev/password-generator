import { FormContainer } from "../styles/Form.styles";
import Button from "./Button";
import GenerateButton from "./GenerateButton";
import LengthSelector from "./LengthSelector";

export default function Form() {

    return (
        <FormContainer>
            <Button name="lowercase" />
            <Button name="uppercase" />
            <Button name="numbers" />
            <Button name="symbols" />
            <LengthSelector />
            <GenerateButton />
        </FormContainer>
    )
}