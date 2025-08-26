import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const goleadores =[
    { pos:"1", nombre:"Luis GC", posicion: "ED", goles: "14" },
    { pos:"2", nombre:"Yamil Ubaldo", posicion: "MCD", goles: "6" },
    { pos:"3", nombre:"Mau", posicion: "EI", goles: "4" },
    { pos:"4", nombre:"Derek", posicion: "MC", goles: "3" },
    { pos:"5", nombre:"Kevin", posicion: "LI", goles: "2" },
]

export const GoleadoresCopa = ()=>{
    return(
        <>
            {goleadores.map((item,Index) =>(
                <div key={Index} className="flex items-center justify-between !mb-3">
                    <header className="flex items-center gap-2">
                        <h4 className="font-bold text-2xl">{item.pos}</h4>
                        <Avatar size="large" icon={<UserOutlined/>} />
                        <div>
                            <h2 className="font-bold text-base">{item.nombre}</h2>
                            <span className="font-extralight text-xs">{item.posicion}</span>
                        </div>
                    </header>
                    <aside>
                        <h2 className="font-bold text-xl">{item.goles}</h2>
                    </aside>
                </div>
            ))}
        </>
    
    );
};