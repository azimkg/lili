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
        <div className="flex flex-col items-center gap-9">
            <img src={lili} className="w-[214px] h-[273px] mb-4" alt="Lili" />
            <div className="flex gap-1 sm:gap-6">
                <Button className={'w-[80px] sm:w-[116px] h-[140px] sm:h-[160px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl sm:text-[87px]">{timeLeft.days}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-8 sm:-bottom-12 left-4 sm:left-8 capitalize">Days</span>
                    </div>
                </Button>
                <Button className={'w-[80px] sm:w-[116px] h-[140px] sm:h-[160px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl sm:text-[87px]">{timeLeft.hours}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-8 sm:-bottom-12 left-3 sm:left-7 capitalize">Hours</span>
                    </div>
                </Button>
                <Button className={'w-[80px] sm:w-[116px] h-[140px] sm:h-[160px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl sm:text-[87px]">{timeLeft.minutes}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-8 sm:-bottom-12 left-1 sm:left-4 capitalize">Minutes</span>
                    </div>
                </Button>
                <Button className={'w-[80px] sm:w-[116px] h-[140px] sm:h-[160px]'}>
                    <div className="flex flex-col relative">
                        <span className="text-4xl sm:text-[87px]">{timeLeft.seconds}</span>
                        <span className="font-dang text-lg sm:text-xl normal absolute -bottom-8 sm:-bottom-12 left-1 sm:left-4 capitalize">Seconds</span>
                    </div>
                </Button>
            </div>
            <p className="text-[39px] text-white font-dang">March 3, 4 PM UTC</p>
            <Button onClick={connectNewSolana} className={'w-[350px] h-[60px] sm:w-[536px] sm:h-[94px] mb-10'}>CONTINUE</Button>
        </div>
    );
};

export default CreateNewSolana;