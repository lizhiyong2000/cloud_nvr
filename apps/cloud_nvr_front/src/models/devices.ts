import {Effect, Model, Subscription} from "dva";
import {Reducer} from "redux";

export interface DeviceType {
  id:string;
  name:string;
}

export interface DevicesModelState {
  devices: DeviceType[];
};

export interface DevicesModelType {
  namespace: 'devices';
  state: DevicesModelState;
  reducers: {
    delete: Reducer<DevicesModelState>;
  };

}


const DevicesModel: DevicesModelType = {
  namespace: "devices",
  state: {devices: []},
  reducers: {
    delete(state, { payload: id }) {
      return state?.devices.filter((item: DeviceType) => item.id !== id);
    },
  },
};

export default DevicesModel;
