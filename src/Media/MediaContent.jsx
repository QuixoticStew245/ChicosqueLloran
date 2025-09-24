import { useState, useRef } from "react";

import { Modal, Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../CSS/Comentarios.css"

export const MediaContent = ({ media, items, setItems }) => {
    
    const [selected, setSelected] = useState(null);
    const videoRef = useRef(null);
    const [comment, setComment] = useState("");

    const filtered = items.filter((item) => {
        if (media === "Todas") return true;
        return item.type === media;
    });

    const handleLike = (id) => {
        setItems(items.map((item) =>
            item.id === id ? { ...item, likes: item.likes + 1 } : item
        ));
    };

    const handleAddComment = () => {
        if (!comment.trim()) return;
        setItems(items.map((item) =>
            item.id === selected.id
            ? { ...item, comments: [...item.comments, comment] }
            : item
        ));
        setComment("");
    };

    return (
        <div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item) => (
                <div
                    key={item.id}
                    className="bg-gray-200 !pb-2 rounded-md shadow cursor-pointer object-cover animacion hover:shadow-lg transition"
                    onClick={() => setSelected(item)}
                >
                    {item.type === "Fotos" ? (
                        <img src={item.url} alt={item.title} className="w-full h-60 object-cover rounded-md" />
                    ) : (
                        <video src={item.url} className="w-full h-60 rounded-md object-cover" controls={false} />
                    )}
                    <h3 className="text-lg font-bold !pl-4 !mt-4">{item.title}</h3>
                    <p className="text-sm text-[#800020] !mt-2 !pl-4">{item.type}</p>
                </div>
                ))}
            </div>

            <Modal
                open={!!selected}
                onCancel={() => {
                    if (videoRef.current) videoRef.current.pause();
                    setSelected(null);
                }}
                footer={null}
                width={900}
            >
                {selected && (
                    <div>
                        {selected.type === "Fotos" ? (
                            <img 
                                src={selected.url} 
                                alt={selected.title} 
                                className="w-full rounded !mb-3 object-contain h-150" 
                            />
                        ) : (
                            <video ref={videoRef}
                                src={selected.url}
                                controls
                                className="w-full rounded !mb-3 object-contain h-120"  
                            />
                        )}
                        <h2 className="text-xl font-bold">{selected.title}</h2>
                        <p className="text-sm text-gray-500 !mb-2">{selected.desc}</p>
                        {/* Likes */}
                        <Button onClick={() => handleLike(selected.id)} type="primary">
                            Like ({items.find((i) => i.id === selected.id)?.likes})
                        </Button>
                        {/* Comentarios */}
                        <div className="!mt-4">
                            <h3 className="font-semibold">Comentarios</h3>
                            <div className="space-y-2 !mt-2 max-h-48 overflow-y-auto !pr-2 custom-scroll">
                                {items.find((i) => i.id === selected.id)?.comments.map((c, idx) => (
                                    <div className="bg-gray-100 !mb-2 rounded-md !py-1 !px-2 scroll-auto">
                                        <div className="flex items-center gap-1">
                                            <Avatar size="small" icon={<UserOutlined/>} />
                                            <h2 className="text-base font-semibold">User</h2>
                                        </div>
                                        <p key={idx} className="text-sm">{c}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex !mt-2">
                                <Input
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Escribe un comentario..."
                                />
                                <Button onClick={handleAddComment} type="primary">Enviar</Button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};
