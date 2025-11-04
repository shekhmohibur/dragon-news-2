import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <img className="w-[350]" src={logo} alt="dragon news" />
            <p className="text-accent text-xl">Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;