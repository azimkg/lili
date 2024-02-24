import React from 'react';
import noNft from '../../images/noNFT.png'
import { useDispatch } from 'react-redux';
import Button from '../../share/button/Button';

const Finish = () => {
    const dispatch = useDispatch();
    const successConnect = () => {
    }
    return (
        <div className="flex flex-col items-center">
            <img src={noNft} className="w-[386px] h-[284px] mb-2" alt="Lili" />
            <div className="flex flex-col gap-3">
                <p className="font-dang text-xl md:text-[31px] text-white text-center sm:-tracking-[2px]">You’re all set! Check your wallet <br /> for Lilverse NFTs!</p>
                <p className="font-dang text-xl md:text-[31px] text-white text-center sm:-tracking-[2px]">Show X your new digital identity!</p>
                <Button onClick={successConnect} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>SHARE ON X</Button>
            </div>
        </div>
    );;
};

export default Finish;