import { useRef, useEffect } from "react";
import { Avatar, Tooltip } from "antd";
import { FaFutbol, FaBullseye, FaSquare } from "react-icons/fa";
import { BotonAtras } from "../../Components/BotonAtras";
import { useNavigate } from "react-router-dom";
import "../../CSS/Jugador.css";

import SantyImg from "../../assets/JugadoresFondo/SantyFondo.png";
import LogoImg from "../../assets/Logo.png";

import KevinImg from "../../assets/Chibi/KevinChibi.png";
import LuisImg from "../../assets/Chibi/LuisChibi.png";
import EstebanImg from "../../assets/Chibi/EstebanChibi.png";
import AngelImg from "../../assets/Chibi/AngelChibi.png"
import { StatsGenerales } from "../../Players/components/StatsGenerales";
import { StatsRadar } from "../../Players/components/StatsRadar";

const jugadorData = [
    { subject: "Ritmo", A: 84 },
    { subject: "Defensa", A: 53 },
    { subject: "Físico", A: 92 },
    { subject: "Regate", A: 46 },
    { subject: "Pase", A: 75 },
    { subject: "Tiro", A: 74 },
];

const stats = [
    { nombre: "Goles", valor: 30, icon: <FaFutbol style={{ fontSize: "24px" }} /> },
    { nombre: "Asistencias", valor: 12, icon: <FaBullseye style={{ fontSize: "24px" }} /> },
    { nombre: "Tarjetas Amarillas", valor: 2, icon: <FaSquare style={{ color: "yellow", fontSize: "24px" }} /> },
    { nombre: "Tarjetas Rojas", valor: 0, icon: <FaSquare style={{ color: "red", fontSize: "24px" }} /> },
];

const jugadores = [
    
    
    
    { nombre: "Luis", img: LuisImg, link: "/luisgc" },
    { nombre: "Angel", img: AngelImg, link: "/angel" },
    { nombre: "Esteban", img: EstebanImg, link: "/esteban" },
    { nombre: "Kevin", img: KevinImg, link: "/kevin" },
];

export const Santy = () => {
    const navigate = useNavigate();
    const derekRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
            const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);

            if (derekRef.current) {
                derekRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="jugador-container">
            <BotonAtras />
            <div className="texto-vertical">ELITEPLAYER</div>

            <main className="flex items-center justify-center w-full min-h-screen max-xl:flex-col gap-5 max-xl:!mt-20">
                <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                    <img
                        className="absolute w-full object-contain opacity-60 z-10 max-md:top-[-10%] max-lg:opacity-90"
                        src={LogoImg}
                        alt="Logo decorativo"
                    />
                    <img
                        ref={derekRef}
                        src={SantyImg}
                        alt="Jugador Derek"
                        className="relative object-contain z-20 w-[50%] h-auto max-md:w-[70%] max-sm:w-[55%] transition-transform duration-100 ease-out"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <section className="flex flex-col text-[#F5F5DC] gap-1 !mb-5 items-center xl:items-start text-center">
                        <span className="text-lg font-light tracking-[8px] cursor-default max-sm:tracking-[6px]">
                            Delantero Centro
                        </span>
                        <h2 className="text-6xl xl:text-8xl font-bold cursor-default">SantyRCH</h2>
                    </section>

                    <StatsRadar data={jugadorData} />
                    <StatsGenerales stats={stats} />
                </div>
            </main>

            <aside className="jugador-aside">
                {jugadores.map((j, i) => (
                <Tooltip key={i} title={j.nombre} placement="left">
                    <Avatar
                    src={j.img}
                    size={64}
                    className="jugador-avatar"
                    onClick={() => navigate(j.link)}
                    alt={`Avatar de ${j.nombre}`}
                    />
                </Tooltip>
                ))}
            </aside>
        </div>
    );
};
