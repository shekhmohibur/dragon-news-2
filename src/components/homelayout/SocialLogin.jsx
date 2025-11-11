import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='space-y-3'>
                <button class="btn btn-outline btn-info w-full"><FaGoogle /> Login With Google</button>
                <button class="btn btn-outline btn-primary w-full"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;