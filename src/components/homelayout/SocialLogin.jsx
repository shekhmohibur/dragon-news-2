import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handleGitHubLogin = () => {
        alert('GitHub Login will Added soon')
    }
    return (
        <div>
            <h2 className='font-semibold mb-5'>Login with</h2>
            <div className="flex gap-5 flex-col">
                <button onClick={handleGoogleLogin} className='btn btn-info btn-outline py'> <FaGoogle/> Login with Google</button>
                <button onClick={handleGitHubLogin} className='btn btn-primary btn-outline py'> <FaGithub/> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;