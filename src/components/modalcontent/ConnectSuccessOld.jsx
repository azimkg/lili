import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';


const ConnectSuccessOld = () => {
    const dispatch = useDispatch();

    const freeMint = () => {
        dispatch(setModalStage('MINT FOR FREE'));
    }

    const paidMint = () => {
        dispatch(setModalStage('PAID_MINT'));
    }
    function getRemainingTime() {
    const targetDate = new Date('February 29, 2024 22:00:00 UTC');
    const now = new Date();
    const difference = targetDate - now;
        if (difference <= 0) {
            paidMint()
        } else {
            freeMint()
        }
    }

    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-dang text-xl md:text-[26px] text-white text-center md:-tracking-[2px]">Nice! You have successfully connected <br /> your wallet.</p>
                <Button onClick={getRemainingTime} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px] mt-2'}>CONTINUE</Button>
            </div>
        </div>
    );
};

export default ConnectSuccessOld;