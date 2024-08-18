import QRCodeSection from "../../uiComponent/qrCodeSection/QRCodeSection";

const QR_LINK = "https://pngimg.com/uploads/qr_code/qr_code_PNG33.png";

export default function QRISPaymentPage() {
  return <QRCodeSection qrCodeLink={QR_LINK} hidePromo={false} />;
}
