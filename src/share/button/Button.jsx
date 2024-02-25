import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FD62A6] text-[#fff]  rounded-[45px] uppercase border-[4px] border-white drop-shadow text-3xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
