
import { Tabs } from "antd";
import { FaTrophy } from "react-icons/fa";
import { SiPremierleague } from "react-icons/si";
import { ResultadosDestacados } from "./partidosDestacados/ResultadosDestacados";
import CLLFC from "../assets/Logo1-removebg-preview.png";
import EquipoX from "../assets/ShieldNotFound.png";
import { MdHandshake } from "react-icons/md";

const partidosLiga = [
  {
    competicion: "Liga",
    finalizado: true,
    fecha: "15/08/2022",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo X",
      logo: EquipoX,
    },
    marcadorLocal: 7,
    marcadorVisitante: 2,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis", "Yamil", "SantyRCH"],
    goleadoresVisitante: ["Carlos", "Pedro"],
  },
  {
    competicion: "Liga",
    finalizado: true,
    fecha: "28/11/2022",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo Y",
      logo: EquipoX,
    },
    marcadorLocal: 5,
    marcadorVisitante: 0,
    goleadoresLocal: ["Luis", "Oscar(Jarocho)", "Mau", "Yamil", "Luis"],
    goleadoresVisitante: [],
  },
  {
    competicion: "Liga",
    finalizado: true,
    fecha: "11/09/2023",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo B",
      logo: EquipoX,
    },
    marcadorLocal: 7,
    marcadorVisitante: 1,
    goleadoresLocal: ["Luis", "Luis", "Luis", "Derek", "Derek", "SantyRCH", "SantyRCH"],
    goleadoresVisitante: ["Juan"],
  },
  {
    competicion: "Liga",
    finalizado: true,
    fecha: "14/08/2023",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo A",
      logo: EquipoX,
    },
    marcadorLocal: 9,
    marcadorVisitante: 1,
    goleadoresLocal: ["Luis", "SantyRCH", "Oscar(Jarocho)", "Derek", "Luis", "Derek", "Kevin", "Luis","SantyRCH"],
    goleadoresVisitante: ["Roberto"],
  },
];

const partidosCopa = [
  {
    competicion: "Copa Rabaul",
    finalizado: true,
    fecha: "05/09/2022",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Tiburones FC",
      logo: EquipoX,
    },
    marcadorLocal: 6,
    marcadorVisitante: 1,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis", "SantyRCH"],
    goleadoresVisitante: ["Miguel"],
  },
  {
    competicion: "Copa Rabaul",
    finalizado: true,
    fecha: "19/01/2023",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Leones Negros",
      logo: EquipoX,
    },
    marcadorLocal: 7,
    marcadorVisitante: 2,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Yamil", "Derek", "SantyRCH"],
    goleadoresVisitante: ["Pablo", "Andrés"],
  },
  {
    competicion: "Copa Rabaul",
    finalizado: true,
    fecha: "03/06/2023",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Huracanes",
      logo: EquipoX,
    },
    marcadorLocal: 5,
    marcadorVisitante: 0,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis"],
    goleadoresVisitante: [],
  },
  {
    competicion: "Copa Rabaul",
    finalizado: true,
    fecha: "15/07/2024",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Guerreros FC",
      logo: EquipoX,
    },
    marcadorLocal: 8,
    marcadorVisitante: 3,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis", "Derek", "SantyRCH", "Yamil"],
    goleadoresVisitante: ["Raúl", "David", "Esteban"],
  },
];

const partidosIntercetis = [
  {
    competicion: "Amistoso",
    finalizado: true,
    fecha: "30/08/2022",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo A",
      logo: EquipoX,
    },
    marcadorLocal: 9,
    marcadorVisitante: 2,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis", "Yamil", "SantyRCH", "Derek", "Luis"],
    goleadoresVisitante: ["Iván", "Oscar"],
  },
  {
    competicion: "Amistoso",
    finalizado: true,
    fecha: "12/02/2023",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo B",
      logo: EquipoX,
    },
    marcadorLocal: 7,
    marcadorVisitante: 1,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Yamil", "Derek", "SantyRCH"],
    goleadoresVisitante: ["Fernando"],
  },
  {
    competicion: "Amistoso",
    finalizado: true,
    fecha: "25/09/2023",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo C",
      logo: EquipoX,
    },
    marcadorLocal: 6,
    marcadorVisitante: 0,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis", "SantyRCH"],
    goleadoresVisitante: [],
  },
  {
    competicion: "Amistoso",
    finalizado: true,
    fecha: "01/07/2024",
    equipoLocal: {
      nombre: "CLLFC",
      logo: CLLFC,
    },
    equipoVisitante: {
      nombre: "Equipo D",
      logo: EquipoX,
    },
    marcadorLocal: 8,
    marcadorVisitante: 3,
    goleadoresLocal: ["Luis", "Yamil", "SantyRCH", "Derek", "Luis", "Derek", "SantyRCH", "Yamil"],
    goleadoresVisitante: ["Jorge", "Emilio", "Martín"],
  },
];

const items = [
  {
    key: "1",
    label: (
      <span className="flex items-center gap-2 group hover:bg-[#f3f3f3] px-2 py-1 transition-colors">
        <SiPremierleague className="text-2xl text-[#7c0d29] group-hover:text-[#a81c3a] max-sm:!text-base" />
        <span className="text-[#7c0d29] group-hover:text-[#a81c3a] max-sm:!text-xs">Liga</span>
      </span>
    ),
    children: <ResultadosDestacados partidos={partidosLiga} />,
  },
  {
    key: "2",
    label: (
      <span className="flex items-center gap-2 group hover:bg-[#f3f3f3] px-2 py-1 transition-colors">
        <FaTrophy className="text-2xl text-[#7c0d29] group-hover:text-[#a81c3a] max-sm:!text-base" />
        <span className="text-[#7c0d29] group-hover:text-[#a81c3a] max-sm:!text-xs">Copa Rabaul</span>
      </span>
    ),
    children: <ResultadosDestacados partidos={partidosCopa} />,
  },
  {
    key: "3",
    label: (
      <span className="flex items-center gap-2 group hover:bg-[#f3f3f3] px-2 py-1 transition-colors">
        <MdHandshake className="text-2xl text-[#7c0d29] group-hover:text-[#a81c3a] max-sm:!text-base" />
        <span className="text-[#7c0d29] group-hover:text-[#a81c3a] max-sm:!text-xs">Amistosos</span>
      </span>
    ),
    children: <ResultadosDestacados partidos={partidosIntercetis} />,
  },
];



export const PartidosDestacados = ()=>{
    return(
        <div className="max-md:!p-4 max-sm:!p-0 !m-0">
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
};