import { Typography } from "antd";
import { FaHandPaper, FaStar } from "react-icons/fa";
import { GoleadoresIntercetis } from "./components-aside/GoleadoresIntercetis";
import { AsistenciasIntercetis } from "./components-aside/AsistenciasIntercetis";

export const DatosIntercetis = ()=>{
    return(
        <div className="flex flex-col gap-2 !mt-5">
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                <span className="flex items-center gap-1">
                    <FaStar className="text-amber-400 text-sm"/>
                    <h4 className="font-semibold">MVP</h4>
                </span>
                <p className="text-xl font-bold !pl-1">Luis GC</p>
                <p className=" font-extralight !pl-1">5G/2A</p>
            </div>
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                <Typography.Title level={3} className="!text-[#630a20]">
                    Goleadores
                </Typography.Title>
                <GoleadoresIntercetis/>
            </div>
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                <Typography.Title level={3} className="!text-[#630a20]">
                    Asistencias
                </Typography.Title>
                <AsistenciasIntercetis/>
            </div>
            <div className="bg-white rounded-lg shadow-md !p-4 animacion">
                    <span className="flex items-center gap-1">
                        <FaHandPaper className="text-green-400 text-sm"/>
                        <h4 className="font-semibold">Porteros Destacados</h4>
                    </span>
                    <p className="text-xl font-bold !pl-1">Derek Ortiz (2022)</p>
                    <p className=" font-extralight !pl-1">3 goles recibidos</p>
                    <p className="text-xl font-bold !pl-1">Angel(Golem) (2024)</p>
                    <p className=" font-extralight !pl-1">12 goles recibidos</p>
            </div>
        </div>
    
    );
};