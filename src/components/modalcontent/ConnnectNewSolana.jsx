import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';
import { Link } from 'react-router-dom';

const ConnnectNewSolana = () => {
    const dispatch = useDispatch();
    const connectSolana = () => {
        dispatch(setModalStage('SUCCESS_NEW_SOLANA'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex flex-col ">
                <h2 className="text-white uppercase text-3xl sm:text-[60px] sm:-tracking-[1px] text-center linHeight">Connect to SOLANA</h2>
                <p className="font-dang text-xl md:text-[31px] text-white text-center pt-4 md:-tracking-[2px] mb-3">You’ll need to connect your <br /> Solana wallet</p>
                <Button onClick={connectSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>Connect</Button>
                <p className="font-dang text-xl md:text-[31px] text-white text-center md:-tracking-[2px] mt-6">By connecting a wallet, you agree to our</p>
                <Link to={'/terns'} className="font-dang text-xl md:text-[26px] text-white text-center md:-tracking-[1px] underline">Terms of Service.</Link>
            </div>
        </div>
    );
};

export default ConnnectNewSolana;