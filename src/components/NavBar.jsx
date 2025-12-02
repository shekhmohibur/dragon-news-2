import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Career", path: "/career" },
  ];
  const handleLogOut = () => {
    logOut().then(() => {
      alert('Sign Out Successful')
    }).catch((error) => {
      alert(error)
    });
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        {navItems?.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="login-btn flex gap-5">
        <img src={`${user ? user.photoURL: userIcon}`} alt="user" className="w-12 rounded-full border"/>
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary rounded-none px-7">Log Out</button> : <Link className="btn btn-primary rounded-none px-7" to={"/auth/login"}>
          Login
        </Link>
        }
      </div>
    </div>
  );
};

export default NavBar;
