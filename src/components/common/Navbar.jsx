import { NavLink } from "react-router-dom";
import logo from "/logo.png"
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="container absolute py-5 top-0 left-0 right-0 flex justify-between items-center">
            <div>
                <img className="h-[61px]" src={logo} alt="" />
            </div>
            <button className="text-white text-2xl md:hidden" onClick={() => setToggle(!toggle)}>
            {
                toggle ? <IoMdClose /> : <HiOutlineMenuAlt2  />
            }
            </button>
            <ul className={`flex items-center duration-200 z-50 flex-col py-5 lg:p-0 text-white bg-opacity-80 top-24 bg-black lg:bg-transparent w-full lg:w-auto lg:flex-row gap-3 absolute lg:static ${toggle ? "left-0" : "-left-full"}`}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/appointment">Appointment</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;