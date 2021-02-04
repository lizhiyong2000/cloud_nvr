import dva from "dva";
import createhistory from 'history/createBrowserHistory';

// 1. Initialize
const app = dva({
  onError: (e) => {
    console.error(e.message);
  },
  history: createhistory(),
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
app.model(require('./models/login').default);
app.model(require('./models/users').default);
app.model(require('./models/devices').default);
// 4. Router  // require('./router').default
app.router(require('./router').default);

// 5. Start
app.start("#root");
