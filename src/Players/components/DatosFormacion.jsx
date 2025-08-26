import { Typography, notification } from "antd";
import logo from "../../assets/Logo.png";
import esteban from "../../assets/Jugadores/esteban.png";
import Silvia from "../../assets/Chibi/silviachibi.png";
import { useNavigate } from "react-router-dom";

const suplentes = [
    { nombre: "Esteban(Lechugita)", posicion: "PO", numero: "13", media: "86", img: esteban, estrellas:"★★★★", link: "/esteban" },
    { nombre: "Hugo Olalde", posicion: "DC", numero: "9", media: "66" },
    { nombre: "Paco", posicion: "EI", numero: "11", media: "82" },
    { nombre: "Uri", posicion: "ED", numero: "10", media: "88" },
    { nombre: "Gabo", posicion: "MC", numero: "12", media: "62" },
    { nombre: "NT", posicion: "PO", numero: "24", media: "72" },
];
    

const Director = [
    { nombre: "Silvia",}
];

export const DatosFormacion = () => {
    const navigate = useNavigate();

    const [api, contextHolder] = notification.useNotification();

    const openNotification = (pauseOnHover = true) => {
        api.open({
            message: 'Jugador No encontrado',
            description:
                'Lo sentimos, el perfil de este jugador no está disponible.',
            showProgress: true,
            pauseOnHover,
            type: "error",
            duration: 3,
            style: { borderRadius: "8px"},
        });
    };

    const renderCard = (jugador) => {
        const tieneFoto = jugador.img;

        return (
            <div
                key={jugador.nombre}
                className="relative w-40 h-50 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer
                    transform transition-transform duration-300 max-sm:w-34 hover:scale-105 animacion"
                onClick={() => {
                    if (jugador.link) {
                        navigate(jugador.link);
                    } else {
                        openNotification(true);
                    }
                }}
                style={{
                    background: tieneFoto
                        ? "linear-gradient(to bottom, rgba(99,10,32,0.9), rgba(0,0,0,0.95))"
                        : `linear-gradient(to bottom, rgba(99,10,32,0.9), rgba(0,0,0,0.95)), url(${logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Parte superior: Media, posición y numero */}
                <div className="flex justify-between items-start !p-2 relative z-10">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">{jugador.media}</span>
                        <span className="text-sm">{jugador.posicion}</span>
                    </div>
                    <span className="text-lg font-bold">{jugador.numero}</span>
                </div>

                {/* Imagen solo si tiene */}
                {tieneFoto && (
                    <div className="absolute bottom-2 left-7/12 transform -translate-x-1/2 w-full h-47">
                        <img 
                        src={jugador.img} 
                        alt={jugador.nombre} 
                        className="w-full h-full object-contain"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                )}

                {/* Nombre y estrellas */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center w-full z-10">
                    <p className="text-sm font-semibold">{jugador.nombre}</p>
                    <p className="text-yellow-400 font-bold text-xl">{jugador.estrellas}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-6">
            {contextHolder}
            <div className="flex flex-col items-center justify-center max-sm:items-center">
                <Typography.Title level={2} className="!text-white !mb-4">
                    Suplentes
                </Typography.Title>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 ">
                    {suplentes.map(renderCard)}
                </div>
            </div>

            {/* Director Técnico */}
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center text-xl font-semibold text-white">
                    <Typography.Title level={3} className="!text-white !mb-3">
                        Director Técnico
                    </Typography.Title>
                    <div className="flex flex-col items-center gap-2">
                        <img src={Silvia} alt="DT" className="w-30 drop-shadow-xl drop-shadow-red-900"/>
                        <span>
                            {Director[0].nombre}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
