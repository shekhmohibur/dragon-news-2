import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-5'>Login with</h2>
            <div className="flex gap-5 flex-col">
                <button className='btn btn-info btn-outline py'> <FaGoogle/> Login with Google</button>
                <button className='btn btn-primary btn-outline py'> <FaGithub/> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;