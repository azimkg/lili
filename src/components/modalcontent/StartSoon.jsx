import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const StartSoon = () => {
    const dispatch = useDispatch();
    const successConnect = () => {
        dispatch(setModalStage('MINT MORE'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex flex-col gap-3">
                <p className="font-dang text-xl md:text-[31px] text-white text-center -tracking-[2px]">Sorry, you’re not a part of the whitelist. <br /> The public mint starts soon!</p>
                <Button onClick={successConnect} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>ok :(</Button>
            </div>
        </div>
    );
};

export default StartSoon;