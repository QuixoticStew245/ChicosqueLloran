import Chilena from "../assets/videos/Chilena.mp4";
import { useRef, useState } from "react";

export const VideoDestacado = () => {
    const videoRef = useRef(null);
    const [showOverlay, setShowOverlay] = useState(true);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setShowOverlay(false);
        }
    };

    return (
        <div className="w-full max-w-3xl min-h-[340px] max-xl:min-w-full mx-auto aspect-video relative flex flex-col items-center">
            <video 
                ref={videoRef}
                controls={showOverlay ? false : true}
                className="w-full h-full rounded-2xl"
                poster=""
                onPlay={() => setShowOverlay(false)}
            >
                <source src={Chilena} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            {showOverlay && (
                <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center  bg-opacity-40 rounded-2xl transition-all"
                    style={{ zIndex: 2 }}
                >
                    <span className="flex items-center justify-center w-24 h-24  bg-opacity-80 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="#7c0d29" />
                            <polygon points="24,18 24,42 44,30" fill="white" />
                        </svg>
                    </span>
                </button>
            )}
            <span className="font-light text-base">Proximamente likes y comentarios</span>
        </div>
    );
};
