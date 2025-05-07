import carameloPic from "../assets/caramelo.png"
import {motion} from "framer-motion";
import {PROJECTS} from "../constants/constant";

const Proyectos = () => {
  return (
    <div className="border-b border-b-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Proyectos</motion.h1>
        <div>
            {PROJECTS.map((project,index)=>(
                <motion.div 
                key={index}
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-200}}
                transition={{duration:1}}
                className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full max-w-xl">
                        <h6>{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Proyectos;