import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)
    createUser(email, password)
    .then((result) => {
    // Signed up 
    const user = result.user;
    setUser(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
    // ..
  });
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleRegister} className="w-full max-w-sm p-6 bg-white">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-6">
          Register your account
        </h2>
        {/* Name */}
        <label className="block text-sm font-medium mb-2">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full mb-4 outline-0"
          name="name"
          required
        />

        {/* Photo URL */}
        <label className="block text-sm font-medium mb-2">Photo URL</label>
        <input
          type="text"
          placeholder="Enter your PhotoUrl"
          className="input input-bordered w-full mb-4 outline-0"
          name="photoUrl"
          required
        />

        {/* Email */}
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="input input-bordered w-full mb-4 outline-0"
          name="email"
          required
        />

        {/* Password */}
        <label className="block text-sm font-medium mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full mb-4 outline-0"
          name="password"
          required
        />

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-sm mb-6 cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span>
            Accept <span className="font-medium">Term & Conditions</span>
          </span>
        </label>

        {/* Register Button */}
        <button
          type="submit"
          className="btn w-full bg-neutral text-white hover:bg-neutral-focus"
        >
          Register
        </button>
        <p className="text-center mt-4 text-sm">
          Already Have An Account ?{" "}
          <Link
            to={"/auth/login"}
            className="text-red-500 font-medium cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
