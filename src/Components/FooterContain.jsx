import { SiGmail } from "react-icons/si";
import "../CSS/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const FooterContain = ()=>{
    return(
        <footer className="footer flex flex-col justify-center">
            <div className="container-footer">
                <div className="contain-footer">
                    <div className="title-footer">
                        <h1>Chicos que Lloran</h1>
                    </div>
                    <div>
                        <p>Chicos que Lloran es un equipo con alma, pasión y entrega en cada partido. 
                            Más que fútbol, somos una familia que deja el corazón en la cancha y el nombre en alto.
                        </p>
                    </div>
                </div>
                <div className="contain-footer">
                    <div className="title-footer">
                        <h2>Ubicación</h2>
                    </div>
                    <div>
                        <p>Otro, Rabaul 441, Jardín Azpeitia, Azcapotzalco, 02530 Ciudad de México, CDMX</p>
                    </div>
                </div>
                <div className="contain-footer">
                    <div className="title-footer">
                        <h2>Enlaces</h2>
                    </div>
                    <ul className="links-footer">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/jugadores">Jugadores</Link></li>
                        <li><Link to="/partidos">Partidos</Link></li>
                        <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
                    </ul>
                </div>
                <div className="contain-footer">
                    <div className="title-footer">
                        <h2>Contactos</h2>
                    </div>
                    <ul className="contact-links">
                        <li><a href="mailto:ortizderek708@gmail.com" target="_blank"><SiGmail/></a></li>
                        <li><a href="https://github.com/QuixoticStew245" target="_blank"><FaGithub/></a></li>
                        <li><a href="https://www.linkedin.com/in/derek-ortiz-8b7862375/" target="_blank"><FaLinkedin/></a></li>
                        <li><a href="https://www.instagram.com/derek.ortiz.28/" target="_blank"><FaSquareInstagram/></a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center !mt-4 border-t !pt-4 !mx-4">
                © {new Date().getFullYear()} Chicos que lloran. Todos los derechos reservados.
            </div>
        </footer>
    );
    
};