import { format } from "date-fns";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img className="w-[350] mt-4" src={logo} alt="dragon news" />
            <p className="text-accent text-xl">Journalism Without Fear or Favour</p>
            <p className="font-semibold text-accent">{ format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Header;