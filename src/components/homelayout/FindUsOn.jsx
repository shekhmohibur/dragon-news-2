import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div>
      <h2 className="font-semibold mt-5">Find Us On</h2>
      <div className="join join-vertical w-full mt-5">
        <button className="btn join-item flex justify-start bg-base-100 py-8"> <FaFacebook className="text-blue-500"/> Facebook</button>
        <button className="btn join-item flex justify-start bg-base-100 py-8"> <FaTwitter className="text-blue-500"/> Twitter</button>
        <button className="btn join-item flex justify-start bg-base-100 py-8"> <FaInstagram className="text-pink-500"/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUsOn;
