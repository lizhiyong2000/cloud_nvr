import React from "react";
import PropTypes from "prop-types";
import Button from "antd/lib/button";
import Table from "antd/lib/table";
import Popconfirm from "antd/lib/popconfirm";

import "antd/dist/antd.less";
// import type { StateType } from "../../models/devices";

export interface IDevicesProps {
  onDelete: (values: any) => void;
  devices: any[];
}

// export interface IDevicesState {
//   devices?: Array<{title: string, content: string}>;
// };

const DevicesList = ({ onDelete, devices }: IDevicesProps) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Actions",
      render: (text: any, record: any) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  console.log(devices);
  return <Table dataSource={devices} columns={columns} />;
};

DevicesList.displayName = "Hello";

DevicesList.propTypes = {
  // displayName: 'Hello',
  onDelete: PropTypes.func.isRequired,
  devices: PropTypes.array.isRequired,
};

export default DevicesList;
