const express = require('express');
const startProcessClaim = require('./func/startClaim');


const app = express();

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  startProcessClaim();
  console.log(`Listening on port ${port}`);
});
