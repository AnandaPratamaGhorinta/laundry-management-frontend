import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";
import { content } from "./mockData";
import SearchFilter from "./components/SearchFilter";

const useStyles = createUseStyles({
  container: {
    padding: "20px",
    background: "#fff",
    minHeight: "100vh",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "50px",
  },
  searchContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: 60,
  },
  tableContainer: {
    marginTop: "20px",
  },
  addButton: {
    borderColor: "#1890ff",
    color: "#1890ff",
    "&:hover": {
      borderColor: "#40a9ff",
      color: "#40a9ff",
    },
  },
  link: {
    color: "#1890ff",
    cursor: "pointer",
    textDecoration: "underline",
  },
});

export default function MachineSearch() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState(content);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const columns = [
    {
      title: "Outlet",
      dataIndex: "outlet",
      key: "outlet",
      sorter: (a: any, b: any) => a.outlet.localeCompare(b.outlet),
    },
    {
      title: "Kode Mesin",
      dataIndex: "code",
      key: "code",
      render: (text: string) => (
        <span
          className={classes.link}
          onClick={() => navigate(`/machine/detail`)}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.code.localeCompare(b.code),
    },
    {
      title: "Nama Mesin",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Tipe Mesin",
      dataIndex: "type",
      key: "type",
      sorter: (a: any, b: any) => a.type.localeCompare(b.type),
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Space size="middle">
          <EditOutlined onClick={() => navigate(`/machine/edit/input`)} />
          <DeleteOutlined onClick={() => navigate(`/machine/delete/review`)} />
        </Space>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys as string[]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h2>Machine</h2>
        <Button
          ghost={true}
          type="primary"
          onClick={() => navigate("/machine/add/input")}
          className={classes.addButton}
        >
          Add
        </Button>
      </div>
      <SearchFilter setData={setData} />
      <div className={classes.tableContainer}>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="code"
          rowSelection={rowSelection}
          pagination={{
            position: ["bottomRight"],
            pageSizeOptions: ["10", "50", "100"],
            showSizeChanger: true,
            defaultPageSize: 10,
          }}
        />
      </div>
    </div>
  );
}
