import { useState } from "react";
import { useStore } from "../store/useStore";
import { CopyBox, DisplayContainer, Password } from "../styles/PasswordDisplay.styles";

export default function PasswordDisplay() {
    const passwords = useStore((state) => state.passwords)
    const [isCopied, setIsCopied] = useState(false)
    
    const passDisplay = passwords.map(item => <Password key={item} onClick={() => {
        handleCopy()
        navigator.clipboard.writeText(item)
    }}>{item}</Password>)

    function handleCopy() {
        setIsCopied(true)
        setTimeout(() => { setIsCopied(false) }, 1000)
    }

    return (
        <DisplayContainer>
            {passDisplay}
            <CopyBox isVisible={ isCopied }>COPIED</CopyBox>
        </DisplayContainer>
    )
} 