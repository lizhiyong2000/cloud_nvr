import dva from "dva";
import RouterConfig from "./router";

import LoginModel from "./models/login"

import UsersModel from "./models/users"

import DevicesModel from "./models/devices"

// 1. Initialize
const app = dva({
  initialState: {
    devices: [
      { name: "dva", id: 1 },
      { name: "antd", id: 2 },
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(LoginModel);
app.model(UsersModel)
app.model(DevicesModel)
// 4. Router  // require('./router').default
app.router(RouterConfig);

// 5. Start
app.start("#root");
