import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const blogs = [];
var blogID = 0;

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

app.get("/view/:id", (req, res) => {
  const blog = blogs.find(item => item.id === parseInt(req.params.id));
  res.render("blog.ejs", { blog });  
});

app.post("/create", (req, res) => {
  const date = new Date().toDateString();
  blogs.push({
    id: blogID,
    day: date,
    author: req.body["author"],
    title: req.body["title"],
    body: req.body["body"],
  });
  blogID++
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
