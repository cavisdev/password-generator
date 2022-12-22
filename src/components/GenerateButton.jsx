import { useStore } from "../store/useStore";
import { GenerateButtonContainer } from "../styles/GenerateButton.styles";

export default function GenerateButton() {
    const generatePasswords = useStore((state) => state.generatePasswords)
    
    return (
        <GenerateButtonContainer onClick={() => generatePasswords()}>
            Generate
        </GenerateButtonContainer>
    )
}