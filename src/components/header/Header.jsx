import React, { useState } from 'react';
import logo from '../../images/logo.png'
import x from "../../images/x.png"
import insta from "../../images/insta.png"
import youtube from "../../images/youtube.png"
import tiktok from "../../images/tiktok.png"
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="bg_header h-[100px] md:h-[136px] w-full relative overflow-hidden">
            <div className="relative containers hidden md:flex items-center h-full">
                <div className="relative z-50 flex items-center justify-between w-full " >
                    <div className="flex gap-5 lg:gap-10">
                        <img src={logo} className=""  alt="logotype" />
                        <h2 className=" text-[60px] lg:text-[81.7px] text-[#FE9ECE] text-with-border leading-[97px]">LILVERSE</h2>
                    </div>
                    <p className="font-dang font-medium -tracking-[2px] text-3xl lg:text-[39px] text-center text-[#FE9ECE] text-with-borders lines">
                        Animations, comics, <br />
                        memes and more!
                    </p>
                </div>
            </div>
            <div className="relative containers flex md:hidden justify-between items-center h-full ">
                <img src={logo} className={isOpen ? "hidden" : "w-[50px] h-[58px]"} alt="logotype" />
                <div className={isOpen ? "hidden" : "flex flex-col gap-0 relative w-[190px]"}>
                    <h2 className=" text-[57px] lg:text-[81.7px] text-[#FE9ECE] text-with-border">LILVERSE</h2>
                    <p className="absolute bottom-0 text-[11px] text-[#FE9ECE] text-with-borderes capitalize">
                        Animations, comics, memes and more!
                    </p>
                </div>
                <div onClick={handleOpen} className={isOpen? "hidden":"w-[58px] rounded-full h-[58px] bg-[#FE9ECE] border-[2px] border-white p-[14px] flex flex-col gap-2 items-center justify-center"}>
                    <p className="h-[2px] w-full bg-white"></p>
                    <p className="h-[2px] w-full bg-white"></p>
                    <p className="h-[2px] w-full bg-white"></p>
                </div>
                {isOpen ?
                    <div className="absolute top-5 right-0 z-50 w-full rounded-full h-[60px] bg-[#FE9ECE] border-[2px] border-white p-[14px] flex gap-2 items-center justify-center">
                        <div className="flex gap-6 items-center justify-center relative w-full">
                            <Link to="#"><img src={x} className="w-[37px] h-[37px]" alt="X" /></Link>
                            <Link to="#"><img src={insta} className="w-[37px] h-[37px]" alt="Instagram" /></Link>
                            <Link to="#"><img src={tiktok} className="w-[37px] h-[37px]" alt="TikTok" /></Link>
                            <Link to="#"><img src={youtube} className="w-[37px] h-[37px]" alt="YouTube" /></Link>
                            <svg width="18" height="18" className="absolute right-2" onClick={handleOpen} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16.5563L16.5563 0.999987" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                <path d="M1 1L16.5563 16.5563" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    :
                    null}
            </div>
        </div>
    );
};

export default Header;