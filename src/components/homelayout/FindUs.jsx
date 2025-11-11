import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold my-5'>Find Us on</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item py-5 justify-start text-accent font-normal"><CiFacebook size={20} className='text-blue-400'/> Facebook</button>
                <button className="btn join-item py-5 justify-start text-accent font-normal"><FaTwitter className='text-blue-400'/>Twitter</button>
                <button className="btn join-item py-5 justify-start text-accent font-normal"><FaInstagram className='text-pink-400'/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;