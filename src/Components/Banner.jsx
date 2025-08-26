import { useNavigate } from "react-router-dom";
import "../CSS/Banner.css";

export const Banner = ()=>{
    const navigate = useNavigate();

    return(
        <div className="banner">
            <h1>Conoce al equipo mas malo en la cancha</h1>
            <p>
                Somos un equipo forjado en la pasión por el fútbol amateur. 
                Aquí podrás seguir nuestros partidos, conocer a nuestros jugadores y 
                revivir los mejores momentos de cada jornada.
            </p>
            <button 
                className="btn-signup"
                onClick={()=> navigate("/jugadores")}
            >
                Conocer a los jugadores
            </button>
        </div>
    
    );
};