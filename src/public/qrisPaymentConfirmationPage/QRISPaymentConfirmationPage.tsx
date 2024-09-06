import { useEffect, useMemo, useState } from "react";
import { Button, Layout, Space, Form, Select, message } from "antd";
import DataRenderer, {
  DataRendererContent,
} from "../../uiComponent/detail/DataRenderer";
import SubTitle from "../../uiComponent/subTitle/SubTitle";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    backgroundColor: "#FFD300",
    borderColor: "#FFD300",
    color: "#000 !important", // Black text to contrast with yellow background
    "&:hover": {
      backgroundColor: "#E6B800 !important", // Darker yellow on hover
      borderColor: "#E6B800 !important",
    },
  },
});

export default function QRISPaymentConfirmationPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [durations, setDurations] = useState<
    { value: string; label: string }[]
  >([]);
  const [prices, setPrices] = useState<{ [key: string]: string }>({});
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const classes = useStyles();

  useEffect(() => {
    const fetchDurations = async () => {
      try {
        const response = await fetch(
          "/scb-transaction/public/getDuration/004",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch durations");

        const data = await response.json();

        const durationOptions = data.result.map((item: any) => ({
          value: item.duration,
          label: `${item.duration} min`,
        }));

        const priceMap: { [key: string]: string } = {};
        data.result.forEach((item: any) => {
          priceMap[item.duration] = item.price;
        });

        setDurations(durationOptions);
        setPrices(priceMap);
      } catch (error) {
        message.error("Failed to load durations");
      }
    };

    fetchDurations();
  }, []);
  const handlePayment = async (values: any) => {
    setLoading(true);

    const requestBody = {
      machineCode: "004",
      duration: values.waktu,
    };

    console.log("Request Body:", requestBody); // Log the request body

    try {
      const response = await fetch("/scb-transaction/public/getQRIS", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to fetch QRIS");

      const data = await response.json();
      console.log("Response Data:", data); // Log the response data

      if (data.qrImage) {
        navigate("/next-page", { state: { qrImage: data.qrImage } });
      } else {
        message.error("No QR image returned");
      }
    } catch (error) {
      console.error("Fetch Error:", error); // Log detailed error
      message.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDurationChange = (value: string) => {
    setSelectedPrice(prices[value] || "");
  };

  const kodeMesin = useMemo<DataRendererContent[]>(() => {
    return [
      {
        label: "Kode Mesin",
        value: "W4",
      },
    ];
  }, []);

  const totalPembayaran = useMemo<DataRendererContent[]>(() => {
    return [
      {
        label: "Total Pembayaran",
        value: selectedPrice ? `Rp ${selectedPrice}` : "-",
      },
    ];
  }, [selectedPrice]);

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <SubTitle subTitle="Pembayaran" />
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
        <Form
          onFinish={handlePayment}
          style={{ width: "100%" }}
          labelCol={{ span: 17 }}
          wrapperCol={{ span: 17 }}
          labelAlign={"left"}
          colon={false}
        >
          <DataRenderer content={kodeMesin} />
          <Form.Item label="Waktu" name="waktu">
            <Select
              options={durations}
              onChange={handleDurationChange}
              loading={durations.length === 0}
              placeholder="Select duration"
            />
          </Form.Item>
          <DataRenderer content={totalPembayaran} />
          <Space
            direction="horizontal"
            size="large"
            style={{ width: "100%", marginTop: 20 }}
          >
            <Button
              type="primary"
              className={classes.button}
              style={{ flex: 1 }}
              htmlType="submit"
              loading={loading}
            >
              Bayar
            </Button>
          </Space>
        </Form>
      </div>
    </Layout.Content>
  );
}
