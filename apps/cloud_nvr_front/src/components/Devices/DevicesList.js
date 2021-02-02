import React from "react";
import PropTypes from "prop-types";
import Button from "antd/lib/button";
import Table from "antd/lib/table";
import Popconfirm from "antd/lib/popconfirm";

import "antd/dist/antd.less";

const DevicesList = ({ onDelete, devices }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Actions",
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={devices} columns={columns} />;
};

DevicesList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  devices: PropTypes.array.isRequired,
};

export default DevicesList;
