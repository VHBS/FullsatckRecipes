const express = require('express');

const app = express();

const routes = require('../routes/routes');

const PORT = 3001;

app.use(routes);

app.listen(PORT, () => console.log(`listening door ${PORT}`));