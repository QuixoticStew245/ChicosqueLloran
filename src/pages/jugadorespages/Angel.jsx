import { useRef, useEffect } from "react";
import { Avatar, Tooltip } from "antd";
import { FaFutbol, FaBullseye, FaShieldAlt, FaHandPaper } from "react-icons/fa";
import { BotonAtras } from "../../Components/BotonAtras";
import { useNavigate } from "react-router-dom";
import "../../CSS/Jugador.css";

import AngelImg from "../../assets/JugadoresFondo/AngelFondo.png";
import LogoImg from "../../assets/Logo.png";

import EstebanImg from "../../assets/Chibi/EstebanChibi.png";
import KevinImg from "../../assets/Chibi/KevinChibi.png";
import JosdiImg from "../../assets/Chibi/JosdiChibi.png";
import { StatsGenerales } from "../../Players/components/StatsGenerales";
import { StatsRadar } from "../../Players/components/StatsRadar";

const jugadorData = [
    { subject: "Bloqueo", A: 85 },
    { subject: "Estirada", A: 75 },
    { subject: "Reflejos", A: 70 },
    { subject: "Velocidad", A: 50 },
    { subject: "Saque", A: 85 },
    { subject: "Colocación", A: 75 },
];

const stats = [
    { nombre: "Goles Recibidos", valor: 28, icon: <FaFutbol style={{ fontSize: "24px" }} /> },
    { nombre: "Despejes", valor: 38, icon: <FaBullseye style={{ fontSize: "24px" }} /> },
    { nombre: "Porterías imbatidas", valor: 10, icon: <FaShieldAlt style={{ fontSize: "24px" }} /> },
    { nombre: "Penales atajados", valor: 1, icon: <FaHandPaper style={{ fontSize: "24px" }} /> },
];

const jugadores = [
    { nombre: "Esteban", img: EstebanImg, link: "/esteban" },
    { nombre: "Kevin", img: KevinImg, link: "/kevin" },
    { nombre: "Yael", img: "", link: "/yael" },
    { nombre: "Josdi", img: JosdiImg, link: "/josdi" },
];

export const AngelPage = () => {
    const navigate = useNavigate();
    const angelRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
            const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);

            if (angelRef.current) {
                angelRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="jugador-container">
            <BotonAtras />
            <div className="texto-vertical">
                ELITEPLAYER
            </div>
            <main className="flex items-center justify-center w-full min-h-screen !px-20 max-lg:flex-col max-lg:!px-2 gap-5 max-lg:!mt-20">
                <div className="w-full md:w-1/2 flex items-center justify-center relative">
                    <img
                        className="absolute w-full object-contain opacity-60 z-10 max-md:top-[-10%] max-lg:opacity-90"
                        src={LogoImg}
                        alt="Logo decorativo"
                    />
                    <img
                        ref={angelRef}
                        src={AngelImg}
                        alt="Jugador Angel"
                        className="relative object-contain z-20 w-[50%] h-auto max-md:w-[70%] max-sm:w-[55%] transition-transform duration-100 ease-out"
                    />
                </div>
                <div className="w-full md:w-1/2 text-white">
                    <section className="flex flex-col gap-1 !mb-5 items-center md:items-start text-center md:text-left">
                        <span className="text-lg font-light tracking-[8px] cursor-default max-sm:tracking-[6px]">Portero</span>
                        <h2 className="text-6xl xl:text-8xl font-bold cursor-default">Angel(Golem)</h2>
                    </section>
                    <StatsRadar data={jugadorData}/>
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
