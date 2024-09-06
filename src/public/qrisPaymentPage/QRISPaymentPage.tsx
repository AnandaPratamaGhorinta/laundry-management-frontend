import { useLocation } from "react-router-dom";
import QRCodeSection from "../../uiComponent/qrCodeSection/QRCodeSection";

export default function QRISPaymentPage() {
  const location = useLocation();
  const { qrImage } = location.state as any;
  return <QRCodeSection qrCodeLink={qrImage} hidePromo={false} to={"/"} />;
}
