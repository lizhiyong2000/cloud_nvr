import React from "react";
import { connect } from "dva";
import DevicesList from "../components/Devices/DevicesList";

const Devices = ({ dispatch, devices }) => {
  function handleDelete(id) {
    dispatch({
      type: "devices/delete",
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Devices 111</h2>
      <DevicesList onDelete={handleDelete} devices={devices} />
    </div>
  );
};

// export default Devices;
export default connect(({ devices }) => ({
  devices,
}))(Devices);
