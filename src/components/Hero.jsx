import { motion } from "framer-motion";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import CVPDF from "../assets/North.pdf";

const descripcion = 'Estudiante de desarrollador de software'
const container = (delay) => ({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}}
});

const Hero = () => {
    return (
    <div className="border-b border-neutral-900 pb-6 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                    lg:text-8xl">Agustin Yoon</motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Desarrollador de Software
                    </motion.span>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible" 
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">{descripcion}</motion.p>
                </div>
            </div>
            <motion.div 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            className="w-full lg:w-1/2 lg:p-8 justify-center justify-items-center content-center ">
                <div className="flex flex-wrap items-center justify-center gap-4 pb-7">
                    <a href="https://github.com/yunb12345">
                        <div className="transition ease-in-out rounded hover:bg-slate-200 ">
                            <AiFillGithub className="text-3xl text-white hover:text-black transition ease-in-out"/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/agustin-yoon-818ab829a/">
                        <div className="transition ease-in-out rounded hover:bg-slate-200">
                            <AiOutlineLinkedin className="text-3xl text-white hover:text-black transition ease-in-out"/>
                        </div>
                    </a>
                    <a href="">
                        <div className="transition ease-in-out rounded hover:bg-slate-200">
                            <AiOutlineWhatsApp className="text-3xl text-white hover:text-black transition ease-in-out"/>
                        </div>
                    </a>
                </div>
                <div className="flex max-w-md mx-auto px-auto items-center justify-center content-center justify-items-center">
                    <a href={CVPDF} download="CV">
                        <button className="group overflow-hidden group h-14 pl-5 flex items-center space-x-4 border-2 rounded border-fuchsia-400 hover:bg-fuchsia-400 transition-all">
                            <span className="uppercase text-fuchsia-400 group-hover:text-white">Descargar CV</span>
                            <div className="w-14">
                                <div className="h-14 flex border-l-2 border-fuchsia-400">
                                    <AiOutlineArrowDown className="h-5 w-5 m-auto text-fuchsia-400 group-hover:text-white"/>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
    );
};

export default Hero;