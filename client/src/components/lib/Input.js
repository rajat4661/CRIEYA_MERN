import React from 'react'

const Input = React.forwardRef(
    (
      { icon, disabled, children, width, margin, label, error, onClick, ...rest },
      ref
    ) => {
      return (
        <div>
          {label ? <label>{label}</label> : null}
          <div
            disabled={disabled}
            margin={margin}
            width={width}
            className={icon && "icon"}
          >
            <input disabled={disabled} ref={ref} onClick={onClick} {...rest} />
            {children}
          </div>
          {error ? <p>{error}</p> : null}
        </div>
      );
    }
  );

export default Input;