import { GiSoccerBall } from "react-icons/gi";
import CLLFC from "../../assets/Logo1-removebg-preview.png";
import ShieldNotFound from "../../assets/ShieldNotFound.png";

const logos = {
  CLLFC,
  EquipoX: ShieldNotFound,
  EquipoY: ShieldNotFound,
  EquipoZ: ShieldNotFound,
  EquipoW: ShieldNotFound,
  EquipoV: ShieldNotFound,
  EquipoU: ShieldNotFound,
  EquipoT: ShieldNotFound,
  EquipoS: ShieldNotFound,
  EquipoA: ShieldNotFound,
  EquipoB: ShieldNotFound,
  EquipoC: ShieldNotFound,
  EquipoD: ShieldNotFound,
  EquipoE: ShieldNotFound,
  EquipoF: ShieldNotFound,
  EquipoG: ShieldNotFound,
  EquipoH: ShieldNotFound,
  EquipoAA: ShieldNotFound,
  EquipoBB: ShieldNotFound,
  EquipoCC: ShieldNotFound,
  EquipoDD: ShieldNotFound,
  EquipoEE: ShieldNotFound,
  EquipoFF: ShieldNotFound,
  EquipoGG: ShieldNotFound,
  EquipoHH: ShieldNotFound,
};


export const PartidoLiga = ({ partido })=>{
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

    return(
        <div className="bg-white shadow-xl rounded !p-6 animacion">
            <div className="flex items-center justify-between !mb-6">
                <span>{competicion}</span>
                <span className="text-sm text-gray-500">
                    {finalizado ? "Finalizado" : "En juego"}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col items-center gap-1">
                    <img
                        src={logos[equipoLocal.logo] || ShieldNotFound}
                        alt={equipoLocal.nombre}
                        className="w-15 h-15 object-contain"
                    />
                    <span className="text-center text-xs">{equipoLocal.nombre}</span>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <h2 className="text-2xl font-bold">{marcadorLocal}</h2>
                    <span>-</span>
                    <h2 className="text-2xl font-bold">{marcadorVisitante}</h2>
                </div>

                <div className="flex flex-col items-center ">
                    <img
                        src={logos[equipoVisitante.logo] || ShieldNotFound}
                        alt={equipoVisitante.nombre}
                        className="w-15 h-15 object-contain"
                    />
                    <span className="text-center text-xs">{equipoVisitante.nombre}</span>
                </div>
            </div>

            <div className="text-center !text-xs mt-2">{fecha}</div>

            <div className="grid grid-cols-3 items-center mt-2 gap-1 text-xs">
                <div className="flex flex-col items-end">
                    {Object.entries(
                        goleadoresLocal.reduce((acc, nombre) => {
                            acc[nombre] = (acc[nombre] || 0) + 1;
                            return acc;
                        }, {})
                    ).map(([nombre, cantidad], idx) => (
                        <span className="font-light" key={idx}>
                            {nombre}{cantidad > 1 ? ` x${cantidad}` : ""}
                        </span>
                    ))}
                </div>
                <span className="flex justify-center"><GiSoccerBall /></span>
                <div className="flex flex-col items-start">
                    {Object.entries(
                        goleadoresVisitante.reduce((acc, nombre) => {
                            acc[nombre] = (acc[nombre] || 0) + 1;
                            return acc;
                        }, {})
                    ).map(([nombre, cantidad], idx) => (
                        <span className="font-light" key={idx}>
                            {nombre}{cantidad > 1 ? ` x${cantidad}` : ""}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    
    );
};

