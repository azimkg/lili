import React from 'react';
import eth from '../../images/eth.png'
import sonala from '../../images/solana.png'
import { useDispatch } from 'react-redux';
import { setModalStage } from '../../store/modalSlice';
import Button from '../../share/button/Button';

const ClaimNewNft = () => {
    const dispatch = useDispatch();
    const saveWallet = () => {
        dispatch(setModalStage('HOLDS_NO_NFT'));
    }
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-white uppercase text-4xl sm:text-[70px] md:text-[110px] md:-tracking-[4px] text-center linHeight">WELCOME</h2>
            <p className="font-dang text-xl md:text-[31px] text-white text-center -tracking-[1px] mt-2">You hold 0 old NFTs</p>
            <div className="w-full flex flex-col items-start">
                <p className="font-dang text-[26px] text-white text-center -tracking-[1px] mt-8">Ethereum Wallet</p>
                <div className="bg-[#FD62A6] rounded-[45px] px-5 py-3 w-full">
                    <div className="flex items-center gap-1">
                        <img src={eth} className="w-[86px] h-[94px]" alt="Etheurum" />
                        <input type="text" placeholder='0x0000000000000' className="bg-[#FD62A6] text-[31px] outline-none text-white/90 w-full" />
                    </div>
                    <div className="h-[1.5px] bg-black/5 border-drop w-full"></div>
                    <div className="flex items-center justify-between p-3">
                        <span className="font-dang text-xl md:text-[31px] text-white/65 text-center -tracking-[1px]">Balance</span>
                        <span className="font-dang text-2xl md:text-[31px] text-white text-center -tracking-[1px]">0,0 ETH</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-start">
                <p className="font-dang text-[26px] text-white text-center -tracking-[1px] mt-8">Solana Wallet</p>
                <div className="bg-[#FD62A6] rounded-[45px] px-5 py-3 w-full">
                    <div className="flex items-center gap-3 p-2">
                        <img src={sonala} className="w-[71px] h-[55px]" alt="Solana" />
                        <input type="text" placeholder='0x0000000000000' className="bg-[#FD62A6] text-[31px] outline-none text-white/90 w-full" />
                    </div>
                    <div className="h-[1.5px] bg-black/5 border-drop w-full"></div>
                    <div className="flex items-center justify-between  p-3">
                        <span className="font-dang text-xl md:text-[31px] text-white/65 text-center -tracking-[1px]">Balance</span>
                        <span className="font-dang text-2xl md:text-[31px] text-white text-center -tracking-[1px]">0,0 ETH</span>
                    </div>
                </div>
            </div>
            <Button onClick={saveWallet} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[94px] mt-10 mb-10'}>CLAIM NEW NFTs</Button>
        </div>
    );
};

export default ClaimNewNft;