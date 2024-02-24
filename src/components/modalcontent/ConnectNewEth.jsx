import React from 'react';
import image from '../../images/lili.png'
import Button from '../../share/button/Button';
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import { Link } from 'react-router-dom';

const ConnectNewSolana = () => {
    const dispatch = useDispatch();
    const connectSolana = () => {
        dispatch(setModalStage('SUCCESS_NEW_ETH'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[258px] h-[340px] mb-4" alt="Lili" />
            <div className="flex flex-col items-center">
                <h2 className="text-white uppercase text-[40px] sm:text-[68px] sm:-tracking-[2px] text-center">Connect to eth</h2>
                <p className="font-dang text-xl md:text-[31px] text-white text-center -tracking-[2px] mb-2">You’ll need to connect your Ethereum wallet <br /> to verify your old NFTs</p>
                <Button onClick={connectSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[94px]'}>Connect</Button>
                <p className="font-dang text-xl md:text-[26px] text-white text-center -tracking-[2px] mt-8">By connecting a wallet, you agree to our</p>
                <Link to={''} className="font-dang text-xl md:text-[26px] text-white text-center -tracking-[1px] underline mb-10">Terms of Service.</Link>
            </div>
        </div>
    );
};

export default ConnectNewSolana;