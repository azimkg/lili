import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';
import { Link } from 'react-router-dom';

const ConnectOldSolana = () => {
    const dispatch = useDispatch();
    const connectSolana = () => {
        dispatch(setModalStage('CONNECT_OLD_SOLANA'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[194px] h-[253px] mb-4" alt="Lili" />
            <div className="flex flex-col items-center">
                <h2 className="text-white uppercase text-3xl sm:text-[40px] md:text-[60px] md:-tracking-[2px] text-center linHeight">Connect to SOLANA</h2>
                <p className="font-dang text-2xl md:text-[31px] text-white text-center md:-tracking-[2px] pt-4 md:mt-0 mb-2">You’ll need to connect your Solana wallet <br /> to claim the new NFTs</p>
                <Button onClick={connectSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>Connect</Button>
                <p className="font-dang text-xl md:text-[26px] text-white text-center md:-tracking-[2px] mt-8">By connecting a wallet, you agree to our</p>
                <Link to={''} className="font-dang text-xl md:text-[26px] text-white text-center md:-tracking-[1px] underline">Terms of Service.</Link>
            </div>
        </div>
    );
};

export default ConnectOldSolana;