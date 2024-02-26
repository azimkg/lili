import React from 'react';
import logo from "../../images/logo.png"
import x from "../../images/x.png"
import insta from "../../images/insta.png"
import youtube from "../../images/youtube.png"
import tiktok from "../../images/tiktok.png"
import { Link } from 'react-router-dom';


const Footer = ({ className }) => {
    return (
        <div className={`bg-[#FE9ECE] h-[80px] lg:h-[96px] 2xl:h-[106px] w-full ${className}`}>
            <div className="containers flex items-center h-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <img src={logo} className="w-[42px] h-[48px] md:w-[60px] md:h-[72px] lg:w-[70px] lg:h-[82px]" alt="Footer logo" />
                        <p className="text-xs sm:text-base lg:text-lg font-mons text-white">
                            © 2024. Lilverse. <br />
                            All rights reserved.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2 lg:gap-8 mr-32">
                        <Link to="#"><img src={x} className="w-[37px] h-[37px] lg:w-[47px] lg:h-[47px]" alt="X" /></Link>
                        <Link to="#"><img src={insta} className="w-[37px] h-[37px] lg:w-[47px] lg:h-[47px]" alt="Instagram" /></Link>
                        <Link to="#"><img src={tiktok} className="w-[37px] h-[37px] lg:w-[47px] lg:h-[47px]" alt="TikTok" /></Link>
                        <Link to="#"><img src={youtube} className="w-[37px] h-[37px] lg:w-[47px] lg:h-[47px]" alt="YouTube" /></Link>
                    </div>
                    <Link to='/policy' className="text-xs sm:text-base lg:text-lg font-mons text-white">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;