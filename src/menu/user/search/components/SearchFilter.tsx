import { Collapse, Form, Input, Button, Select } from "antd";
import { useCallback, useState } from "react";
import { mockFetchBranches } from "../mockData";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const { Panel } = Collapse;

interface SearchFilterProps {
  setData: React.Dispatch<
    React.SetStateAction<
      {
        code: string;
        name: string;
        outlet: string;
        type: string;
      }[]
    >
  >;
}

export default function SearchFilter({ setData }: SearchFilterProps) {
  const [form] = Form.useForm();
  const [filterCode, setFilterCode] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterOutlet, setFilterOutlet] = useState("");
  console.log(filterOutlet);

  const handleChange = (value: string) => {
    setFilterOutlet(value);
  };

  const onSearch = useCallback(async () => {
    const result: any = await mockFetchBranches(
      filterCode,
      filterName,
      filterOutlet
    );
    setData(result);
  }, [filterCode, filterName, filterOutlet, setData]);

  const onClean = () => {
    form.resetFields();
    setFilterName("");
    setFilterCode("");
    setFilterOutlet("");
  };

  return (
    <Collapse defaultActiveKey={"1"}>
      <Panel header="Filter" key="1">
        <Form
          form={form}
          layout="horizontal"
          labelAlign={"left"}
          style={{ maxWidth: 600 }}
          {...formItemLayout}
        >
          <Form.Item label="Outlet" name="outlet">
            <Select
              onChange={handleChange}
              options={[
                { value: "Outlet 001", label: "Outlet 001" },
                { value: "Outlet 002", label: "Outlet 002" },
                { value: "Outlet 003", label: "Outlet 003" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Nama" name="name">
            <Input
              placeholder="Input Nama"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Kode" name="code">
            <Input
              placeholder="Input Kode"
              value={filterCode}
              onChange={(e) => setFilterCode(e.target.value)}
            />
          </Form.Item>
          <div style={{ marginLeft: 150 }}>
            <Form.Item>
              <Button type="primary" onClick={onSearch}>
                Search
              </Button>
              <Button style={{ marginLeft: "10px" }} onClick={onClean}>
                Clear
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Panel>
    </Collapse>
  );
}
