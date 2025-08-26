import { Tabs, Typography } from "antd";
import { useState, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiSoccerField } from "react-icons/gi";
import { Plantilla } from "./Plantilla";
import { Alineaciones } from "./Alineaciones";

export const PlayersMainContent = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [activeKey, setActiveKey] = useState("1");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");

        const handleChange = (e) => setIsMobileOrTablet(e.matches);
        handleChange(mediaQuery);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const items = [
        {
        key: "1",
        label: (
            <span
                className={`flex items-center justify-center gap-2 text-xl text-white hover:text-[#e7a8bb] transition-colors max-sm:text-base ${
                    activeKey === "1" ? "font-semibold" : ""
                }`}
            >
                <GiSoccerField /> Alineaciones
            </span>
        ),
        children: <Alineaciones />,
        },
        {
        key: "2",
        label: (
            <span
                className={`flex items-center justify-center gap-2 text-xl text-white hover:text-[#e7a8bb] transition-colors max-sm:text-base ${
                    activeKey === "2" ? "font-semibold" : ""
                }`}
            >
                <FaPeopleGroup /> Plantilla
            </span>
        ),
        children: <Plantilla />,
        },
    ];

    return (
        <div>
            <Typography.Title
                level={1}
                className="!text-white text-center lg:!text-left"
            >
                Jugadores
            </Typography.Title>

            <Tabs
                items={items}
                activeKey={activeKey}
                onChange={setActiveKey}
                className="custom-tabs"
                centered={isMobileOrTablet}
            />
        </div>
    );
};
