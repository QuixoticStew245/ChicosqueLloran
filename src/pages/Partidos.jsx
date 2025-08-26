import { Button, Layout, Select,FloatButton } from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import { MobileNavbar } from "../Nav/MobileNavbar"; 
import Sider from "antd/es/layout/Sider";
import { Sidebar } from "../Nav/Sidebar";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { CustomHeader } from "../Components/CustomHeader";
import "../App.css"
import "../index.css"
import "../CSS/Footer.css";
import { FooterContain } from "../Components/FooterContain";
import { PartidosMainContent } from "../Matches/PartidosMainContent";
import { PartidosAsideContent } from "../Matches/Aside/PartidosAsideContent";

const torneos= [
    { value: "liga", label: "Liga" },
    { value: "copa", label: "Copa Rabaul" },
    { value: "intercetis", label: "Intercetis" },
];

export const Partidos = () => {
    const [collapsed, Setcollapsed] = useState(false);
    const [torneo, Settorneo] = useState("liga");

    return (
        <>
            <Layout>
                <Sider
                    className="hidden md:block sider"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}   
                >
                    <Sidebar />
                    <Button 
                        type="text" 
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
                        onClick={() => Setcollapsed(!collapsed)} 
                        className="triger-btn" 
                    />
                </Sider>
                <Layout>
                    <Header className="header">
                        <CustomHeader />
                    </Header>
                    <Content className="content">
                        <Select
                            options={torneos}
                            onChange={Settorneo}
                            className="w-full md:w-80"
                            value={torneo}
                        />
                        <div className="flex gap-3 max-xl:flex-col !p-2">
                            <PartidosMainContent torneo={torneo} />
                            <PartidosAsideContent torneo={torneo} />
                        </div>
                    </Content>
                    <Footer className="footer">
                        <FooterContain />
                    </Footer>
                </Layout>
            </Layout>
            <MobileNavbar />
            <FloatButton.BackTop duration={300} className="mi-backtop"/>
        </>
    );
};