import { Table, Avatar } from "antd";
import CLLFC from "../../assets/Logo1-removebg-preview.png";
import ShieldNotFound from "../../assets/ShieldNotFound.png";
import data2022 from "../../data/2022.json";
import data2023 from "../../data/2023.json";
import data2024 from "../../data/2024.json";
import "../../CSS/Tabla.css"

const logos = {
  CLLFC,
  EquipoX: ShieldNotFound,
  EquipoY: ShieldNotFound,
  EquipoZ: ShieldNotFound,
  EquipoW: ShieldNotFound,
  EquipoV: ShieldNotFound,
  EquipoU: ShieldNotFound,
  EquipoT: ShieldNotFound,
  EquipoS: ShieldNotFound,
  EquipoA: ShieldNotFound,
  EquipoB: ShieldNotFound,
  EquipoC: ShieldNotFound,
  EquipoD: ShieldNotFound,
  EquipoE: ShieldNotFound,
  EquipoF: ShieldNotFound,
  EquipoG: ShieldNotFound,
  EquipoH: ShieldNotFound,
  EquipoAA: ShieldNotFound,
  EquipoBB: ShieldNotFound,
  EquipoCC: ShieldNotFound,
  EquipoDD: ShieldNotFound,
  EquipoEE: ShieldNotFound,
  EquipoFF: ShieldNotFound,
  EquipoGG: ShieldNotFound,
  EquipoHH: ShieldNotFound,
};

const columns = [
  {
    title: "Pos",
    dataIndex: "pos",
    key: "pos",
    width: 50,
    render: (text) => <strong>{text}</strong>,
  },
  {
    title: "Equipo",
    dataIndex: "equipo",
    key: "equipo",
    render: (nombre) => (
      <div className="equipo-columna">
        <Avatar
          size="small"
          src={logos[nombre] || ShieldNotFound}
          style={{ marginRight: 8 }}
        />
        {nombre}
      </div>
    ),
  },
  { title: "PJ", dataIndex: "pj", key: "pj" },
  { title: "G", dataIndex: "g", key: "g" },
  { title: "E", dataIndex: "e", key: "e" },
  { title: "P", dataIndex: "p", key: "p" },
  { title: "DG", dataIndex: "dg", key: "dg" },
  {
    title: "PTS",
    dataIndex: "pts",
    key: "pts",
    render: (pts) => <strong>{pts}</strong>,
  },
];

export const Tabla = ({ temporada }) => {
  let dataSource = [];

  switch (temporada) {
    case "2022":
      dataSource = data2022;
      break;
    case "2023":
      dataSource = data2023;
      break;
    case "2024":
      dataSource = data2024;
      break;
    default:
      dataSource = [];
  }

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      scroll={{ x: '100%' }}
      className="animacion"
    />
  );
};