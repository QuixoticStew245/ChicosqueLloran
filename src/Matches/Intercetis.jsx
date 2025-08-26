import { Tabs, Typography } from "antd";
import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaseGruposIntercetis } from "./components/FaseGruposIntercetis";
import { IntercetisEliminatorias } from "./components/IntercetisEliminatorias";


export const Intercetis = ()=>{

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
                    Intercetis 2022
                </span>
            ),
            children:(
                <div className="flex flex-col gap-2">
                    <FaseGruposIntercetis year={2022} />
                    <Typography.Title level={3} className="!text-[#800020] animacion">
                        Eliminatorias
                    </Typography.Title>
                    <IntercetisEliminatorias year={2022} />
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
                    Intercetis 2024
                </span>
            ),
            children:(
                <div className="flex flex-col gap-2">
                    <FaseGruposIntercetis year={2024} />
                    <Typography.Title level={3} className="!text-[#800020] animacion">
                        Eliminatorias
                    </Typography.Title>
                    <IntercetisEliminatorias year={2024} />
                </div>
            )
        }
    ]

    return(
        <div className="!mt-5">
            <div>
                <h2 className="flex items-center gap-1 font-bold text-3xl text-[#800020]"><FaTrophy /> Intercetis</h2>
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