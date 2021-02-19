export interface IDevicesProps {
  dispatch: any;
  devices?: Array<{ title: string; content: string }>;
}

export interface IDevicesState {
  devices?: Array<{ title: string; content: string }>;
}
