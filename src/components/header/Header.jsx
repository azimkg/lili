import React, { useState } from 'react';
import logo from '../../images/logo.png'
import x from "../../images/x.png"
import insta from "../../images/insta.png"
import youtube from "../../images/youtube.png"
import tiktok from "../../images/tiktok.png"
import { Link } from 'react-router-dom';

const Header = ({className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`bg_header h-[80px] lg:h-[96px] 2xl:h-[106px] w-full overflow-hidden ${className}`}>
            <div className="relative containers hidden md:flex items-center h-full">
                <div className="relative z-50 flex items-center justify-between w-full h-full" >
                    <Link to={'/'} className="flex gap-5 items-center">
                        <img src={logo} className="md:w-[60px] md:h-[72px] lg:w-[70px]  lg:h-[82px]"  alt="logotype" />
                        <h2 className=" text-[6.5vw] 2xl:text-[6vw] 4xl:text-[5vw] 5xl:text-[3vw] text-[#FE9ECE] text-with-border leading-[97px]">LILVERSE</h2>
                    </Link>
                    <div className="relative w-[18vw] h-full">
                        <h4 className="font-dang tracking-[0px] text-[2vw] 5xl:text-[1.5vw] text-center text-[#FE9ECE] text-with-borders lines absolute left-0 top-4 lg:top-3.5 2xl:top-2 3xl:top-1 ">
                            Animations, comics, 
                        </h4>
                        <h4 className="font-dang tracking-[0px] text-[2vw] 5xl:text-[1.5vw] text-center text-[#FE9ECE] text-with-borders lines absolute left-4 bottom-4 lg:bottom-3.5 2xl:bottom-2 3xl:bottom-1 ">memes and more!</h4>
                    </div>
                </div>
            </div>
            <div className="relative containers flex md:hidden justify-between items-center h-full ">
                <img src={logo} className={isOpen ? "hidden" : "w-[50px] h-[58px]"} alt="logotype" />
                <div className={isOpen ? "hidden" : "flex flex-col gap-0 relative w-[190px]"}>
                    <h2 className=" text-[57px] lg:text-[81.7px] text-[#FE9ECE] text-with-border">LILVERSE</h2>
                    <p className="absolute -bottom-1 text-[11px] tracking-tight text-[#FE9ECE] lines capitalize">
                        Animations, comics, memes and more!
                    </p>
                </div>
                <div onClick={handleOpen} className={isOpen? "hidden":"w-[58px] rounded-full h-[58px] bg-[#FE9ECE] border-[2px] border-white p-[14px] flex flex-col gap-2 items-center justify-center"}>
                    <p className="h-[2px] w-full bg-white"></p>
                    <p className="h-[2px] w-full bg-white"></p>
                    <p className="h-[2px] w-full bg-white"></p>
                </div>
                {isOpen ?
                    <div className="absolute top-2.5 right-0 z-50 w-full rounded-full h-[60px] bg-[#FE9ECE] border-[2px] border-white p-[14px] flex gap-2 items-center justify-center">
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