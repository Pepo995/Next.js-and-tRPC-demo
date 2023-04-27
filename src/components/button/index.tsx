import React, { HTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      "rounded-lg border border-blue-500 bg-transparent px-4 py-2 text-xs font-bold uppercase text-blue-500 hover:border-blue-700 hover:text-blue-700",
      className
    )}
    {...props}
  >
    {text}
  </button>
);

export default Button;
