import { Flex, Menu } from "antd";
import { GiSoccerBall } from "react-icons/gi";
import { TeamOutlined, PlaySquareOutlined, HomeOutlined, ExclamationCircleOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import  imagenLogo  from "../assets/Logo.png"
import { useLocation } from "react-router-dom";


export const Sidebar = ()=>{
    const location = useLocation();
    const routeToKey = {
        '/': '1',
        '/partidos': '2',
        '/media':'3',
        '/jugadores':'4',
        '/stats':'5',
        '/sobrenosotros':'6',
    };

    return(
        <>
            <Flex align="center" justify="center">
                <div className="logo">
                    <img src={imagenLogo} alt="logo" className="w-30 h-auto p-4"/>
                </div>
            </Flex>

            <Menu mode="inline" selectedKeys={[routeToKey[location.pathname] || '1']} className="menu-bar" items={[
                {
                    key :'1',
                    icon : <HomeOutlined />,
                    label: <Link to="/">Inicio</Link>,
                },
                {
                    key :'2',
                    icon : <GiSoccerBall />,
                    label: <Link to="/partidos">Partidos</Link>,
                },
                {
                    key :'3',
                    icon : <PlaySquareOutlined />,
                    label: <Link to="/media">Multimedia</Link>,
                },
                {
                    key :'4',
                    icon : <TeamOutlined />,
                    label: <Link to="/jugadores">Jugadores</Link>,
                },
                {
                    key :'5',
                    icon : <RadarChartOutlined />,
                    label: <Link to="/stats">Estadisticas</Link>,
                },
                {
                    key :'6',
                    icon : <ExclamationCircleOutlined />,
                    label: <Link to="/sobrenosotros">Sobre Nosotros</Link>,
                },
            ]} />
        </>
    
    );
};