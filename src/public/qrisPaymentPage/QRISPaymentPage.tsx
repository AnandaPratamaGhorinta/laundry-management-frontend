import React, { useState, useEffect, useMemo } from "react";
import { Button, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";
import SubTitle from "../../uiComponent/subTitle/SubTitle";
import DataRenderer, {
  DataRendererContent,
} from "../../uiComponent/detail/DataRenderer";

const { Text } = Typography;

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative", // Allows absolute positioning of the message
    padding: "20px",
    boxSizing: "border-box",
  },
  qrCode: {
    width: "300px", // Adjust size as needed
    height: "300px", // Adjust size as needed
    marginBottom: "20px",
  },
  button: {
    marginBottom: "20px",
    width: 300,
    height: 90,
  },
  messageContainer: {
    bottom: "20px",
    left: "20px",
    right: "20px", // Ensure it does not overflow on smaller screens
    textAlign: "left",
    marginTop: 300,
  },
  message2: {
    color: "red",
    fontSize: "14px", // Adjust font size as needed
    overflowWrap: "break-word", // Handle long words to prevent overflow
  },
  message1: {
    fontSize: "14px", // Adjust font size as needed
    overflowWrap: "break-word", // Handle long words to prevent overflow
  },
});

const QRISPaymentPage: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    // Mock fetch QR code data
    setTimeout(() => {
      setQrCodeUrl("https://pngimg.com/uploads/qr_code/qr_code_PNG33.png"); // Mock QR code URL
    }, 1000);
  }, []);

  const dataPembayaran = useMemo<DataRendererContent[]>(() => {
    return [
      {
        label: "Promo",
        value: "Rp. 5000",
      },
      {
        label: "Total Pembayaran",
        value: "Rp. 5000",
      },
    ];
  }, []);

  return (
    <Layout.Content style={{ padding: "0", height: "100%", margin: 0 }}>
      <SubTitle subTitle="Pembayaran" />
      {qrCodeUrl ? (
        <div>
          <Text className={classes.message1}>Valid untuk 30 menit</Text>
          <div className={classes.container}>
            <>
              <img src={qrCodeUrl} alt="QR Code" className={classes.qrCode} />
              <Button
                className={classes.button}
                type="primary"
                onClick={() => navigate("/")}
              >
                Close
              </Button>
            </>
          </div>
          <DataRenderer content={dataPembayaran} />
        </div>
      ) : (
        <p>Loading QR Code...</p>
      )}

      <div className={classes.messageContainer}>
        <Text className={classes.message2}>
          Silahkan menyelesaikan pembayaran dengan screenshot QR code dan upload
          di aplikasi Bank Anda.
        </Text>
      </div>
    </Layout.Content>
  );
};

export default QRISPaymentPage;
