import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button, Layout, Dropdown, Menu, message } from "antd";
import Sidebar from "./uiComponent/Sidebar";
import Login from "./public/login/Login";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { appStyles } from "./app.style";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Dashboard from "./menu/dashboard/Dashboard";
import BranchSearch from "./menu/branch/search/BranchSearch";
import BranchAddInput from "./menu/branch/add/input/BranchAddInput";
import BranchAddReview from "./menu/branch/add/review/BranchAddReview";
import BranchAddSuccess from "./menu/branch/add/success/BranchAddSuccess";
import BranchDetail from "./menu/branch/detail/BranchDetail";
import BranchEditInput from "./menu/branch/edit/input/BranchEditInput";
import BranchEditReview from "./menu/branch/edit/review/BranchEditReview";
import BranchEditSuccess from "./menu/branch/edit/success/BranchEditSuccess";
import BranchDeleteReview from "./menu/branch/delete/review/BranchDeleteReview";
import BranchDeleteSuccess from "./menu/branch/delete/success/BranchDeleteSuccess";
import OutletSearch from "./menu/outlet/search/OutletSearch";
import OutletDetail from "./menu/outlet/detail/OutletDetail";
import OutletAddInput from "./menu/outlet/add/input/OutletAddInput";
import OutletAddReview from "./menu/outlet/add/review/OutletAddReview";
import OutletAddSuccess from "./menu/outlet/add/success/OutletAddSuccess";
import OutletEditInput from "./menu/outlet/edit/input/OutletEditInput";
import OutletEditReview from "./menu/outlet/edit/review/OutletEditReview";
import OutletEditSuccess from "./menu/outlet/edit/success/OutletEditSuccess";
import OutletDeleteReview from "./menu/outlet/delete/review/OutletDeleteReview";
import OutletDeleteSuccess from "./menu/outlet/delete/success/OutletDeleteSuccess";

const useStyles = createUseStyles(appStyles);

const { Content, Header } = Layout;

const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    message.success("Logged out successfully!");
    navigate("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {!isLoginPage && (
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar collapsed={collapsed} />
          <Layout>
            <Header className={classes.header}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={handleCollapseToggle}
              />
              <div className={classes.userDetailContainer}>
                <h2>USER 01 </h2>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <img
                    src="/user.png"
                    alt="User Icon"
                    className={classes.userIcon}
                  />
                </Dropdown>
              </div>
            </Header>
            <Content className={classes.content}>
              <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                <Routes>
                  <Route path="/" element={<></>} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/branch" element={<BranchSearch />} />
                  <Route path="/branch/detail" element={<BranchDetail />} />
                  <Route
                    path="/branch/add/input"
                    element={<BranchAddInput />}
                  />
                  <Route
                    path="/branch/add/review"
                    element={<BranchAddReview />}
                  />
                  <Route
                    path="/branch/add/success"
                    element={<BranchAddSuccess />}
                  />
                  <Route
                    path="/branch/edit/input"
                    element={<BranchEditInput />}
                  />
                  <Route
                    path="/branch/edit/review"
                    element={<BranchEditReview />}
                  />
                  <Route
                    path="/branch/edit/success"
                    element={<BranchEditSuccess />}
                  />
                  <Route
                    path="/branch/delete/review"
                    element={<BranchDeleteReview />}
                  />
                  <Route
                    path="/branch/delete/success"
                    element={<BranchDeleteSuccess />}
                  />
                  <Route path="/outlet" element={<OutletSearch />} />
                  <Route path="/outlet/detail" element={<OutletDetail />} />
                  <Route
                    path="/outlet/add/input"
                    element={<OutletAddInput />}
                  />
                  <Route
                    path="/outlet/add/review"
                    element={<OutletAddReview />}
                  />
                  <Route
                    path="/outlet/add/success"
                    element={<OutletAddSuccess />}
                  />
                  <Route
                    path="/outlet/edit/input"
                    element={<OutletEditInput />}
                  />
                  <Route
                    path="/outlet/edit/review"
                    element={<OutletEditReview />}
                  />
                  <Route
                    path="/outlet/edit/success"
                    element={<OutletEditSuccess />}
                  />
                  <Route
                    path="/outlet/delete/review"
                    element={<OutletDeleteReview />}
                  />
                  <Route
                    path="/outlet/delete/success"
                    element={<OutletDeleteSuccess />}
                  />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
