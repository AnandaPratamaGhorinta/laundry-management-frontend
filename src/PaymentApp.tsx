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
import TransactionHistory from "./menu/member/components/transactionHistory/TransactionHistory";
import MemberQRScan from "./menu/member/components/memberQRScan/MemberQRScan";
import TopUp from "./menu/member/components/topUp/TopUp";
import Payment from "./menu/member/components/payment/Payment";
import PaymentConfirmation from "./menu/member/components/paymentConfirmaton/PaymentConfirmation";
import QRISPaymentConfirmationPage from "./public/qrisPaymentConfirmationPage/QRISPaymentConfirmationPage";

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
                <Route
                  path="/payment-confirmation"
                  element={<PaymentConfirmation />}
                />
                <Route path="/payment" element={<Payment />} />
                <Route path="/member-top-up" element={<TopUp />} />
                <Route path="/member-qr-scan" element={<MemberQRScan />} />
                <Route
                  path="/transaction-history"
                  element={<TransactionHistory />}
                />
                <Route
                  path="/qris-payment-confirmation/:code"
                  element={<QRISPaymentConfirmationPage />}
                />
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
