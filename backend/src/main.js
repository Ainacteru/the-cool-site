const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.set('trust proxy', true);

// CORS
app.use(cors({ origin: '*' }));

// Disable caching
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
});

app.use(express.json());
app.use('/api', routes);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
