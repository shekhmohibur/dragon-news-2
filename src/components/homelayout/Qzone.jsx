import React from 'react';
import swimming from "../../assets/swimming.png"
import classimage from "../../assets/class.png"
import playground from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div  className='bg-base-200 p-3 mt-5'>
            <h2 className='font-semibold '>QZone</h2>
            <div>
                <img src={swimming} alt="swimming" />
                <img src={classimage} alt="class" />
                <img src={playground} alt="playground" />
            </div>
        </div>
    );
};

export default Qzone;