import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const blogs = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.get("/view", (req, res) => {
  res.render("view.ejs", { blogs });
});

app.post("/create", (req, res) => {
  const date = new Date().toDateString();
  blogs.push({
    day: date,
    author: req.body["author"],
    title: req.body["title"],
    body: req.body["body"],
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
