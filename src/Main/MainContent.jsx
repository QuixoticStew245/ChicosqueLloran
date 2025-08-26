import { Typography } from "antd";
import { PartidosDestacados } from "./PartidosDestacados";
import { EstadisticasGenerales } from "./EstadisticasGenerales";
import { Palmares } from "./Palmares";
import "../CSS/MainContent.css";

    export const MainContent = ()=>{
    return(
        <div className="flex-1">
            <div className="main-grid">
                <div>
                    <Typography.Title level={3}  className="!text-red-800  responsive-title">
                        Partidos Destacados
                    </Typography.Title>
                    <PartidosDestacados />
                </div>
                <div>
                    <Typography.Title level={3} className="!text-red-800 responsive-title">
                        Estadísticas Generales
                    </Typography.Title>
                    <EstadisticasGenerales />
                </div>
                <div>
                    <Palmares />
                </div>
            </div>
        </div>
    
    );
};