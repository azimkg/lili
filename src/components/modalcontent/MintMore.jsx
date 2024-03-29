import React, { useState } from 'react';
import sonala from '../../images/solana.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const MintMore = () => {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(1);

    const decrementNumber = () => {
    if (number > 1) {
        setNumber((prevNumber) => prevNumber - 1);
        }
    };

    const incrementNumber = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    
    const saveWallet = () => {
        dispatch(setModalStage('FINISH_X'));
    }

    return (
        <div className="flex flex-col items-center mt-10 sm:mt-0">
            <h2 className="text-white uppercase text-3xl md:text-[60px] sm:-tracking-[1px] text-center mt-4 linHeight">MINT MORE Lilverse NFTs</h2>
            <p className="font-dang text-xl md:text-[31px] text-white text-center sm:-tracking-[1px] mt-2">You can mint 3 Lilverse NFTs max</p>
            <div className="w-full flex flex-col items-start mb-6">
                <p className="font-dang text-xl md:text-[20px] text-white text-center sm:-tracking-[1px] mt-4">Solana Wallet</p>
                <div className="bg-[#FD62A6] rounded-[45px] px-5 py-3 w-full">
                    <div className="flex items-center gap-3 p-2">
                        <img src={sonala} className="w-[41px] h-[35px] md:w-[71px] md:h-[55px]" alt="Solana" />
                        <input type="text" disabled placeholder='0x0000000000000' className="bg-[#FD62A6] text-[31px] outline-none text-white/90 w-full" />
                    </div>
                    <div className="h-[1.5px] bg-black/5 border-drop w-full"></div>
                    <div className="flex items-center justify-between  p-3">
                        <span className="font-dang text-xl md:text-[31px] text-white/65 text-center -tracking-[1px]">Balance</span>
                        <span className="font-dang text-2xl md:text-[31px] text-white text-center -tracking-[1px]">0,0 <span className="font-dang text-2xl md:text-[31px] text-white/65 text-center -tracking-[1px]">SOL</span></span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 sm:gap-8 mb-6">
                <Button onClick={decrementNumber} className={'w-[72px] h-[74px] font-dang'}>-</Button>
                <Button className={'w-[150px] h-[74px] font-dang'}>{number}</Button>
                <Button onClick={incrementNumber} className={'w-[72px] h-[74px] font-dang'}>+</Button>
            </div>
            <Button className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px] sm:-tracking-[0px]'} onClick={saveWallet}>Mint {number} NFT for {number} SOL</Button>
        </div>
    );
};

export default MintMore;