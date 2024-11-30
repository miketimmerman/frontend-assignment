import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="bg-white h-10 rounded px-2 w-full"
      type="text"
      {...props}
    />
  );
};

export default Input;
