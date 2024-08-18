import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { createUseStyles } from "react-jss";
import PaymentPage from "./public/paymentPage/PaymentPage";
import { appStyles } from "./paymentApp.style";
import { SubtitleProvider } from "./uiComponent/subTitleProvider/SubTitleProvider";
import Header from "./uiComponent/header/Header";
import QRISPaymentPage from "./public/qrisPaymentPage/QRISPaymentPage";
import MemberLoginPage from "./public/memberLoginPage/MemberLoginPage";
import RegistrationPage from "./public/registrationPage/RegistrationPage";
import ForgotPinPage from "./public/forgotPinPage/ForgotPinPage";

const useStyles = createUseStyles(appStyles);

const { Content } = Layout;

const App = () => {
  const classes = useStyles();

  return (
    <SubtitleProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Header classes={classes} />
          <Content className={classes.content}>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<PaymentPage />} />
                <Route path="/qris" element={<QRISPaymentPage />} />
                <Route path="/login" element={<MemberLoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/reset-pin" element={<ForgotPinPage />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </SubtitleProvider>
  );
};

const WrappedPaymentApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedPaymentApp;
