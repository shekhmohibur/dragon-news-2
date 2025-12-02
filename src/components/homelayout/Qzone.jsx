import Swimming from "../../assets/swimming.png";
import ClassRoom from "../../assets/class.png";
import PlayGround from "../../assets/playground.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 py-3 px-5 mt-5">
      <h2 className="font-semibold">Q-zone</h2>
      <div className="flex flex-col mt-5">
        <img src={Swimming} alt="Swimming Image" />
        <img src={ClassRoom} alt="classroom Image" />
        <img src={PlayGround} alt="playground Image" />
      </div>
    </div>
  );
};

export default Qzone;
