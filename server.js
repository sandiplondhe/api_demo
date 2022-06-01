const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/v1", (req, res) => {
  return res.json({ message: "Api works" });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
