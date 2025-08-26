import { Copa } from "./Copa";
import { Intercetis } from "./Intercetis";
import { Liga } from "./Liga";

export const PartidosMainContent = ({ torneo }) => {
    const TorneosComponentes = {
        liga: <Liga />,
        copa: <Copa />,
        intercetis: <Intercetis />
    };

    return (
        <div className="flex-[70%]">
            <div>
                {TorneosComponentes[torneo]}
            </div>
        </div>
    );
};