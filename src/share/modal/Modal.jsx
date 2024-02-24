import React from 'react';
import close from '../../images/close.png'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 inset-0 top-0 z-50 backdrop-blur flex items-center justify-center overflow-y-auto w-full h-full px-2 pt-0 sm:pt-[300px] md:pt-[300px]">
        <div className="relative w-full md:w-[658px] bg-[#FE9ECE] shadow-lg py-10 md:py-4 px-1 md:px-10 rounded-[40px] sm:rounded-[87px] filter-drop">
            <button
                onClick={onClose}
                className="absolute top-9 sm:top-10 right-5 md:right-10 "
            >
            <img src={close} alt="Close icon" />
            </button>
            <div className="p-2 md:p-6">{children}</div>
        </div>
    </div>
  );
};

export default Modal;
