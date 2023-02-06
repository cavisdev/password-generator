import { useStore } from "../store/useStore";
import { ArrowButton } from "../styles/ArrowButton.styles";

export default function UpButton() {
  const addLength = useStore((state) => state.addLength);

  return (
    <ArrowButton
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-caret-up"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      onClick={() => addLength()}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 15l-6 -6l-6 6h12" />
    </ArrowButton>
  );
}
