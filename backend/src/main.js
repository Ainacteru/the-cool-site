const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
