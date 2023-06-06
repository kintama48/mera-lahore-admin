import { Layout } from "antd";
import NavBar from "./navbar";
import SideBar from "./sidebar";
import routes from "../../utils/sidebarRoutes";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

const AdminLayout = () => {
  const { height } = useWindowDimensions();

  return (
    <Layout className={`h-[${height/3}vh] min-h-[100vh]`}>
      <NavBar />
      <Layout>
        <SideBar routes={routes} />
        <Content className="overflow-auto w-full h-full">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export { AdminLayout };
