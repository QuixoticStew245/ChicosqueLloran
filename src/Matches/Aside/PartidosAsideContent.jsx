import { DatosCopa } from "./DatosCopa";
import { DatosIntercetis } from "./DatosIntercetis";
import { DatosLiga } from "./DatosLiga";

export const PartidosAsideContent = ({ torneo }) => {
    const DatosJugadoresTorneo = {
        liga: <DatosLiga />,
        copa: <DatosCopa />,
        intercetis: <DatosIntercetis />
    };

    return (
        <div className="flex-[30%]">
            <div>
                {DatosJugadoresTorneo[torneo]}
            </div>
        </div>
    );
};