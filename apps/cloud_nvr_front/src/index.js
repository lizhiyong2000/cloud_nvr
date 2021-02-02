import dva from "dva";
import RouterConfig from "./router";

import UsersModel from "./models/users"

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
app.model(require("./models/devices").default);
app.model(UsersModel)
// 4. Router  // require('./router').default
app.router(RouterConfig);

// 5. Start
app.start("#root");
