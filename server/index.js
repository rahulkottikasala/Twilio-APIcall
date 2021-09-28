const express = require("express");
const cors = require("cors");
const userRouter = require("./router/user")

const app = express();


app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", userRouter);

const PORT = "7000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT}`);
});
