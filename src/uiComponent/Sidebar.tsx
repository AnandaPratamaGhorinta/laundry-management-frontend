import {
  HomeOutlined,
  UserOutlined,
  BranchesOutlined,
  ShopOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { appStyles } from "../app.style";

const useStyles = createUseStyles(appStyles);
const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => {
  const classes = useStyles();
  return (
    <Sider width={200} className="site-layout-background" collapsed={collapsed}>
      <img src="/logo.png" alt="Logo" className={classes.logo} />
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<BranchesOutlined />}>
          <Link to="/branch">Branch</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ShopOutlined />}>
          <Link to="/outlet">Outlet</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<InboxOutlined />}>
          <Link to="/machine">Machine</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/user">User</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
