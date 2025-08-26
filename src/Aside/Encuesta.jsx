import { Progress } from "antd";
import { useState } from "react";
{/*Encuesta de quien tuvo la mejor jugada */}
const jugadores = [
    { nombre: "Muertiña Zidane", votos: 5 },
    { nombre: "Chilena Yamil", votos: 3 },
    { nombre: "Chua Volando Balon(Rabaul)", votos: 2 },
    { nombre: "Angel Derriba a Yael", votos: 1 },
];


export const Encuesta = ()=>{
    const [votado, setVotado] = useState(false);
    const [votoSeleccionado, setVotoSeleccionado] = useState(null);
    const [resultados, setResultados] = useState(jugadores);

    const totalVotos = resultados.reduce((acc, jugador) => acc + jugador.votos, 0);

    const votar = (index) => {
        if (votado) return;
        const nuevosResultados = [...resultados];
        nuevosResultados[index].votos += 1;
        setResultados(nuevosResultados);
        setVotoSeleccionado(index);
        setVotado(true);
    };
    return(
        <>
            {resultados.map((jugador, index) => {
                const porcentaje = ((jugador.votos / totalVotos) * 100).toFixed(1);

                return (
                <div
                    key={index}
                    onClick={() => votar(index)}
                    className={`cursor-pointer !mb-3 !p-2 rounded-md border border-gray- ${
                    votoSeleccionado === index ? "border-[#800020] bg-[#f7e5ea]" : "border-gray-200"
                    } hover:bg-gray-100 transition`}
                >
                    <div className="flex justify-between !mb-2 font-medium text-base">
                        <span>{jugador.nombre}</span>
                        {votado && <span>{porcentaje}%</span>}
                    </div>

                    {votado && (
                    <Progress
                        percent={parseFloat(porcentaje)}
                        showInfo={false}
                        strokeColor="#800020"
                    />
                    )}
                </div>
                );
            })}
        </>
    );
};