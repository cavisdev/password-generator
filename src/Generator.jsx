import { GeneratorContainer, Title } from "./styles/Generator.styles";
import Form from "./components/Form";
import PasswordDisplay from "./components/PasswordDisplay";

export default function Generator() {

    return (
        <GeneratorContainer>
            <Title>Password<br/>Generator</Title>
            <Form />
            <PasswordDisplay/>
        </GeneratorContainer>
    )
}