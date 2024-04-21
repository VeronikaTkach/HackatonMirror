import React from "react";
import s from './style.module.scss';

export const Button = ({ className, text, onClick, colorScheme, disabled, ...props }) => {
  const buttonClassName = colorScheme === 'white' ? s.buttonWhite : s.buttonBlack;
  // const textColor = colorScheme === 'white' ? 'white' : 'black'; // Цвет текста

  return (
    <button
      className={`${s.button} ${buttonClassName} ${className}`}
      // style={{ color: textColor }} // Применяем цвет текста
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;