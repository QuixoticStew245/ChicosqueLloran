import { GiSoccerBall } from "react-icons/gi";

export const ResultadosDestacados = ({ partidos }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 animacion">
            {partidos.map((partido, idx) => {
              const {
                competicion,
                finalizado,
                equipoLocal,
                equipoVisitante,
                marcadorLocal,
                marcadorVisitante,
                fecha,
                goleadoresLocal = [],
                goleadoresVisitante = [],
              } = partido;

              if (!equipoLocal || !equipoVisitante) return null;

              return (
                <div key={idx} className="bg-white rounded-lg shadow-md !p-4 max-sm:!p-2 animacion">
                  <div className="flex items-center justify-between !mb-4">
                    <span>{competicion}</span>
                    <span className="text-sm text-gray-500">
                      {finalizado ? "Finalizado" : "En juego"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-1">
                      <img src={equipoLocal.logo} alt={equipoLocal.nombre} className="w-10 h-10 object-contain" />
                      <span className="text-center text-xs">{equipoLocal.nombre}</span>
                    </div>

                    <div className="flex items-center justify-center gap-8">
                      <h2 className="text-2xl font-bold">{marcadorLocal}</h2>
                      <span>-</span>
                      <h2 className="text-2xl font-bold">{marcadorVisitante}</h2>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <img src={equipoVisitante.logo} alt={equipoVisitante.nombre} className="w-10 h-10 object-contain" />
                      <span className="text-center text-xs">{equipoVisitante.nombre}</span>
                    </div>
                  </div>

                  <div className="text-center text-xs mt-2">{fecha}</div>

                  <div className="grid grid-cols-3 items-center mt-2 gap-1 text-xs">
                      <div className="flex flex-col items-end">
                          {Object.entries(
                            goleadoresLocal.reduce((acc, nombre) => {
                              acc[nombre] = (acc[nombre] || 0) + 1;
                              return acc;
                            }, {})
                          ).map(([nombre, cantidad], idx) => (
                            <span className="font-light" key={idx}>{nombre}{cantidad > 1 ? ` x${cantidad}` : ""}</span>
                          ))}
                      </div>
                      <span className="flex justify-center"><GiSoccerBall/></span>
                      <div className="flex flex-col items-start">
                          {Object.entries(
                            goleadoresVisitante.reduce((acc, nombre) => {
                              acc[nombre] = (acc[nombre] || 0) + 1;
                              return acc;
                            }, {})
                          ).map(([nombre, cantidad], idx) => (
                            <span className="font-light" key={idx}>{nombre}{cantidad > 1 ? ` x${cantidad}` : ""}</span>
                          ))}
                      </div>
                  </div>
                </div>
              );
            })}
        </div>
    );
};