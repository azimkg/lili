import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const AgreeOld = () => {
    const dispatch = useDispatch();
    const successConnect = () => {
        dispatch(setModalStage('FINISH_X'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-dang text-xl md:text-[31px] text-white text-center md:-tracking-[2px]">You didn’t hold an old Lilverse NFT <br /> before January 2024</p>
                <Button onClick={successConnect} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px] mt-2'}>ok :(</Button>
            </div>
        </div>
    );
};

export default AgreeOld;