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
        <div className=" w-full h-[80vh] sm:h-[70vh]">
        <Header  />
        <div className="w-full bg-[#FEEEDE] flex justify-center 4xl:items-center adaptiv_section overflow-hidden h-[80vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] 4xl:h-[80vh] 3xl:h-[81vh]  5xl:h-[90vh] pt-[10px] pb-[2vw] top-[80px]">
            <div className="relative containers flex items-center flex-col gap-10">
                <img style={{maxWidth:"55%", maxHeight:'55%'}} src={lili} className="relative z-50  mr-[30px]" alt="Lili png" />
                <Button onClick={openModal} className={'w-[370px] sm:w-[590px] h-[74px] md:h-[90px] xl:h-[83px] 2xl:h-[103px] sm:text-[36px] md:text-[66px]'}>
                    Get my Character
                </Button>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <ModalContent/>
                </Modal>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Section;