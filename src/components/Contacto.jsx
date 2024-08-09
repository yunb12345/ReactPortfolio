import {motion} from "framer-motion";

function Contacto() {
  return (
    <div className="border--b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="my-10 text-center text-4xl">Contactame!</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="my-4">CABA. Argentina</motion.p>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="my-4">1128234936</motion.p>
            <motion.a 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="my-4 border-b">agusyoon11@hotmail.com</motion.a>
        </div>
    </div>
  )
}

export default Contacto