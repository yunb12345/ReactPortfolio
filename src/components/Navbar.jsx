import {FaWhatsapp} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub} from "react-icons/fa";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 intems-center">
            <h1>Yoon</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4">
            <FaWhatsapp/>
            <CiMail/>
            <FaGithub/>
        </div>
    </nav>
};
export default Navbar;