import React from 'react';
import image from '../../images/lili.png'
import Button from '../../share/button/Button';
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';

const ModalInitial = () => {
    const dispatch = useDispatch();
    const createNewSolana = () => {
        dispatch(setModalStage('CREATE_NEW_ETH'));
    }
    const createOldSolana = () => {
        dispatch(setModalStage('OLD_SOLANA'));
    }

    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[258px] h-[340px] mb-4" alt="Lili" />
            <div className="flex flex-col gap-7 items-center">
                <h2 className="text-white text-[50px] md:text-[86px]">let’s Start</h2>
                <Button onClick={createOldSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[94px]'}>i’m new HERE</Button>
                <Button onClick={createNewSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[94px] mb-10'}>I’m an old holder</Button>
            </div>
        </div>
    );
};

export default ModalInitial;