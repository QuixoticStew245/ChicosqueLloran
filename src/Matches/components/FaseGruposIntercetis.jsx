import { Avatar, Table, Typography } from "antd";

import CLLFC from "../../assets/Logo1-removebg-preview.png";
import ShieldNotFound from "../../assets/ShieldNotFound.png";

const dataSource2022 = [
  { key: 1, pos: 1, equipo: "CLLFC", pj: 2, g: 2, e: 1, p: 0, dg: 8, pts: 6 },
  { key: 2, pos: 2, equipo: "Tiburones FC", pj: 2, g: 1, e: 0, p: 1, dg: 1, pts: 3 },
  { key: 3, pos: 3, equipo: "Dragones Rojos", pj: 2, g: 0, e: 0, p: 2, dg: -7, pts: 0 }
];

const dataSource2024 = [
  { key: 1, pos: 1, equipo: "Águilas Doradas", pj: 2, g: 1, e: 1, p: 0, dg: 6, pts: 4 },
  { key: 2, pos: 2, equipo: "Leones de la Montaña", pj: 2, g: 0, e: 2, p: 0, dg: -2, pts: 2 },
  { key: 3, pos: 3, equipo: "CLLFC", pj: 2, g: 0, e: 1, p: 1, dg: -8, pts: 1 }
];

const logos = {
  CLLFC,
  "Tiburones FC": ShieldNotFound,
  "Dragones Rojos": ShieldNotFound,
  "Leones de la Montaña": ShieldNotFound,
  "Águilas Doradas": ShieldNotFound
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

export const FaseGruposIntercetis = ({year})=>{
    const data = year  === 2022? dataSource2022 : dataSource2024;

    return(
        <>
            <Typography.Title level={3} className="!text-[#800020]">Fase de Grupos</Typography.Title>
            <Table
                dataSource={data}
                columns={columns}
                pagination={false}
                scroll={{ x: "100%" }}
                className="animacion"
                rowKey="key"
            />
        </>
    
    );
};