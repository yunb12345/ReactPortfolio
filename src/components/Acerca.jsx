import {motion} from "framer-motion";

const Acerca = () => {
    return (
        <div className="">
            <motion.h1 
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            transition={{duration:1.5,delay:0.8}}
            className="my-20 text-center text-4xl">Acerca de <span className="text-neutral-500">Mi</span></motion.h1>
            <motion.div 
            whileInView={{opacity:1}}
            initial={{opacity:0}}
            transition={{duration:1.5,delay:0.8}}
            className="flex flex-wrap">
                <div className="w-full lg:p-8">
                    <div className="flex items-center justify-center">
                        <p className="my-2 maxw-xl py-6 px-10">Actualmente cursando una Tecnicatura en Desarrollo de Software, con experiencia en HTML, CSS, PHP y Python. 
                            Desarrollé mi primer eCommerce y, actualmente, estoy enfocado en algoritmos avanzados con Java. 
                            Creo proyectos personales y gestiono versiones en GitHub, buscando seguir aprendiendo y contribuir en equipos de desarrollo.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Acerca;