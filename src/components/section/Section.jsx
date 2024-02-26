import React, { useState } from 'react';
import lili from "../../images/lili.png"
import Button from '../../share/button/Button';
import Modal from '../../share/modal/Modal';
import ModalContent from '../../share/modal/ModalContent';
import { useDispatch } from 'react-redux';
import { resetModalState } from '../../store/modalSlice';
import Header from '../header/Header';
import Footer from '../footer/Footer';

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
        <div className="relative w-full h-[100vh]">
        <Header className={'absolute top-0 left-0 z-20'} />
        <div className="w-full bg-[#FEEEDE] flex justify-center 4xl:items-center adaptiv_section overflow-hidden h-[90vh] absolute pt-16 sm:pt-20 md:pt-14 lg:pt-10 4xl:pt-0 pb-[3vw] top-[80px]">
            <div className="relative containers flex items-center flex-col gap-10">
                <img src={lili} className="relative z-50 w-[33vh] 4xl:w-[50vh]  mr-[30px]" alt="Lili png" />
                <Button onClick={openModal} className={'w-[370px] sm:w-[590px] h-[74px] md:h-[90px] xl:h-[83px] 2xl:h-[103px] sm:text-[36px] md:text-[66px]'}>
                    Get my Character
                </Button>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalContent/>
                </Modal>
            </div>
        </div>
        <Footer className={'absolute bottom-0 left-0 z-20'}/>
        </div>
    );
};

export default Section;