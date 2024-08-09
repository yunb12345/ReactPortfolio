import carameloPic from "../assets/caramelo.png"
import {motion} from "framer-motion";


const Proyectos = () => {
  return (
    <div className="border-b border-b-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Proyectos</motion.h1>
        <div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-200}}
            transition={{duration:1}}
            className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full max-w-xl">
                    <h6>React Portfolio</h6>
                    <p className="mb-4 text-neutral-400">
                        Mi portfolio hecho con react utilizando tailwindcsss y
                        framemotion
                    </p>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">HTML</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">REACT</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JSX</span>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:200}}
            transition={{duration:1,delay:0.2}}
            className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full max-w-xl">
                    <h6>Pagina Caramelo</h6>
                    <p className="mb-4 text-neutral-400">
                        Pagina hecha con elementos basicos de HTML y CSS
                    </p>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">HTML</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-200}}
            transition={{duration:1,delay:0.4}}
            className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full max-w-xl">
                    <h6>Travelblue</h6>
                    <p className="mb-4 text-neutral-400">
                        Pagina web con CRUD usando PHP y MySQL
                    </p>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">HTML</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JS</span>
                    <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">PHP</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Proyectos;