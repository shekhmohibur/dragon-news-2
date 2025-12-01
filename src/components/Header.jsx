import { format } from "date-fns";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img className="w-[400px]" src={logo} alt="Logo here" />
            <p className="text-accent">Journalism without fear or favor</p>
            <p className="text-accent font-semibold">
                {
                    format(new Date(), "EEEE , MMMM MM, yyyy")
                }
            </p>
        </div>
    );
};

export default Header;