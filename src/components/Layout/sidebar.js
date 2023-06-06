import React, { useEffect, useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Menu, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

function SideBar({ routes }) {
  const { width, height } = useWindowDimensions();
  const [collapsed, setCollapsed] = useState();
  const { SubMenu } = Menu;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (width < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [width]);

  return (
    <div
      className="sidebar"
      style={{
        height: `${height}`,
        display: "flex",
      }}
    >
      <Sider
        width={220}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          backgroundColor: "black",
        }}
        trigger={
          collapsed ? (
            <MenuUnfoldOutlined className="text-base" />
          ) : (
            <MenuFoldOutlined className="text-base" />
          )
        }
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {routes.map((menuItem) =>
            menuItem.children ? (
              <SubMenu
                key={menuItem.key}
                icon={menuItem.icon}
                title={menuItem.label}
              >
                {menuItem.children.map((subMenuItem) => (
                  <Menu.Item key={subMenuItem.key}>
                    <Link to={subMenuItem.path}>{subMenuItem.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                <Link to={menuItem.path}>{menuItem.label}</Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
    </div>
  );
}

export default SideBar;
