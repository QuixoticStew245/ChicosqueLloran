import { FaHandPaper, FaStar } from "react-icons/fa";
import { GeneralesPartidos } from "./EstadisticasGenerales/GeneralesPartidos";
import { GolesGenerales } from "./EstadisticasGenerales/GolesGEnerales";
import { GiRank1, GiRunningShoe } from "react-icons/gi";

export const EstadisticasGenerales = ()=>{
    return(
        <div className="max-md:!p-4 max-sm:!p-0 !m-0">
            <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 !mb-4 max-md:grid-cols-1 max-sm:grid-cols-1 animacion">
                <div className="bg-white rounded-lg shadow-md !p-4">
                    <span className="flex items-center gap-1">
                        <FaStar className="text-amber-400 text-sm"/>
                        <h4 className="font-semibold">MVP</h4>
                    </span>
                    <p className="text-xl font-bold !pl-1">Luis GC</p>
                    <p className=" font-extralight !pl-1">90G/48A</p>
                </div>
                <div className="bg-white rounded-lg shadow-md !p-4">
                    <span className="flex items-center gap-1">
                        <FaHandPaper className="text-green-400 text-sm"/>
                        <h4 className="font-semibold">Portero Destacado</h4>
                    </span>
                    <p className="text-xl font-bold !pl-1">Angel(Golem)</p>
                    <p className=" font-extralight !pl-1">54 goles recibidos</p>
                </div>
                <div className="bg-white rounded-lg shadow-md !p-4">
                    <span className="flex items-center gap-1">
                        <GiRunningShoe className="text-blue-400 text-sm"/>
                        <h4 className="font-semibold">Mas Asistencias</h4>
                    </span>
                    <p className="text-xl font-bold !pl-1">Oscar(Jarocho)</p>
                    <p className=" font-extralight !pl-1">60A</p>
                </div>
                <div className="bg-white rounded-lg shadow-md !p-4">
                    <span className="flex items-center gap-1">
                        <GiRank1 className="text-[#6d0d25] text-sm"/>
                        <h4 className="font-semibold">Capitan</h4>
                    </span>
                    <p className="text-xl font-bold !pl-1">NT</p>
                    <p className=" font-extralight !pl-1">40 partidos como capitan</p>
                </div>
            </div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-1 gap-4 animacion">
                <div className="bg-white rounded-lg shadow-md !p-4">
                    <h2 className="text-xl text-[#6d0d25] font-semibold mb-2">Goleadores</h2>
                    <GolesGenerales />
                </div>
                <div className="bg-white rounded-lg shadow-md !p-4">
                    <h2 className="text-xl text-[#6d0d25] font-semibold !mb-3">Resultados de Equipo</h2>
                    <GeneralesPartidos />
                </div>
            </div>
        </div>
        
    );
};