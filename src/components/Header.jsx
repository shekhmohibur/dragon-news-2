import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img className="w-[370px]" src={logo} alt="Logo here" />
            <p>Journalism without fear or favor</p>
        </div>
    );
};

export default Header;