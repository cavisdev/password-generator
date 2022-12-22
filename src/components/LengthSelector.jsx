import { useStore } from "../store/useStore";
import { LengthSelectorContainer, ValueBox } from "../styles/LengthSelector.styles";
import DownButton from "./DownButton";
import UpButton from "./UpButton";

export default function LengthSelector() {
    const length = useStore((state) => state.length)

    return (
        <LengthSelectorContainer>
            Length:
            <UpButton />
            <ValueBox>{length}</ValueBox>
            <DownButton />
        </LengthSelectorContainer>
    )
}