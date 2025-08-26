import { Typography } from "antd";
import { FaHandPaper, FaStar } from "react-icons/fa";
import { GoleadoresCopa } from "./components-aside/GoleadoresCopa";
import { AsistenciasCopa } from "./components-aside/AsistenciasCopa";

export const DatosCopa = ()=>{
    return(
        <div className="flex flex-col gap-2 !mt-5">
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                <span className="flex items-center gap-1">
                    <FaStar className="text-amber-400 text-sm"/>
                    <h4 className="font-semibold">MVP</h4>
                </span>
                <p className="text-xl font-bold !pl-1">Luis GC</p>
                <p className=" font-extralight !pl-1">29G/15A</p>
            </div>
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                <Typography.Title level={3} className="!text-[#630a20]">
                    Goleadores
                </Typography.Title>
                <GoleadoresCopa/>
            </div>
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                <Typography.Title level={3} className="!text-[#630a20]">
                    Asistencias
                </Typography.Title>
                <AsistenciasCopa/>
            </div>
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                    <span className="flex items-center gap-1">
                        <FaHandPaper className="text-green-400 text-sm"/>
                        <h4 className="font-semibold">Porteros Destacados</h4>
                    </span>
                    <p className="text-xl font-bold !pl-1">Angel(Golem)</p>
                    <p className=" font-extralight !pl-1">10 goles recibidos</p>
                    <p className="text-xl font-bold !pl-1">Esteban(Lechugita)</p>
                    <p className=" font-extralight !pl-1">12 goles recibidos</p>
            </div>
        </div>
    
    );
};