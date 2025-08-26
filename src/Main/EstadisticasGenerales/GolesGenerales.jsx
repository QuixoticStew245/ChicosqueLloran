import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dataGoleadores = [
  { nombre: "Luis", goles: 70 },
  { nombre: "Yamil", goles: 48 },
  { nombre: "Mau", goles: 38 },
  { nombre: "SantyRCH", goles: 30 },
  { nombre: "Derek", goles: 28 },
];

export const GolesGenerales = ()=>{
    return(
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataGoleadores} layout="vertical" margin={{ top: 20, right: 3, left: 8, bottom: 2 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="nombre" type="category" />
            <Tooltip />
            <Bar dataKey="goles" fill="#7c0d29" label={{ position: 'right', fill: '#7c0d29', fontWeight: 700, fontSize: 16 }} />
            </BarChart>
        </ResponsiveContainer>
    );
};