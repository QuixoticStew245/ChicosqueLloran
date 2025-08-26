import { Typography } from "antd";
import campoImg from "../assets/Campofutebol.svg.png";
import { DatosFormacion } from "./components/DatosFormacion.jsx";
import { useNavigate } from "react-router-dom";
import Yamil from "../assets/Chibi/YamilChibi.png";
import Derek from "../assets/Chibi/DerekChibi.png";
import Angel from "../assets/Chibi/AngelChibi.png";
import Mau from "../assets/Chibi/MauChibi.png";
import Luis from "../assets/Chibi/LuisChibi.png";
import Zidane from "../assets/Chibi/Zidane.png";
import Kevin from "../assets/Chibi/KevinChibi.png";
import Oscar from "../assets/Chibi/JarochoChibi.png";
import Josdi from "../assets/Chibi/JosdiChibi.png";
import Santy from "../assets/Chibi/SantyChibi.png";

const jugadores = [
    { nombre: "Angel(Golem)", numero: 1, x: 50, y: 87, link: "/angel", img: Angel },
    { nombre: "Kevin", numero: 5, x: 22, y: 73, link: "/kevin", img: Kevin },
    { nombre: "Yael", numero: 4, x: 40, y: 73, link: "/yael" , img: "" },
    { nombre: "Josdi", numero: 3, x: 60, y: 73, link: "/josdi", img: Josdi },
    { nombre: "Jarocho", numero: 2, x: 78, y: 73, link: "/oscar", img: Oscar },
    { nombre: "Derek Ortiz", numero: 8, x: 35, y: 55, link: "/derek", img: Derek },
    { nombre: "Yamil Ubaldo", numero: 14, x: 65, y: 55, link: "/yamil", img: Yamil },
    { nombre: "Mau", numero: 10, x: 25, y: 35, link: "/mau", img: Mau },
    { nombre: "Zidane", numero: 15, x: 50, y: 40, link: "/zidane", img: Zidane },
    { nombre: "Luis GC", numero: 7, x: 75, y: 35, link: "/luisgc", img: Luis },
    { nombre: "SantyRCH", numero: 9, x: 50, y: 20, link: "/santyrch", img: Santy },
];

export const Alineaciones = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col xl:flex-row md:items-center md:gap-6">
            <div className="flex w-full md:max-w-[800px] items-center justify-center gap-4 flex-col">

                <Typography.Title level={2} className="!text-white">
                    Alineacion
                </Typography.Title>
                {/* Cancha */}
                <div className="relative w-full aspect-[1/1] animacion max-md:aspect-[2/3] max-2xl:aspect-[2/3]">
                    <img
                        src={campoImg}
                        alt="Cancha"
                        className="absolute inset-0 w-full h-full object-contain opacity-90"
                        style={{ imageRendering: "crisp-edges" }}
                    />

                    {/* Jugadores */}
                    {jugadores.map((j, i) => (
                        <div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{
                                top: `${j.y}%`,
                                left: `${j.x}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <div className="w-12 h-12 !mb-5 max-sm:!mb-2 flex items-center justify-center text-white drop-shadow-md drop-shadow-white font-bold cursor-pointer sm:w-20 sm:h-20 
                                            transition-transform duration-300 hover:scale-110"
                                onClick={() => navigate(j.link)}
                            >
                                <img src={j.img || null} alt="imagenJugador" className="w-full h-auto object-cover" />
                            </div>
                            <span className="!text-xs sm:!text-sm lg:!text-base font-medium text-white text-center text-shadow-md drop-shadow-md drop-shadow-black">
                                {j.nombre}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Datos */}
            </div>
            <div className="w-full !mb-10">
                <DatosFormacion />
            </div>
        </div>
        
    );
};
