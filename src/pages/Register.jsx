import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white">

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-6">
          Register your account
        </h2>
        {/* Name */}
        <label className="block text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full mb-4 outline-0"
        />

        {/* Photo URL */}
        <label className="block text-sm font-medium mb-2">
          Photo URL
        </label>
        <input
          type="text"
          placeholder="Enter your password"
          className="input input-bordered w-full mb-4 outline-0"
        />

        {/* Email */}
        <label className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="input input-bordered w-full mb-4 outline-0"
        />

        {/* Password */}
        <label className="block text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full mb-4 outline-0"
        />

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-sm mb-6 cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span>
            Accept <span className="font-medium">Term & Conditions</span>
          </span>
        </label>

        {/* Register Button */}
        <button className="btn w-full bg-neutral text-white hover:bg-neutral-focus">
          Register
        </button>
        <p className="text-center mt-4 text-sm">
          Already Have An Account ?{" "}
          <Link to={'/auth/login'} className="text-red-500 font-medium cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
