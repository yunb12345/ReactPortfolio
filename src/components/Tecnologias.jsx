import { DiGithubBadge } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiReact } from "react-icons/di";


const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Tecnologias</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGithubBadge className="text-7xl text-gray-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-white-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiReact className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className="text-7xl text-blue-400"/>
            </div>
        </div>
    </div>
  )
}

export default Tecnologias;