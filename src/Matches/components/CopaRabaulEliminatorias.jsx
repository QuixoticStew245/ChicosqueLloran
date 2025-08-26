import CCLFC from "../../assets/Logo1-removebg-preview.png";
import CCLFCBlanco from "../../assets/Logo.png";
import Equipo2 from "../../assets/ShieldNotFound.png";
import Equipo2Blanco from "../../assets/NoEncontrado.png";
import copasRabaul from "../../data/EliminatoriasCopa.json";
import "../../CSS/Eliminatorias.css"

const logos = {
    CCLFC,
    CCLFCBlanco,
    Equipo2,
    Equipo2Blanco
};

export const CopaRabaulEliminatorias = ({ year }) => {
    const copa = copasRabaul.find(c => c.nombre.includes(year));

    if (!copa) return <p>No hay datos para {year}</p>;

    const renderMatch = (equipo) => (
      <div className="flex items-center justify-between render">
        <header className="flex items-center gap-2 render">
          <img src={logos[equipo.logo]} className="w-10 object-cover max-sm:w-5 group-hover:hidden" alt="" />
          <img src={logos[equipo.logoBlanco]} className="w-10 object-cover max-sm:w-5 hidden group-hover:block" alt="" />
          <h4 className="max-sm:text-xs">{equipo.nombre}</h4>
        </header>
        <aside><h2 className="font-bold text-xl max-sm:text-base">{equipo.goles}</h2></aside>
      </div>
    );

    return (
      <div className="flex w-full gap-8 animacion">

        {/* Semifinal Izquierda */}
        <section className="flex flex-col flex-1 gap-8">
          <h2 className="text-lg font-bold">Semifinal</h2>
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            {copa.semifinales[0] && (
              <>
                <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                  {renderMatch(copa.semifinales[0].equipo1)}
                </article>
                <div className="w-1 bg-gray-400 h-12"></div>
                <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                  {renderMatch(copa.semifinales[0].equipo2)}
                </article>
              </>
            )}
          </div>
        </section>


        {/* Final */}
        <section className="flex flex-col flex-1 gap-8 items-center justify-center">
          <h2 className="text-lg font-bold">Final</h2>

          <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full max-w-sm hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
            {renderMatch(copa.final.equipo1)}
            {renderMatch(copa.final.equipo2)}
          </article>

        </section>


        {/* Semifinal Derecha */}
        <section className="flex flex-col flex-1 gap-8">
          <h2 className="text-lg font-bold text-right">Semifinal</h2>
          
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            {copa.semifinales[1] && (
              <>
                <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                  {renderMatch(copa.semifinales[1].equipo1)}
                </article>
                <div className="w-1 bg-gray-400 h-12"></div>
                <article className="group flex flex-col gap-2 bg-white rounded-2xl !p-4 w-full hover:bg-[#8b1e3f] hover:text-white transition-colors duration-300">
                  {renderMatch(copa.semifinales[1].equipo2)}
                </article>
              </>
            )}
          </div>

        </section>

      </div>
    );
};