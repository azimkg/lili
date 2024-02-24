import React, { useState } from 'react';
import lili from "../../images/lili.png"
import Button from '../../share/button/Button';
import Modal from '../../share/modal/Modal';
import ModalContent from '../../share/modal/ModalContent';
import { useDispatch } from 'react-redux';
import { resetModalState } from '../../store/modalSlice';

const Section = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        dispatch(resetModalState())
    };
    return (
        <div className={isOpen ? "bg-[#FEEEDE] h-[full] overflow-x-hidden pb-[94px]" : "bg-[#FEEEDE] md:bg-[#a180db] h-[full] overflow-x-hidden pb-[94px]"}>
            <div className="relative containers flex items-center flex-col gap-[71px]">
                <div className="absolute top-0 left-0 w-[1920px] 2xl:w-[2560px]">
                    <div className="h-[136px] bg-[#FEEEDE]">
                    </div>
                </div>
                <img src={lili} className="relative z-50" alt="Lili png" />
                <Button onClick={openModal} className={'w-[370px] sm:w-[590px] h-[103px]'}>
                    Get my Character
                </Button>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalContent/>
                </Modal>
            </div>
        </div>
    );
};

export default Section;