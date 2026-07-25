require('dotenv').config();
const app = require('./app');
const { DEFAULT_PORT } = require('./config/constants');

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
