const express = require('express');
const startProcessClaim = require('./func/startClaim');
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require('./routes');


const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("spell bot is running ...");
})
app.use("/", router)

const port = parseInt(process.env.PORT) || 3001;
app.listen(port, () => {
  startProcessClaim();
  console.log(`Listening on port ${port}`);
});
