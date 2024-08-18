import QRCodeSection from "../../../../uiComponent/qrCodeSection/QRCodeSection";
const QR_LINK = "https://pngimg.com/uploads/qr_code/qr_code_PNG33.png";

export default function MemberQRScan() {
  return (
    <QRCodeSection
      to="payment-confirmation"
      qrCodeLink={QR_LINK}
      hidePromo={true}
    />
  );
}
