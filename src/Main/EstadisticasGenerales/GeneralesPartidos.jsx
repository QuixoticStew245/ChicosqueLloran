import { Legend, Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from "recharts";

const dataPartidos = [
    {name:"Ganados", value: 50},
    {name:"Perdidos", value: 10},
    {name:"Empatados", value: 5},
]

const colors = ["#4CAF50", "#F44336", "#2196F3"];

export const GeneralesPartidos = ()=>{
    return(
        <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={dataPartidos}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name} ${value}`}
                        outerRadius={100}
                        dataKey="value"
                    >
                        {dataPartidos.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};