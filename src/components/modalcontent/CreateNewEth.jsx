import React, { useEffect, useState } from 'react';
import lili from '../../images/lili.png'
import Button from '../../share/button/Button';
import { setModalStage } from '../../store/modalSlice';
import { useDispatch } from 'react-redux';

const CreateNewSolana = () => {
    const dispatch = useDispatch();
    const calculateTimeLeft = () => {
    const expiryTimestamp = 1709420400000;
    const difference = expiryTimestamp - new Date();

    if (difference <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
    });

    const connectNewSolana = () => {
        dispatch(setModalStage('CONNECT_NEW_ETH'))
    }
    return (
        <div className="flex flex-col items-center gap-5">
            <img src={lili} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex gap-1 sm:gap-6">
                <Button className={'w-[90px] sm:w-[116px] h-[130px] sm:h-[140px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl font-dang sm:text-[67px]">{timeLeft.days}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-7 sm:-bottom-10 left-0 sm:left-4 capitalize">Days</span>
                    </div>
                </Button>
                <Button className={'w-[90px] sm:w-[116px] h-[130px] sm:h-[140px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl font-dang sm:text-[67px]">{timeLeft.hours}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-7 sm:-bottom-10 -left-1 sm:left-3 capitalize">Hours</span>
                    </div>
                </Button>
                <Button className={'w-[90px] sm:w-[116px] h-[130px] sm:h-[140px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl font-dang sm:text-[67px]">{timeLeft.minutes}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-7 sm:-bottom-10 -left-4 sm:left-0 capitalize">Minutes</span>
                    </div>
                </Button>
                <Button className={'w-[90px] sm:w-[116px] h-[130px] sm:h-[140px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl font-dang sm:text-[67px]">{timeLeft.seconds}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-7 sm:-bottom-10 -left-3 sm:left-0 capitalize">Seconds</span>
                    </div>
                </Button>
            </div>
            <p className="text-3xl sm:text-[39px] text-white font-dang">March 3, 4 PM UTC</p>
            <Button onClick={connectNewSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[74px]'}>CONTINUE</Button>
        </div>
    );
};

export default CreateNewSolana;