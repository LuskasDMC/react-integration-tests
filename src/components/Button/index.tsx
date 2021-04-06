import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, isLoading, ...rest }) => {
  return (
    <button {...rest}>
      {isLoading ? (
        <span data-testid="loading">loading...</span>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
