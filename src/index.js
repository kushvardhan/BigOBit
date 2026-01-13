const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/ping", (req, res) => {
    return res.json({ msg: "YOO" });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
