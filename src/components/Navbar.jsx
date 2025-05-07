import {FaWhatsapp} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-center py-6">
        <div className="m-8 flex items-center justify-center gap-4">
            <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-300 transition-colors duration-300"
            >
            Inicio
            </Link>
            <Link
            to="proyectos"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-300 transition-colors duration-300"
            >
            Proyectos
            </Link>
            <Link
            to="contacto"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-300 transition-colors duration-300"
            >
            Contacto
            </Link>
        </div>
    </nav>
};
export default Navbar;