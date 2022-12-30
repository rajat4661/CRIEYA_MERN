import React from 'react'

const Button = ({
    children,
    rounded = "sm",
    sticky,
    icon,
    isLoading,
    isDisabled,
    type,
    onClick,
  }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        className={`flex items-center justify-center ${icon && "gap-5px"} ${
          rounded === "sm" ? "rounded-small" : "rounded--full"
        } ${sticky && "sticky"}`}
      >
        {icon ? icon : null}
        <>{children}</>
      </button>
    );
  };

export default Button