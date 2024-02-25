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
        <div className="bg-[#FEEEDE] h-[full] overflow-x-hidden pb-[94px]">
            <div className="relative containers flex items-center flex-col gap-[61px]">
                <div className="absolute top-0 left-0 w-[1920px] 2xl:w-[2560px]">
                    <div className="h-[136px] bg-[#FEEEDE]">
                    </div>
                </div>
                <img src={lili} className="relative w-[327px] h-[475px] md:w-[270px] md:h-[375px] xl:w-[327px] xl:h-[475px] 2xl:w-[527px] 2xl:h-[675px] z-50 mt-[10px] mr-[30px]" alt="Lili png" />
                <Button onClick={openModal} className={'w-[370px] sm:w-[590px] h-[74px] md:h-[90px] lg:h-[103px] sm:text-[36px] md:text-[66px]'}>
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