import { Avatar } from "antd";
import Swal from 'sweetalert2';
import "../CSS/Aside.css"
import { UserOutlined } from "@ant-design/icons";
import { HiOutlineExternalLink } from "react-icons/hi";

const RedJugador =[
    {img: <UserOutlined/> ,nombre:"Luis GC", posicion:"ED", link:"https://www.instagram.com/luis_13.05/"},
    {img: <UserOutlined/> ,nombre:"Yamil Ubaldo", posicion:"MCD", link:"https://www.instagram.com/yam_uba/"},
    {img: <UserOutlined/>  ,nombre:"Mau", posicion:"EI", link:""},
    {img: <UserOutlined/>  ,nombre:"Angel Sachez (Golem)", posicion:"PO", link:"https://www.facebook.com/rolso.tron?locale=es_LA"},
    {img: <UserOutlined/> ,nombre:"Derek Ortiz", posicion:"MC", link:"https://www.instagram.com/derek.ortiz.28/"},
    
] 

export const JugadoresDestacados = ()=>{
    return(
        <>
            {RedJugador.map((item,Index) =>(
                <div key={Index} className="flex items-center justify-between !mb-3 animacion">
                    <header className="flex items-center gap-2">
                        <Avatar size="large" icon={item.img} />
                        <div>
                            <h2 className="font-bold text-base">{item.nombre}</h2>
                            <span className="font-extralight text-xs">{item.posicion}</span>
                        </div>
                    </header>
                    <aside>
                        {item.link ? (
                            <a href={item.link} target="_blank" className="btn-seguir" rel="noopener noreferrer">
                                Seguir <HiOutlineExternalLink />
                            </a>
                        ) : (
                            <button
                                className="btn-seguir cursor-pointer"
                                onClick={() =>
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Sin redes sociales',
                                    text: `${item.nombre} aún no tiene redes sociales disponibles.`,
                                    confirmButtonText: 'Cerrar',
                                    color: '#800020',
                                    background: '#fff',
                                    customClass: {
                                        confirmButton: 'confirm-btn'
                                    }
                                })
                                }
                            >
                                Seguir <HiOutlineExternalLink />
                            </button>
                        )}
                    </aside>
                </div>
            ))}
        </>
            
    
    );
};