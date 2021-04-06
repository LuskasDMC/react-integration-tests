import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...rest
}) => {
  return <input {...rest} />;
};

export default Input;
