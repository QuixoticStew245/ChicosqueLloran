import { useState } from "react";
import partidosLiga from "../../data/partidosLiga.json";
import { PartidoLiga } from "./PartidoLiga";

export const ResultadosLiga = ({ partidos }) => {
    const [mostrarTodos, setMostrarTodos] = useState(false);
    const partidosTemporada = partidosLiga[partidos] || [];

    const toggleMostrarTodos = () => {
        setMostrarTodos((prev) => !prev);
    };

    const primerosPartidos = partidosTemporada.slice(0, 2);
    const partidosRestantes = partidosTemporada.slice(2);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {primerosPartidos.map((partido, idx) => (
                <PartidoLiga key={idx} partido={partido} />
                ))}
            </div>
            <div
                className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
                mostrarTodos ? "max-h-[2000px]" : "max-h-0"
                }`}
            >
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 !mt-4">
                    {partidosRestantes.map((partido, idx) => (
                        <PartidoLiga key={idx + 2} partido={partido} />
                    ))}
                </div>
            </div>
            {partidosRestantes.length > 0 && (
                <div className="text-center mt-4">
                    <button
                        onClick={toggleMostrarTodos}
                        className="bg-[#630a20] text-white !px-6 !py-2 !mt-2 rounded-xl hover:!opacity-80 transition-all cursor-pointer animacion"
                    >
                        {mostrarTodos ? "Ver menos" : "Ver más"}
                    </button>
                </div>
            )}
        </>
    );
};