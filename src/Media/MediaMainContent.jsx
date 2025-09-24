import { Button, Modal, Select, Typography } from "antd";
import { MediaContent } from "./MediaContent";
import { useState } from "react";
import { UploadMedia } from "./UploadMedia";
import ChilenYamil from "../assets/videos/Chilena.mp4"
import FotoIdolo from "../assets/FotoIdolo.jpg"
import Chilena2 from "../assets/videos/Chilena2.mp4"

const options = [
    { value: "Todas", label: "Todas" },
    { value: "Videos", label: "Videos" },
    { value: "Fotos", label: "Fotos" },
];

export const MediaMainContent = () => {
    const [media, setMedia] = useState("Todas");
    const [items, setItems] = useState([
        { id: 1, type: "Videos", title: "Chilena Yamil", url: ChilenYamil, likes: 0, comments: [], desc:"El mejor jugador el mundo" },
        { id: 2, type: "Fotos", title: "Foto Idolo", url: FotoIdolo, likes: 0, comments: [], desc:"Aqui con mi idolo" },
        { id: 3, type: "Videos", title: "Esquizofrenia Yamil", url: Chilena2, likes: 0, comments: [], desc:"Yamil se cree Hugo Sanchez" },
    ]);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <header className="flex items-center justify-between gap-4 md:flex-row flex-col">
                <Typography.Title level={2} style={{ color: "#800020" }}>
                    Multimedia
                </Typography.Title>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                    <Button type="primary" onClick={() => setModalOpen(true)}>
                        +
                    </Button>
                    <Select
                        defaultValue="Todas"
                        options={options}
                        value={media}
                        onChange={setMedia}
                        className="w-full md:w-70"
                    />
                </div>
            </header>

            <main className="!my-4">
                <Modal
                    open={modalOpen}
                    onCancel={() => setModalOpen(false)}
                    footer={null}
                    width={900}
                >
                    <UploadMedia
                        onAdd={(newItem) => {
                            setItems((prev) => [...prev, newItem]);
                            setModalOpen(false);
                        }}
                    />
                </Modal>
                <MediaContent media={media} items={items} setItems={setItems} />
            </main>
        </div>
    );
};
