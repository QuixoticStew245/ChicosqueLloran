import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  PlaySquareOutlined,
  RadarChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { GiSoccerBall } from "react-icons/gi";

export const MobileNavbar = () => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <HomeOutlined />, label: "Inicio" },
    { to: "/partidos", icon: <GiSoccerBall />, label: "Partidos" },
    { to: "/media", icon: <PlaySquareOutlined />, label: "Media" },
    { to: "/jugadores", icon: <TeamOutlined />, label: "Jugadores" },
    { to: "/stats", icon: <RadarChartOutlined />, label: "Estadísticas" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#7d0d29] border-t border-gray-300 flex justify-around items-center py-2 z-50 !overflow-x-scroll min-[900px]:hidden h-18">
        {navItems.map((item, index) => {
            const isActive = item.to === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(item.to);
            return (
                <Link
                key={index}
                to={item.to}
                className={`text-3xl flex flex-col items-center text-[#b8b5b5] ${
                    isActive ? "!text-white" : ""
                }`}
                >
                {item.icon}
                <span className="text-xs">{item.label}</span>
                </Link>
            );
        })}
    </nav>
  );
};