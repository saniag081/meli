const express = require('express');
const cors = require('cors');
const app = express();
const routerApi = require('./routes');

const whitelist = ['http://localhost:5173'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));

routerApi(app);

app.listen(3000, () => {
	console.log('server listening on port http://localhost:3000')
});
