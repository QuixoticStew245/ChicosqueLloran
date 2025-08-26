import { Tabs, Typography } from "antd";
import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaseGruposCopa } from "./components/FaseGruposCopa";
import { CopaRabaulEliminatorias } from "./components/CopaRabaulEliminatorias";


export const Copa = ()=>{

    const [activeKey,setActiveKey] = useState("1");
    const copa = [
        {
            key: "1",
            label:(
                <span
                className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                    activeKey === "1" ? "font-semibold" : ""
                    }`}
                >
                    Copa1
                </span>
            ),
            children:(
                <div className="flex flex-col gap-2">
                    <FaseGruposCopa copa="copa1" />
                    <Typography.Title level={3} className="!text-[#800020] animacion">
                        Eliminatorias
                    </Typography.Title>
                    <CopaRabaulEliminatorias year="2022" />
                </div>
            )
        },
        {
            key: "2",
            label: (
                <span
                    className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                    activeKey === "2" ? "font-semibold" : ""
                    }`}
                >
                    Copa2
                </span>
            ),
            children:(
                <div className="flex flex-col gap-2">
                    <FaseGruposCopa copa="copa2" />
                    <Typography.Title level={3} className="!text-[#800020] animacion">
                        Eliminatorias
                    </Typography.Title>
                    <CopaRabaulEliminatorias year="2023" />
                </div>
            )
        },
        {
            key: "3",
            label: (
                <span
                    className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                    activeKey === "3" ? "font-semibold" : ""
                    }`}
                >
                    Copa3
                </span>
            ),
            children:(
                <div className="flex flex-col gap-2">
                    <FaseGruposCopa copa="copa3"/>
                    <Typography.Title level={3} className="!text-[#800020] animacion">
                        Eliminatorias
                    </Typography.Title>
                    <CopaRabaulEliminatorias year="2024" />
                </div>
            )
        },
        {
            key: "4",
            label: (
                <span
                    className={`text-[#800020] hover:text-[#a00030] transition-colors max-sm:!text-xs ${
                    activeKey === "4" ? "font-semibold" : ""
                    }`}
                >
                    Copa4
                </span>
            ),
            children:(
                <div className="flex flex-col gap-2">
                    <FaseGruposCopa copa="copa4" />
                     <Typography.Title level={3} className="!text-[#800020] animacion">
                        Eliminatorias
                    </Typography.Title>
                    <CopaRabaulEliminatorias year="2025" />
                </div>
            )
        }
    ]

    return(
        <div className="!mt-5">
            <div>
                <h2 className="flex items-center gap-1 font-bold text-3xl text-[#800020]"><FaTrophy /> Copa Rabaul</h2>
            </div>
            <Tabs
                defaultActiveKey="1"
                items={copa}
                activeKey={activeKey}
                onChange={setActiveKey}
            />
        </div>
    
    );
};