import {FaWhatsapp} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub} from "react-icons/fa";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-center py-6">
        <div className="m-8 flex items-center justify-center gap-4">
            <h1>Inicio</h1>
            <h1>Proyectos</h1>
            <h1>Contacto</h1>
        </div>
    </nav>
};
export default Navbar;