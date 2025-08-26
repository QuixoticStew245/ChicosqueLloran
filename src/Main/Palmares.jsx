import { Progress, Typography } from "antd";
import { FaAward, FaGlobe, FaStar } from "react-icons/fa";
import { SiPremierleague } from "react-icons/si";
import PalmaresImage from "../assets/Copas.webp";
import "../CSS/Palmares.css";

const Trofeos = [
    {nombre: "Ligas", cantidad: 3, icono: <SiPremierleague/>, color: "#800020"},
    {nombre: "Copas Rabaul", cantidad: 4, icono: <FaAward/>, color: "#800020"},
    {nombre: "Intercetis", cantidad: 0, icono: <FaGlobe/>, color: "#800020"},
    {nombre: "Mejor Club", cantidad: null, icono: <FaStar/>, color: "#800020"}
]

export const Palmares = ()=>{

    const max = Math.max(...Trofeos.map(t => t.cantidad || 0));
    
    return(
        <div className="flex items-center gap-8 bg-white rounded-2xl shadow-md !p-4 max-xl:flex-col max-md:!p-3 !m-4 animacion">
            <div className="flex-1">
                <img src={PalmaresImage} alt="Palmares" className="rounded-3xl object-cover"/>
            </div>
            <div className="flex-1 w-full">
                <Typography.Title level={3} className="!text-[#800020]  max-lg:text-center">
                    Un palmarés de leyenda
                </Typography.Title>
                <div>
                    {Trofeos.map((trofeo, index) => (
                        <div key={index} className="!mb-6">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <span style={{fontSize:"20px", color:trofeo.color}}>{trofeo.icono}</span>
                                    <Typography.Text strong style={{color:trofeo.color}}>{trofeo.nombre}</Typography.Text>
                                </div>
                                {trofeo.cantidad !== null && (
                                    <Typography.Text strong className="!text-[#800020] !text-xl">{trofeo.cantidad}</Typography.Text>
                                )}
                            </div>
                            {trofeo.cantidad !== null && (
                                <Progress 
                                    percent={Math.round((trofeo.cantidad / max) * 100)}
                                    showInfo={false}
                                    strokeColor={trofeo.color}
                                    size={["default", 10]}
                                    className="!w-full barra-animada"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
    );
};