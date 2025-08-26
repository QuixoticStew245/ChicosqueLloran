import CCLFC from "../../assets/Logo1-removebg-preview.png";
import CCLFCBlanco from "../../assets/Logo.png";
import Equipo2 from "../../assets/ShieldNotFound.png";
import Equipo2Blanco from "../../assets/NoEncontrado.png";
import "../../CSS/Eliminatorias.css";

const logos = {
    CCLFC,
    Equipo2,
};

const logosBlancos = {
    CCLFC: CCLFCBlanco,
    Equipo2: Equipo2Blanco,
};

export const IntercetisEliminatorias = ({ year }) => {
    const datosInternos = {
        2022: {
        cuartos: [
            { equipo1: { nombre: "CCLFC", logo: "CCLFC", goles: 1 }, equipo2: { nombre: "Tigres del Norte", logo: "Equipo2", goles: 2 } },
            { equipo1: { nombre: "Águilas Doradas", logo: "Equipo2", goles: 3 }, equipo2: { nombre: "Guerreros FC", logo: "Equipo2", goles: 4 } }
        ],
        semifinales: [
            { equipo1: { nombre: "Tigres del Norte", logo: "Equipo2" }, equipo2: { nombre: "Guerreros FC", logo: "Equipo2" } }
        ]
        },
        2024: null
    };

    const copa = datosInternos[year];

    if (!copa) {
        return (
            <p className="text-center text-gray-500 italic">
                No hay datos para {year}
            </p>
        );
    }

    const renderMatch = (equipo) => (
        <div className="flex items-center justify-between render">
            <header className="flex items-center gap-2 render">
                <img
                    src={logos[equipo.logo] || logos.Equipo2}
                    className="w-10 object-cover max-sm:w-5 group-hover:hidden"
                    alt={`${equipo.nombre} logo`}
                />
                <img
                    src={logosBlancos[equipo.logo] || logosBlancos.Equipo2}
                    className="w-10 object-cover max-sm:w-5 hidden group-hover:block"
                    alt={`${equipo.nombre} logo blanco`}
                    />
                <h4 className="max-sm:text-xs">{equipo.nombre}</h4>
            </header>
            <aside>
                <h2 className="font-bold text-xl max-sm:text-base">{equipo.goles}</h2>
            </aside>
        </div>
    );

    return (
        <div className="flex w-full gap-2 animacion">
        <div className="w-full">
            {/* Cuartos Arriba */}
            <section className="flex flex-col flex-1 gap-8">
                <h2 className="text-lg font-bold">Cuartos</h2>
                <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                    <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                     {renderMatch(copa.cuartos[0].equipo1)}
                    </article>
                    <div className="w-1 bg-gray-400 h-12"></div>
                    <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                        {renderMatch(copa.cuartos[0].equipo2)}
                    </article>
                </div>
            </section>

            {/* Cuartos Abajo */}
            <section className="flex flex-col flex-1 gap-8 !mt-3">
                <h2 className="text-lg font-bold">Cuartos</h2>
                <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                    <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                        {renderMatch(copa.cuartos[1].equipo1)}
                    </article>
                    <div className="w-1 bg-gray-400 h-12"></div>
                    <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                        {renderMatch(copa.cuartos[1].equipo2)}
                    </article>
                </div>
            </section>
        </div>

        {/* Semifinal */}
        <div className="flex w-full items-center justify-center">
            <section className="flex flex-col flex-1 gap-8">
                <h2 className="text-lg font-bold">Semifinal</h2>
                <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                    <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                        {renderMatch(copa.semifinales[0].equipo1)}
                    </article>
                    <div className="w-1 bg-gray-400 h-12"></div>
                    <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                        {renderMatch(copa.semifinales[0].equipo2)}
                    </article>
                </div>
            </section>
        </div>
        </div>
    );
};