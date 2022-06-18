import React, { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import Box from "src/components/Box";
// const originData = [];
const SearchInput = styled(Box)`
  justify-content: right;
  display: flex;
  input {
    width: 240px;
    margin-left: auto;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    padding: 5px 10px;
  }
`;
// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const AntdTables = ({ phulu }) => {
  const [form] = Form.useForm();

  const [data, setData] = useState(phulu);
  const [maindata, setMainData] = useState(phulu);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      datatype: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
      sorter: (a, b) => a.name.length - b.name.length,
      ellipsis: true,
    },
    {
      title: "Datatype",
      dataIndex: "datatype",
      editable: true,
      sorter: (a, b) => a.datatype.length - b.datatype.length,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  function onChange(sorter) {
    console.log(sorter);
  }
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleChange = (e) => {
    if (e.target.value.length) {
      let value = e.target.value;
      console.log(value);
      let filterObj = maindata.filter(
        (el) =>
          el.name.toLowerCase().includes(value.toLowerCase()) ||
          el.datatype.toLowerCase().includes(value.toLowerCase())
      );
      console.log("filter", filterObj);
      setData(filterObj);
    } else {
      setData(maindata);
    }
  };
  return (
    <Form form={form} component={false}>
      <SearchInput>
        <input type="text" onChange={handleChange} />
      </SearchInput>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        onChange={onChange}
      />
    </Form>
  );
};

export default AntdTables;
