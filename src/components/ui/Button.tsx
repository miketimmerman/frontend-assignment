import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  // TODO add classname utility
  <button
    className={`bg-schiphol-blue h-10 px-4 rounded text-white ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
