import { useState } from "react";
import { Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const UploadMedia = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Fotos");
    const [fileUrl, setFileUrl] = useState("");
    const [desc, setDesc] = useState("");

    const handleFileSelect = (file) => {
        const url = URL.createObjectURL(file); // URL temporal
        setFileUrl(url);
        return false; // evita subida real
    };

    const handleSubmit = () => {
        if (!title || !fileUrl) return;
        onAdd({
            id: Date.now(),
            title,
            type,
            url: fileUrl,
            likes: 0,
            comments: [],
            desc
        });
        setTitle("");
        setFileUrl("");
        setDesc("");
};

    return (
        <div className="!p-4">
            <Input
                placeholder="Título"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="!mb-2"
            />
            <Input
                placeholder="Descripción"
                value={desc}
                onChange={e => setDesc(e.target.value)}
                className="!mb-2"
            />
            <Select
                value={type}
                onChange={setType}
                options={[
                { value: "Fotos", label: "Foto" },
                { value: "Videos", label: "Video" },
                ]}
                className="!mb-2 w-full"
            />
            <Upload beforeUpload={handleFileSelect} maxCount={1}>
                <Button icon={<UploadOutlined />}>Seleccionar archivo</Button>
            </Upload>
            <Button type="primary" className="!mt-2" onClick={handleSubmit}>
                Subir
            </Button>
        </div>
    );
};
