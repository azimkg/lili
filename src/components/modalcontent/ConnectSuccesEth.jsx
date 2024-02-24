import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const ConnectSuccesEth = () => {
    const dispatch = useDispatch();
    const successConnect = () => {
        dispatch(setModalStage('ENTER_NEW_ETH'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-dang text-xl md:text-[31px] text-white text-center sm:-tracking-[2px]">Nice! You have successfully connected <br /> your wallet.</p>
                <Button onClick={successConnect} className={'w-[350px] h-[60px] sm:w-[536px] mt-2 sm:h-[74px]'}>CONTINUE</Button>
            </div>
        </div>
    );
};

export default ConnectSuccesEth;