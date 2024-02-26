import React from 'react';
import Button from '../../share/button/Button';

const Policy = () => {
    return (
        <div className="w-full bg-[#FEEEDE]">
            <div className="flex flex-col containers py-[30px] sm:py-[50px] md:py-[70px] xl:py-[100px] gap-8 md:gap-14">
                <h2 className=" text-[7vw] 2xl:text-[6vw] 4xl:text-[5vw] text-[#FE9ECE] text-with-border leading-[97px] text-center">PRIVACY POLICY</h2>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    At Lilverse, we prioritize the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our platform. By accessing or using Lilverse, you agree to the terms outlined in this policy.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Information Collection: We may collect personal information from users, including but not limited to names, email addresses, and wallet addresses, to facilitate interactions and transactions on Lilverse.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Use of Information: Your personal data may be used for various purposes, such as providing services, improving user experience, and communicating updates or promotions related to Lilverse. We will never sell your information to third parties.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Data Security: We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Cookies: Lilverse may use cookies or similar technologies to enhance user experience and track usage patterns. Users have the option to adjust cookie settings in their browser preferences.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Third-party Disclosure: We do not share users' personal information with third parties, except where necessary to provide services or comply with legal requirements.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Policy Updates: Lilverse reserves the right to update this Privacy Policy as needed. Users will be notified of any changes, and the updated policy will be effective immediately upon posting on the Lilverse website.
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    Contact Us: If you have any questions or concerns regarding this Privacy Policy or the handling of your personal information, please contact us at [contact email].
                </p>
                <p className="font-dang tracking-[0px] text-[5vw] md:text-[3vw] xl:text-[2vw] text-[#FE9ECE] text-with-borders lines">
                    By using Lilverse, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy.
                </p>
                <div className="w-full flex justify-center mt-10">
                    <Button className={'w-[340px] h-[74px] md:h-[90px] xl:h-[83px] 2xl:h-[103px]'}>Got it</Button>
                </div>
            </div>
        </div>
    );
};

export default Policy;