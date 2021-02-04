import * as React from "react";
import { connect } from "dva";
import DevicesList from "../components/Devices/DevicesList";
import { Dispatch } from 'redux';
import type { StateType } from '../models/devices';
import {LoginProps} from "./Login";

export interface IDevicesProps {
  dispatch: Dispatch<any>;
  devices: StateType;
};


// export interface IDevicesState {
//   devices?: Array<{title: string, content: string}>;
// };

// class Devices extends React.Component<IDevicesProps, IDevicesState>{

const Devices: React.FC<IDevicesProps> = (props) => {
  // constructor(props, context) {
  //   super(props, context);
  // };
// const Devices = ({ dispatch, devices }) => {
  const handleDelete = (id :any) => {
    const { dispatch } = props;
    dispatch({
      type: "devices/delete",
      payload: id,
    });
  }

    return (
        <div>
          <h2>List of Devices 111</h2>
          <DevicesList onDelete={handleDelete} state={props.devices} />
        </div>
    );

};

// export default Devices;
export default connect(({ devices }:StateType) => ({
  devices,
}))(Devices);
