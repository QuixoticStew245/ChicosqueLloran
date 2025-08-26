import { Typography } from "antd";
import esteban from "../assets/Jugadores/Esteban.png";
import Derek from "../assets/Jugadores/Derek.png";
import Kevin from "../assets/Jugadores/Kevin.png";
import Yamil from "../assets/Jugadores/Yamil.png";
import Josdi from "../assets/Jugadores/Josdi.png";
import Oscar from "../assets/Jugadores/Jarocho.png";
import Angel from "../assets/Jugadores/Angel.png";
import Luis from "../assets/Jugadores/Luis.png";
import Santy from "../assets/Jugadores/Santy.png";
import Zidane from "../assets/Jugadores/Zidane.png";
import Mau from "../assets/Jugadores/Mau.png";
import "../CSS/Scroll.css"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const porteros = [
  { nombre: "Angel(Golem)", posicion: "PO", numero: "1", media: "88", img: Angel, estrellas:"★★★★", link: "/angel" },
  { nombre: "Esteban", posicion: "PO", numero: "13", media: "86", img: esteban, estrellas:"★★★★", link: "/esteban" },
];

const defensas = [
  { nombre: "Kevin", posicion: "LI", numero: "5", media: "84", img: Kevin, estrellas:"★★★", link: "/kevin" },
  { nombre: "Yael", posicion: "DFC", numero: "4", media: "86", img: "", estrellas:"★★★★", link: "/yael" },
  { nombre: "Josdi", posicion: "DFC", numero: "3", media: "66", img: Josdi, estrellas:"★★", link: "/josdi" },
  { nombre: "Oscar(Jarocho)", posicion: "LD", numero: "2", media: "87", img: Oscar, estrellas:"★★★★", link: "/oscar" },
];

const medios = [
  { nombre: "Derek Ortiz", posicion: "MC", numero: "8", media: "88", img: Derek, estrellas:"★★★★", link: "/derek" },
  { nombre: "Yamil Ubaldo", posicion: "MC", numero: "14", media: "89", img: Yamil, estrellas:"★★★★", link: "/yamil" },
  { nombre: "Zidane", posicion: "MCO", numero: "15", media: "76", img: Zidane, estrellas:"★★★", link: "/zidane" },
];

const delanteros = [
  { nombre: "Mau", posicion: "EI", numero: "10", media: "89", img: Mau, estrellas:"★★★★", link: "/mau" },
  { nombre: "Luis GC", posicion: "ED", numero: "7", media: "94", img: Luis, estrellas:"★★★★★", link: "/luisgc" },
  { nombre: "SantyRCH", posicion: "DC", numero: "9", media: "85", img: Santy, estrellas:"★★★★", link: "/santyrch" },
];

export const Plantilla = () => {
    const navigate = useNavigate();
    const scrollRef = useRef({});

    const renderCard = (jugador) => {
        const tieneFoto = jugador.img;
        return (
        <div
            key={jugador.nombre}
            className="relative w-72 h-92 rounded-3xl shadow-2xl overflow-hidden text-white cursor-pointer
                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex-shrink-0 animacion"
            onClick={() => jugador.link && navigate(jugador.link)}
            style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex justify-between items-start !p-4 relative z-10">
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{jugador.media}</span>
                    <span className="text-lg">{jugador.posicion}</span>
                </div>
                <span className="text-3xl font-bold">{jugador.numero}</span>
            </div>

            {tieneFoto && (
                <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 w-full h-76">
                    <img src={jugador.img} alt={jugador.nombre} className="w-full h-full object-contain" />
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full z-10">
                <p className="text-lg font-semibold">{jugador.nombre}</p>
                <p className="text-yellow-400 text-2xl font-bold tracking-[6px]">{jugador.estrellas}</p>
            </div>
        </div>
        );
    };

    const renderCarousel = (key, jugadores) => (
        <div
            ref={(el) => (scrollRef.current[key] = el)}
            className="flex gap-6 overflow-x-auto scroll-smooth !px-4 !py-4 scrollbar-custom"
        >
            {jugadores.map(renderCard)}
        </div>
    );

    return (
        <div className="flex flex-col gap-8 !p-6">
            <div>
                <Typography.Title level={3} className="!text-white !mb-4">Porteros</Typography.Title>
                {renderCarousel("porteros", porteros)}
            </div>

            <div>
                <Typography.Title level={3} className="!text-white !mb-4">Defensas</Typography.Title>
                {renderCarousel("defensas", defensas)}
            </div>

            <div>
                <Typography.Title level={3} className="!text-white !mb-4">Medios</Typography.Title>
                {renderCarousel("medios", medios)}
            </div>

            <div>
                <Typography.Title level={3} className="!text-white !mb-4">Delanteros</Typography.Title>
                {renderCarousel("delanteros", delanteros)}
            </div>
        </div>
    );
};
