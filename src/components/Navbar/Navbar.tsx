import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="" />
        </nav>
    );
};

export default Navbar;
