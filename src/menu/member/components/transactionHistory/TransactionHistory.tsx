import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Space, Layout, Button, Select } from "antd";
import { createUseStyles } from "react-jss";
import { content } from "./mockData";
import SubTitle from "../../../../uiComponent/subTitle/SubTitle";

const useStyles = createUseStyles({
  tableContainer: {
    marginTop: "20px",
    overflowX: "auto",
  },
  paginationControls: {
    marginTop: "20px",
    textAlign: "right",
  },
});

export default function TransactionHistory() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data] = useState(content);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slice the data to get the rows for the current page
  const currentData = data.slice(startIndex, endIndex);

  const columns = [
    {
      title: "Tanggal",
      dataIndex: "date",
      key: "date",
      sorter: (a: any, b: any) => a.date.localeCompare(b.date),
    },
    {
      title: "Transaksi",
      dataIndex: "transaction",
      key: "transaction",
      sorter: (a: any, b: any) => a.transaction.localeCompare(b.transaction),
    },
    {
      title: "Tipe Mesin",
      dataIndex: "type",
      key: "type",
      sorter: (a: any, b: any) => a.type.localeCompare(b.type),
    },
    {
      title: "Kode Mesin",
      dataIndex: "code",
      key: "code",
      sorter: (a: any, b: any) => a.code.localeCompare(b.code),
    },
  ];

  return (
    <Layout.Content style={{ padding: "0 20px", height: "100%" }}>
      <SubTitle subTitle="Histori transaksi" />
      <div className={classes.paginationControls}>
        <Select
          value={pageSize}
          onChange={(value) => {
            setPageSize(value);
            setCurrentPage(1); // Reset to first page when page size changes
          }}
          style={{ marginTop: "20px" }}
        >
          <Select.Option value={10}>10 </Select.Option>
          <Select.Option value={50}>50</Select.Option>
          <Select.Option value={100}>100</Select.Option>
        </Select>
      </div>
      <div className={classes.tableContainer}>
        <Table
          columns={columns}
          dataSource={currentData}
          rowKey="code"
          pagination={false}
          // Disable built-in pagination
        />
      </div>

      <Space
        direction="horizontal"
        size="large"
        style={{ width: "100%", marginTop: 20 }}
      >
        <Button
          style={{ width: 100 }}
          onClick={() => navigate("/payment-confirmation")}
        >
          Kembali
        </Button>
      </Space>
    </Layout.Content>
  );
}
