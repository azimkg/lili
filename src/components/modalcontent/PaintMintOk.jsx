import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const PaintMintOk = () => {
    const dispatch = useDispatch();
    const successConnect = () => {
        dispatch(setModalStage('FINISH_X'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-dang text-2xl md:text-[31px] text-white text-center md:-tracking-[2px]">You can mint 5 <br /> NFTs max</p>
                <Button onClick={successConnect} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>ok :(</Button>
            </div>
        </div>
    );
};

export default PaintMintOk;