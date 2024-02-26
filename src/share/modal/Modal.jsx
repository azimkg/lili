import React from 'react';
import close from '../../images/close.png'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 top-0 z-50  inset-0 w-full h-full  backdrop-blur flex items-center justify-center overflow-y-auto  px-2 pt-0">
        <div className="relative w-full md:w-[658px] bg-[#FE9ECE] shadow-lg py-10 md:py-4 px-1 md:px-8 rounded-[40px] sm:rounded-[87px] filter-drop">
            <button
                onClick={onClose}
                className="absolute top-9 sm:top-10 right-5 md:right-10 "
            >
            <img src={close} className='w-[28px] h-[25px]' alt="Close icon" />
            </button>
            <div className="p-2 md:p-4">{children}</div>
        </div>
    </div>
  );
};

export default Modal;
