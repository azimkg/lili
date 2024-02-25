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
        <div className="w-full bg-[#FEEEDE] flex items-center justify-center adaptiv_section overflow-hidden h-[82vh] lg:h-[80vh] xl:h-[75vh] 2xl:h-[70vh] 3xl:h-[80vh] pt-[10px] pb-[3vw]">
            <div className="relative containers flex items-center flex-col gap-10">
                <div className="absolute top-0 left-0 w-[1920px] 2xl:w-[2560px]">
                    <div className="h-[136px] bg-[#FEEEDE]">
                    </div>
                </div>
                <img src={lili} className="relative z-50 w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[20vw] xl:w-[15vw] 2xl:w-[15vw] mr-[30px]" alt="Lili png" />
                <Button onClick={openModal} className={'w-[370px] sm:w-[590px] h-[74px] md:h-[90px] xl:h-[83px] 2xl:h-[103px] sm:text-[36px] md:text-[66px]'}>
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