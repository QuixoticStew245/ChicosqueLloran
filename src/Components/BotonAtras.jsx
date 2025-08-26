import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const BotonAtras = ()=>{
    const navigate = useNavigate();
    return(
        <button 
            className="absolute top-4 left-4 bg-[#911731] text-white !p-3 rounded-full hover:bg-[#771329] hover:text-gray-100 cursor-pointer z-50"
            onClick={()=> navigate("/jugadores")}
        >
            <ArrowLeftOutlined className=" text-2xl" />
        </button>
    );
};