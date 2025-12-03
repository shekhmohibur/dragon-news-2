import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    resetPassword(email)
    .then(() => {
    alert("Password Reset email Sent!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleReset} className="w-full max-w-md p-10 bg-white">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold mb-6">
          Reset your Password
        </h2>
        {/* Email */}
        <label className="block text-sm font-medium mb-2">Email address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="input input-bordered w-full mb-4 outline-0"
          name="email"
          required
        />
        <button
          type="submit"
          className="btn w-full bg-neutral text-white hover:bg-neutral-focus"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
