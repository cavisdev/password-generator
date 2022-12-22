import { GeneratorContainer, Title } from "../styles/Generator.styles";
import Form from "./Form";
import PasswordDisplay from "./PasswordDisplay";

export default function Generator() {

    return (
        <GeneratorContainer>
            <Title>Password<br/>Generator</Title>
            <Form />
            <PasswordDisplay/>
        </GeneratorContainer>
    )
}