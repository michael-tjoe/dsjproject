import { styChipContainer } from "./styles";

function Chips({ label }) {
  return <div className={styChipContainer}>{label}</div>;
}

export default Chips;
