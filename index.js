const express = require("express");
const app = express();
const path = require("path"); // view ejs file locations.
const { v4: uuidv4 } = require("uuid"); // To create unique id

app.use(express.urlencoded({ extended: true })); // Express can understand URL encoded data.

app.set("view engin", "ejs"); // View engine for ejs
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const port = 8080;

// creating a temporary array, (data)
let posts = [
  {
    id: uuidv4(),
    username: "akshay",
    content: "I love Coding",
  },
  {
    id: uuidv4(),
    username: "kajal",
    content: "I love Eating",
  },
  {
    id: uuidv4(),
    username: "shradha",
    content: "I love Traveling",
  },
];

app.get("/", (req, res) => {
  res.send("Server is Working Well!");
});

// View Route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// Create Route
// sending req on /posts to add new post
// get a form to add new post
app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });

  // console.log(req.body);
  res.redirect("/posts"); // redirect to posts, by default sends get req.
});

// Show Post
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

// PATCH to update content (Update Route)
app.patch('/posts/:id', (req, res)=>{
    let {id} = req.params
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("The update is working");
})

// Get request to get a form for edit the post.
app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
})

// App listen on Port.
app.listen(port, () => {
  console.log(`Your Server is Running on port ${port}`);
});
