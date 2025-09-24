import { Button, Layout, FloatButton } from "antd";
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
import { MediaMainContent } from "../Media/MediaMainContent";

export const Media = ()=>{
    const[collapsed,Setcollapsed] = useState(false);

    return( 
       <>
            <Layout>
                <Sider
                    className="hidden min-[900px]:block sider"
                    trigger={null}
                    collapsible
                    collapsed={collapsed}   
                >
                    <Sidebar/>
                    <Button type="text" icon={collapsed ? <MenuUnfoldOutlined />:<MenuFoldOutlined /> } onClick={()=> Setcollapsed(!collapsed)} className="triger-btn" />
                </Sider>
                <Layout>
                    <Header className="header">
                        <CustomHeader/>
                    </Header>
                    <Content className="content">
                        <MediaMainContent />   
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
