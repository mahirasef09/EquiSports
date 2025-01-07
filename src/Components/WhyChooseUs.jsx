import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import { PiChalkboardTeacherThin } from 'react-icons/pi';
import { RiTeamLine } from 'react-icons/ri';
import PageTitle from './PageTitle';
import { MdSportsBaseball } from 'react-icons/md';

const WhyChooseUs = () => {
    return (
        <div>
            <PageTitle title="EquiSports | Why Us"></PageTitle>
            <div className='my-5 bg-accent dark:bg-black rounded-tl-full rounded-br-full h-16 mb-5'>
                <h2 className="text-black dark:text-white text-center text-4xl font-extrabold">Why Choose Us</h2>
            </div>
            <div className="footer footer-center bg-gray-500 text-primary-content p-10 rounded-3xl">
            <div>
                <PiChalkboardTeacherThin className="text-5xl"></PiChalkboardTeacherThin>
                <h3 className="text-3xl font-extrabold">Dedicated Support</h3>
            </div>
            <div>
                <RiTeamLine className="text-5xl"></RiTeamLine>
                <h3 className="text-3xl font-extrabold">Responsive Team</h3>
            </div>
            <div>
                <MdSportsBaseball className="text-5xl"></MdSportsBaseball>
                <h3 className="text-3xl font-extrabold">Exclusive Sport Items</h3>
            </div>
            <div>
                <GiTeacher className="text-5xl"></GiTeacher>
                <h3 className="text-3xl font-extrabold">Unique Service</h3>
            </div>
        </div>
        </div>
    );
};

export default WhyChooseUs;