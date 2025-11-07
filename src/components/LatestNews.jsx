import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='bg-secondary text-base-100 px-3 py-2'>latest</p>
            <Marquee pauseOnHover={true} className='flex gap-5' speed={70}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;