import { PolarAngleAxis, PolarGrid, RadarChart, Radar, ResponsiveContainer } from "recharts";

export const StatsRadar = ({ data }) => {
    
    const dataWithRate = data.map(stat => {
        let rate = "";
        if (stat.A >= 100) rate = "SS";
        else if (stat.A >= 90) rate = "S";
        else if (stat.A >= 80) rate = "A";
        else if (stat.A >= 70) rate = "B";
        else if (stat.A >= 60) rate = "C";
        else if (stat.A >= 50) rate = "D";
        else rate = "E";
        return { ...stat, rate };
    });

    
    const total = Math.round(data.reduce((sum, stat) => sum + stat.A, 0) / 5);

   
    let totalRate = "";
    if (total >= 100) totalRate = "SS";
    else if (total >= 90) totalRate = "S";
    else if (total >= 80) totalRate = "A";
    else if (total >= 70) totalRate = "B";
    else if (total >= 60) totalRate = "C";
    else if (total >= 50) totalRate = "D";
    else totalRate = "E";

    return (
        <div className="StatsConetent">
            <section className="w-full md:w-1/2 h-[220px] md:h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="85%" data={dataWithRate}>
                        <PolarGrid stroke="#F5F5DC" strokeOpacity={0.7} />
                        <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{ fill: "#F5F5DC", fontSize: "14px" }} 
                        />
                        <Radar 
                            name="player" 
                            dataKey="A" 
                            stroke="#00FF00"      
                            fill="#10FF00"        
                            fillOpacity={0.4} 
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </section>

            <section className="flex flex-col gap-2 w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-2 items-center">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold cursor-default">Total</h2>
                        <span className="text-2xl cursor-default">{total}</span>
                    </div>
                    
                    <span className="text-3xl font-bold self-center cursor-default">{totalRate}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {dataWithRate.map((stat, index) => (
                        <div key={index} className="grid grid-cols-3 gap-3">
                            <span className="font-bold cursor-default">{stat.subject}:</span>
                            <span className="text-right cursor-default">{stat.A}</span>
                            <span className="font-bold cursor-default">{stat.rate}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
