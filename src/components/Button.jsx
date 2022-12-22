import { useStore } from "../store/useStore";
import { ButtonContainer } from "../styles/Button.styles";

export default function Button(props) {
  const setSelection = useStore((state) => state.setSelection);
  const active = useStore((state) => state[props.name]);

  return (
      <ButtonContainer
        onClick={() => setSelection(props.name)}
        className={active ? "" : "inactive"}
      >
        {props.name}
      </ButtonContainer>
  );
}
