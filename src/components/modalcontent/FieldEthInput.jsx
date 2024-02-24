import React from 'react';
import image from '../../images/lili.png'
import { useDispatch } from 'react-redux';
import Button from '../../share/button/Button';
import { setModalStage } from '../../store/modalSlice';
import { Link } from 'react-router-dom';

const FieldEthInput = () => {
    const dispatch = useDispatch();
    const saveWallet = () => {
        dispatch(setModalStage('CONNECT_NEW_SOLANA'));
    }
    return (
        <div className="flex flex-col items-center">
            <img src={image} className="w-[184px] h-[253px] mb-4" alt="Lili" />
            <div className="flex flex-col items-center">
                <h2 className="text-white uppercase text-3xl sm:text-[48px] sm:-tracking-[1px] text-center linHeight">ADD YOUR SOL ADRESS TO THE WHITELIST</h2>
                <p className="font-dang text-xl md:text-[26px] text-white text-center sm:-tracking-[2px] mb-1">To claim the NFTs now, insert your <br /> Solana address here:</p>
                <input type="text" placeholder='0x0000000000000' className="border-[4px] mb-2 border-white rounded-[45px] bg-[#FF8DC6] px-[50px] text-[32px] text-white/80 w-[350px] h-[60px] sm:w-[536px] sm:h-[74px] outline-none" />
                <Button onClick={saveWallet} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>Add</Button>
                <p className="font-dang text-xl md:text-[24px] text-white text-center -tracking-[1px] mt-6">By connecting a wallet, you agree to our</p>
                <Link to={''} className="font-dang text-xl md:text-[24px] text-white text-center md-tracking-[1px] underline">Terms of Service.</Link>
            </div>
        </div>
    );
};

export default FieldEthInput;