import { Route, Routes,  } from "react-router-dom";
import { Home } from "../pages/Home";
import { Partidos } from "../pages/Partidos";
import { Videos } from "../pages/Videos";
import { Jugadores } from "../pages/Jugadores";
import { Estadisticas } from "../pages/Estadisticas";
import { SobreNosotros } from "../pages/SobreNosotros";
import { Derek } from "../pages/jugadorespages/Derek";
import { AngelPage } from "../pages/jugadorespages/Angel";
import { EstebanPage } from "../pages/jugadorespages/Esteban";
import { Kevin } from "../pages/jugadorespages/Kevin";
import { Josdi } from "../pages/jugadorespages/Josdi";
import { Oscar } from "../pages/jugadorespages/Oscar";
import { Yamil } from "../pages/jugadorespages/Yamil";
import { Zidane } from "../pages/jugadorespages/Zidane";
import { Luis } from "../pages/jugadorespages/Luis";
import { Mau } from "../pages/jugadorespages/Mau";
import { Santy } from "../pages/jugadorespages/Santy";
import { ScrollTopPages } from "../Components/ScrollTopPages";

export const AppRouter = ()=>{
    return(
        <>
            <ScrollTopPages/>
            <Routes>
                <Route path="/ChicosqueLloran" element={<Home/>} />
                <Route path="/partidos" element={<Partidos />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="jugadores" element={<Jugadores />} />
                <Route path="/angel" element={<AngelPage />} />
                <Route path="/esteban" element={<EstebanPage />} />
                <Route path="/kevin" element={<Kevin />} />
                <Route path="/josdi" element={<Josdi />} />
                <Route path="/oscar" element={<Oscar />} />
                <Route path="/derek" element={<Derek />} />
                <Route path="/yamil" element={<Yamil />} />
                <Route path="/zidane" element={<Zidane />} />
                <Route path="/luisgc" element={<Luis />} />
                <Route path="/mau" element={<Mau />} />
                <Route path="/santyrch" element={<Santy />} />
                <Route path="/stats" element={<Estadisticas />} />
                <Route path="/sobrenosotros" element={<SobreNosotros />} />
            </Routes>
        </>
    
    );
};