import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const asistencias = [
    { pos: "1", nombre:"Kevin", posicion:"LI", asistencias: "5" },
    { pos: "2", nombre:"Luis GC", posicion:"ED", asistencias: "3" },
    { pos: "3", nombre:"Oscar(Jarocho)", posicion:"LD", asistencias: "1" },
]

export const AsistenciasIntercetis = ()=>{
    return(
        <>
            {asistencias.map((item,Index) =>(
                <div key={Index} className="flex items-center justify-between !mb-3">
                    <header className="flex items-center justify-center gap-2">
                        <h4 className="font-bold text-2xl">{item.pos}</h4>
                        <Avatar size="large" icon={<UserOutlined/>} />
                        <div>
                            <h2 className="font-bold text-base">{item.nombre}</h2>
                            <span className="font-extralight text-xs">{item.posicion}</span>
                        </div>
                    </header>
                    <aside>
                        <h2 className="font-bold text-xl">{item.asistencias}</h2>
                    </aside>
                </div>
            ))}   
        </>
    );
};