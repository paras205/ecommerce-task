import React, { FC } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  loading?: boolean;
  placeholder: string;
  className: string;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { type, placeholder, loading, className, onClick } = props;
  return (
    <div className="button">
      <button className={`btn ${className}`} type={type} onClick={onClick}>
        {loading ? "Loading...." : placeholder}
      </button>
    </div>
  );
};

export default Button;
