import { DiGithubBadge } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiReact } from "react-icons/di";
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Tecnologias</motion.h1>
        <motion.div 
        whileInView={{opcity:1,x:0}}
        initial={{opacity:1,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGithubBadge className="text-7xl text-gray-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-white-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiReact className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className="text-7xl text-blue-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tecnologias;