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
                        <p className="my-2 maxw-xl py-6 px-10">Soy un estudiante de 22 años que esta aprendiendo a programar en una tecnicatura de desarrollo en software. En mis primeros años de cursada aprendi lo basico de HTML, CSS y PHP para armar mi primera pagina eCommerce ademas de ver algoritmos basicos utilizando Python. 
                            Actualmente estoy en la mitad de mi 2do año aprendiendo algoritmos avanzados con Java y creando proyectos por mi cuenta. Gracias a esto, estoy utilizando github en mi pasatiempo
                            y espero en el futuro seguir creando mas proyectos o ser parte de un equipo en el que pueda afrontar nuevas tematicas.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Acerca;