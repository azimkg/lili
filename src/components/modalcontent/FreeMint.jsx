import React from 'react';
import sonala from '../../images/solana.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const FreeMint = () => {
    const dispatch = useDispatch();
    const saveWallet = () => {
        dispatch(setModalStage('ONE_FREE'));
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-white uppercase text-4xl md:text-[60px] md:-tracking-[1px] text-center linHeight">WELCOME</h2>
            <p className="font-dang text-xl md:text-[31px] text-white text-center -tracking-[1px] mt-2">You can mint 1 Lilverse NFT for free</p>
            <div className="w-full flex flex-col items-start mb-10">
                <p className="font-dang text-[20px] text-white text-center mt-4 md:mt-8">Solana Wallet</p>
                <div className="bg-[#FD62A6] rounded-[45px] px-5 py-3 w-full">
                    <div className="flex items-center gap-3 p-2">
                        <img src={sonala} className="w-[41px] h-[35px] md:w-[71px] md:h-[55px]" alt="Solana" />
                        <input type="text" placeholder='0x0000000000000' className="bg-[#FD62A6] text-[31px] outline-none text-white/90 w-full" />
                    </div>
                    <div className="h-[1.5px] bg-black/5 border-drop w-full"></div>
                    <div className="flex items-center justify-between  p-3">
                        <span className="font-dang text-xl md:text-[31px] text-white/65 text-center sm:-tracking-[1px]">Balance</span>
                        <span className="font-dang text-2xl md:text-[31px] text-white text-center -tracking-[1px]">0,0 ETH</span>
                    </div>
                </div>
            </div>
            <Button className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'} onClick={saveWallet}>MINT FOR FREE</Button>
        </div>
    );
};

export default FreeMint;