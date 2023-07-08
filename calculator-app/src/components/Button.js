import React from 'react';
import '../styles/Button.css';

const Button = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button className="calculator-button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
