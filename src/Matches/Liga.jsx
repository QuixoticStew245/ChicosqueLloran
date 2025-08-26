import { Tabs } from "antd";
import { useState } from "react";
import { SiPremierleague } from "react-icons/si";
import { ResultadosLiga } from "./components/ResultadosLiga";
import { Tabla } from "./components/Tabla";


export const Liga = () => {
    const [activeKey, setActiveKey] = useState("1");
    const temporada = [
    {
        key: "1",
        label: (
            <span
                className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                activeKey === "1" ? "font-semibold" : ""
                }`}
            >
                2022
            </span>
        ),
        children: (
            <div className="flex flex-col gap-2">
                <Tabla temporada="2022" />
                <ResultadosLiga partidos="2022" />
            </div>
        ),
    },
    {
        key: "2",
        label: (
            <span
                className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                activeKey === "2" ? "font-semibold" : ""
                }`}
            >
                2023
            </span>
        ),
        children: (
            <div className="flex flex-col gap-2">
                <Tabla temporada="2023" />
                <ResultadosLiga partidos="2023" />
            </div>
        ),
    },
    {
        key: "3",
        label: (
            <span
                className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                activeKey === "3" ? "font-semibold" : ""
                }`}
            >
                2024
            </span>
        ),
        children: (
            <div className="flex flex-col gap-2">
                <Tabla temporada="2024" />
                <ResultadosLiga partidos="2024" />
            </div>
        ),
    },
    ];

    return (
        <div className="!mt-5">
            <div>
                <h2 className="flex items-center gap-1 font-bold text-3xl text-[#800020]"><SiPremierleague /> Liga</h2>
            </div>
            <Tabs
                defaultActiveKey="1"
                items={temporada}
                activeKey={activeKey}
                onChange={setActiveKey}
            />
        </div>
    );
};