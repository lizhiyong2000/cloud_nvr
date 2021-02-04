import { Model } from "dva";

export type StateType = {
  devices: any[];
};

export default {
  namespace: "devices",
  state: [],
  reducers: {
    delete(state, { payload: id }) {
      return state.filter((item: any) => item.id !== id);
    },
  },
} as Model;
