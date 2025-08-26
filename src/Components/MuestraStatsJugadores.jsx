import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const data = [
  { stat: 'OFFENSE', value: 87 },
  { stat: 'SPEED', value: 72 },
  { stat: 'DEFENSE', value: 69 },
  { stat: 'PASS', value: 65 },
  { stat: 'DRIBBLE', value: 77 },
  { stat: 'SHOOT', value: 75 },
];

export const MuestraStatsJugadores =() =>{
    return (
      <div className="flex bg-gray-900 text-white p-4 rounded-xl shadow-lg gap-6">
        {/* Lado izquierdo: info jugador */}
        <div className="flex flex-col items-center w-40 bg-gray-800 p-4 rounded-md">
          <div className="text-lg font-bold">ISAGI</div>
          <img
            src="https://via.placeholder.com/100x100.png?text=Isagi"
            alt="Isagi"
            className="my-2 rounded-full"
          />
          <div className="text-sm">TOTAL</div>
          <div className="text-3xl font-bold">76</div>
          <div className="text-4xl font-extrabold text-yellow-400">B</div>
        </div>

        {/* Centro: radar chart + stats */}
        <div className="relative">
          <RadarChart width={350} height={300} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="stat" stroke="#fff" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#ccc" />
            <Radar name="Stats" dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
          </RadarChart>

          {/* Letras grandes tipo A/B/C alrededor */}
          <div className="absolute top-[40px] left-[145px] text-2xl font-bold text-white">B</div>
          <div className="absolute top-[120px] left-[280px] text-2xl font-bold text-white">B</div>
          <div className="absolute top-[220px] left-[230px] text-2xl font-bold text-white">C</div>
          <div className="absolute top-[220px] left-[60px] text-2xl font-bold text-white">C</div>
          <div className="absolute top-[120px] left-[0px] text-2xl font-bold text-white">B</div>
          <div className="absolute top-[40px] left-[60px] text-2xl font-bold text-white">A</div>
        </div>
      </div>
    );
}