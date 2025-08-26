import { Avatar, Table, Typography } from "antd";
import Copas from "../../data/FaseGruposCopa.json";

import CLLFC from "../../assets/Logo1-removebg-preview.png";
import ShieldNotFound from "../../assets/ShieldNotFound.png";


const logos = {
  CLLFC,
  "Tiburones FC": ShieldNotFound,
  "Dragones Rojos": ShieldNotFound,
  "Leones Negros": ShieldNotFound,
  "Águilas Doradas": ShieldNotFound,
  "Tigres del Norte": ShieldNotFound,
  "Guerreros FC": ShieldNotFound,
  Huracanes: ShieldNotFound,
  "Leones de la Montaña": ShieldNotFound
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

export const FaseGruposCopa = ({ copa }) => {
    const dataSource = Copas[copa] || []; 

    return (
        <>
            <Typography.Title level={3} className="!text-[#800020]">Fase de Grupos</Typography.Title>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={{ x: "100%" }}
                className="animacion"
                rowKey="key"
            />
        </>
    );
};