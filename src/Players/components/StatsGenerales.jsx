export const StatsGenerales = ({stats})=>{
    return(
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 text-white max-w-[800px] w-full">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col StatsConetent">
                    <div>
                        {stat.icon}
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold cursor-default max-2xl:!text-xs">{stat.nombre}</span> 
                        <span className="cursor-default">{stat.valor}</span>
                    </div>
                </div>
            ))}
        </div>
    
    );
};