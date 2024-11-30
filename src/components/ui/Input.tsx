import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return (
    <input className="bg-white rounded p-2 w-full" type="text" {...props} />
  );
};

export default Input;
