import { styChipContainer } from "./styles";

interface ChipsProps {
  label: string;
  onClick: () => void;
}

function Chips({ label, onClick }: ChipsProps) {
  return (
    <button type="button" onClick={onClick} className={styChipContainer}>
      {label}
    </button>
  );
}

export default Chips;
