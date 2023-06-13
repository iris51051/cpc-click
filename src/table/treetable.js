import React from "react";
import "./index.css";
import { DownOutlined } from "@ant-design/icons";
import { Button, Form, Radio, Space, Switch, Table } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "기간내 중복방문 IP",
    dataIndex: "ip",
  },
  {
    title: "상세조회",
    dataIndex: "detail",
  },
  {
    title: "클릭수",
    dataIndex: "c_num",
  },
  {
    title: "유효한 클릭 수",
    dataIndex: "c_val",
  },
  {
    title: "중복된 클릭 수",
    dataIndex: "c_inval",
  },
  {
    title: "광고노출 차단 관리",
    dataIndex: "ad_ban",
  },
];
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    ip: "John Brown",
    detail: <Button>상세조회</Button>,
    c_num: Number(`${i}2`),
    c_val: Number(`${i}1`),
    c_inval: Number(`${i}`),
    ad_ban: <Button type="primary">노출제한 설정</Button>,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const App = () => {
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("bottomRight");
  const scroll = {};
  const tableColumns = columns.map((item) => ({
    ...item,
  }));

  const tableProps = {
    expandable,
    rowSelection,
    scroll,
  };
  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
    </>
  );
};
export default App;
