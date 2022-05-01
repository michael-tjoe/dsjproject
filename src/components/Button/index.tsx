import React, { ReactNode, memo } from "react";
import noop from "src/helpers/noop";
import { styButton } from "./styles";

export interface ButtonProps {
  block?: boolean;
  children: ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}

function Button({
  block = false,
  children,
  primary,
  className,
  onClick = noop,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styButton} ${className}`}
      onClick={onClick}
      {...(primary && { "data-primary": true })}
      {...(block && { "data-block": true })}
    >
      {children}
    </button>
  );
}

export default memo(Button);
