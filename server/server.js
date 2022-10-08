const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const { AuthRouter } = require("./routes/auth");
const { PostsRouter } = require("./routes/posts");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/feed", PostsRouter);
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Listening at port : ${PORT}`);
});
