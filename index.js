const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');
const { 
  errorHandler,
  logErrors,
  boomErrorHandler,
  ormErrorHandler
} = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500/'];

app.use(cors({ origin: whitelist }))

app.get('/', (req, res) => {
  res.send('Hello world in express')
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(ormErrorHandler);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running successfully. Listening at http://localhost:${port}`);
})