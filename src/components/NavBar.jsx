import { NavLink } from "react-router";
import userIcon from "../assets/user.png"
const NavBar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Career", path: "/career" },
  ];
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        {navItems?.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="user icon" />
        <button className="btn btn-primary rounded-none px-7">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
