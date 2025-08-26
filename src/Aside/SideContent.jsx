import { Typography } from "antd";
import { VideoDestacado } from "./VideoDestacado";
import { JugadoresDestacados } from "./JugadoresDestacados";
import { Encuesta } from "./Encuesta";

export const SideContent = ()=>{
    return(
        <div className="w-1/4 max-xl:w-full max-xl:!p-2">
            <div className="flex flex-col gap-4">
                <div className="bg-white !p-6 rounded-2xl shadow-md animacion">
                    <Typography.Title level={4} className="!text-[#800020] !mb-2">
                        ¿Quién hizo la mejor jugada del partido?
                    </Typography.Title>
                    <Encuesta />
                </div>
                <div className="bg-white !p-6 rounded-2xl shadow-md animacion">
                    <Typography.Title level={4} className="!text-[#800020] !mb-2">
                        Video Destacado
                    </Typography.Title>
                    <VideoDestacado />
                </div>
                <div className="bg-white !p-6 rounded-2xl shadow-md animacion">
                    <Typography.Title level={4} className="!text-[#800020] !mb-3">
                        Top 5 Jugadores
                    </Typography.Title>
                    <JugadoresDestacados/>
                </div>
            </div>
        </div>
    
    );
};