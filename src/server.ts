import express from "express";

const server = express();
const PORT = 3310;

server.get("/", (req, res) => {
  res.json({
    message: "Server running",
  });
});

server.listen(PORT, () => {
  console.log(`Server Start and running in port ${PORT}`);
});
