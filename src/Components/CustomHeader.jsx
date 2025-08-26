import { Flex, Typography, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";
import "../index.css";

export const CustomHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const isJugadoresRoute = location.pathname === "/jugadores";

    const menu = (
        <div className="flex flex-col gap-3 !p-2 bg-white rounded-xl shadow-lg">
            <Button className="btn-login" onClick={() =>
                        Swal.fire({
                            icon: 'error',
                            title: 'Aun no Disponible',
                            text: `aún no puedes crear una cuenta.`,
                            confirmButtonText: 'Cerrar',
                            color: '#800020',
                            background: '#fff',
                            customClass: {
                                confirmButton: 'confirm-btn'
                            }
                        })
                        /*() => {navigate("/login"); setMenuOpen(false);}*/
                    }
              
            >
                Iniciar Sesión
            </Button>
            <Button className="btn-signup" onClick={() =>
                        Swal.fire({
                            icon: 'error',
                            title: 'Aun no Disponible',
                            text: `aún no puedes crear una cuenta.`,
                            confirmButtonText: 'Cerrar',
                            color: '#800020',
                            background: '#fff',
                            customClass: {
                                confirmButton: 'confirm-btn'
                            }
                        })
                        /*{() => {navigate("/register"); setMenuOpen(false);}}*/
                    }
            >
                Crear cuenta
            </Button>
        </div>
    );

    return(
        <Flex align="center" justify="space-between">
            <Typography.Title
                level={2}
                type="secondary"
                className={`header-title ${isJugadoresRoute ? "headertitle2" : ""}`}
            >
                Bienvenido a Chicos que lloran
            </Typography.Title>
           
            <Flex gap="1rem">
                <Button
                    className={`btn-login header-btn ${isJugadoresRoute ? "btn-jugadores1" : ""}`}
                    onClick={() =>
                        Swal.fire({
                            icon: 'error',
                            title: 'Aun no Disponible',
                            text: `aún no puedes crear una cuenta.`,
                            confirmButtonText: 'Cerrar',
                            color: '#800020',
                            background: '#fff',
                            customClass: {
                                confirmButton: 'confirm-btn'
                            }
                        })
                        /*() => navigate("/login")*/
                    }
                    
                > 
                    Iniciar Sesión
                </Button>
                <Button
                    className={`btn-signup header-btn ${isJugadoresRoute ? "btn-jugadores2" : ""}`}
                    onClick={() =>
                        Swal.fire({
                            icon: 'error',
                            title: 'Aun no Disponible',
                            text: `aún no puedes crear una cuenta.`,
                            confirmButtonText: 'Cerrar',
                            color: '#800020',
                            background: '#fff',
                            customClass: {
                                confirmButton: 'confirm-btn'
                            }
                        })
                        /*() => navigate("/register")*/
                    }
                > 
                    Crear cuenta
                </Button>
                <div className="hidden max-xl:block">
                    <Dropdown
                        open={menuOpen}
                        onOpenChange={setMenuOpen}
                        popupRender={() => menu}
                        placement="bottomRight"
                    >
                        <Button
                            icon={<MenuOutlined />}
                            type="text"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`!text-2xl ${isJugadoresRoute ? "playerbutton" : ""}`}
                        /> 
                    </Dropdown>
                </div>
            </Flex>
        </Flex>
    );
};
