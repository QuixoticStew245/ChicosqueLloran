import { useRef, useEffect } from "react";
import { Avatar, Tooltip } from "antd";
import { FaFutbol, FaBullseye, FaSquare } from "react-icons/fa";
import { BotonAtras } from "../../Components/BotonAtras";
import { useNavigate } from "react-router-dom";
import "../../CSS/Jugador.css";

import ZidaneImg from "../../assets/JugadoresFondo/ZidaneFondo.png";
import LogoImg from "../../assets/Logo.png";

import LuisImg from "../../assets/Chibi/LuisChibi.png";
import SantyImg from "../../assets/Chibi/SantyChibi.png";
import YamilImg from "../../assets/Chibi/YamilChibi.png";
import MauImg from "../../assets/Chibi/MauChibi.png"
import { StatsGenerales } from "../../Players/components/StatsGenerales";
import { StatsRadar } from "../../Players/components/StatsRadar";

const jugadorData = [
    { subject: "Ritmo", A: 72 },
    { subject: "Defensa", A: 80 },
    { subject: "Físico", A: 55 },
    { subject: "Regate", A: 46 },
    { subject: "Pase", A: 67 },
    { subject: "Tiro", A: 62 },
];

const stats = [
    { nombre: "Goles", valor: 8, icon: <FaFutbol style={{ fontSize: "24px" }} /> },
    { nombre: "Asistencias", valor: 4, icon: <FaBullseye style={{ fontSize: "24px" }} /> },
    { nombre: "Tarjetas Amarillas", valor: 6, icon: <FaSquare style={{ color: "yellow", fontSize: "24px" }} /> },
    { nombre: "Tarjetas Rojas", valor: 2, icon: <FaSquare style={{ color: "red", fontSize: "24px" }} /> },
];

const jugadores = [
    
    { nombre: "Yamil", img: YamilImg, link: "/yamil" },
    { nombre: "Mau", img: MauImg, link: "/mau" },
    { nombre: "Luis", img: LuisImg, link: "/luisgc" },
    { nombre: "Santy", img: SantyImg, link: "/santy" },
];

export const Zidane = () => {
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
                        src={ZidaneImg}
                        alt="Jugador Derek"
                        className="relative object-contain z-20 w-[50%] h-auto max-md:w-[70%] max-sm:w-[55%] transition-transform duration-100 ease-out"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <section className="flex flex-col text-[#F5F5DC] gap-1 !mb-5 items-center xl:items-start text-center">
                        <span className="text-lg font-light tracking-[8px] cursor-default max-sm:tracking-[6px]">
                        Mediocampista
                        </span>
                        <h2 className="text-6xl xl:text-8xl font-bold cursor-default">Zidane</h2>
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
