import { useState, useRef } from "react";
import { Modal, Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../CSS/Comentarios.css";

export const MediaContent = ({ media, items, setItems }) => {
    const [selected, setSelected] = useState(null);
    const videoRef = useRef(null);
    const [comment, setComment] = useState("");

    const filtered = items.filter((item) => {
        if (media === "Todas") return true;
        return item.type === media;
    });

    const handleLike = (id) => {
        setItems(
        items.map((item) =>
            item.id === id
            ? {
                ...item,
                liked: !item.liked,
                likes: (item.likes || 0) + (item.liked ? -1 : 1),
                }
            : item
        )
        );
    };

    const handleAddComment = () => {
        if (!comment.trim()) return;
        setItems(
        items.map((item) =>
            item.id === selected.id
            ? { ...item, comments: [...item.comments, comment] }
            : item
        )
        );
        setComment("");
    };

    const current = items.find((i) => i.id === selected?.id);

    return (
        <div>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
            <div
                key={item.id}
                className="bg-gray-200 !pb-2 rounded-md shadow-md cursor-pointer object-cover animacion hover:shadow-lg transition"
                onClick={() => setSelected(item)}
            >
                {item.type === "Fotos" ? (
                <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-md"
                />
                ) : (
                <video
                    src={item.url}
                    className="w-full h-60 rounded-md object-cover"
                    controls={false}
                />
                )}
                <h3 className="text-lg font-bold !pl-4 !mt-4">{item.title}</h3>
                <p className="text-sm text-[#800020] !mt-2 !pl-4">{item.type}</p>
            </div>
            ))}
        </div>

        {/* Modal */}
        <Modal
            open={!!selected}
            onCancel={() => {
            if (videoRef.current) videoRef.current.pause();
            setSelected(null);
            }}
            footer={null}
            width={900}
        >
            {current && (
            <div>
                {/* Imagen o video */}
                {current.type === "Fotos" ? (
                <img
                    src={current.url}
                    alt={current.title}
                    className="w-full rounded !mb-3 object-contain h-150"
                />
                ) : (
                <video
                    ref={videoRef}
                    src={current.url}
                    controls
                    className="w-full rounded !mb-3 object-contain h-120"
                />
                )}

                <h2 className="text-xl font-bold">{current.title}</h2>
                <p className="text-sm text-gray-500 !mb-2">{current.desc}</p>

                {/* Likes */}
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => handleLike(current.id)}
                        type={current.liked ? "primary" : "default"}
                        className={
                            current.liked
                            ? "!bg-[#800020] !text-white !border-[#800020]"
                            : "!bg-gray-100 !text-black !border-gray-300"
                        }
                    >
                        {current.liked ? "❤️ Me gusta" : "🤍 Me gusta"}
                    </Button>
                    <p>{current.likes || 0} Likes</p>
                </div>

                {/* Comentarios */}
                <div className="!mt-4">
                    <h3 className="font-semibold">Comentarios</h3>
                    <div className="space-y-2 !mt-2 max-h-48 overflow-y-auto !pr-2 custom-scroll">
                        {current.comments?.map((c, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-100 !mb-2 rounded-md !py-1 !px-2 scroll-auto"
                        >
                            <div className="flex items-center gap-1">
                            <Avatar size="small" icon={<UserOutlined />} />
                            <h2 className="text-base font-semibold">User</h2>
                            </div>
                            <p className="text-sm !pl-7">{c}</p>
                        </div>
                        ))}
                    </div>
                    <div className="flex gap-2 !mt-2 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:!p-2 bg-gray-100">
                        <Input
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Escribe un comentario..."
                        />
                        <Button onClick={handleAddComment} className="!bg-[#800020] !text-white !border-[#800020]">
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
            )}
        </Modal>
        </div>
    );
};
