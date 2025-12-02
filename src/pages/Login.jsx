import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-10 bg-white">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-6">
          Login your account
        </h2>
        {/* Email */}
        <label className="block text-sm font-medium mb-2">Email address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="input input-bordered w-full mb-4 outline-0"
        />

        {/* Password */}
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full outline-0"
        />
        <p className="text-sm text-blue-600 cursor-pointer mb-4">
          Forgot Password?
        </p>
        {/* Login Button */}
        <button className="btn w-full bg-neutral text-white hover:bg-neutral-focus">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          Don’t Have An Account ?{" "}
          <Link
            to={"/auth/register"}
            className="text-red-500 font-medium cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
