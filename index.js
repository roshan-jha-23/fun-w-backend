const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const githubData = {
  login: "roshan-jha-23",
  id: 141396860,
  node_id: "U_kgDOCG2LfA",
  avatar_url: "https://avatars.githubusercontent.com/u/141396860?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/roshan-jha-23",
  html_url: "https://github.com/roshan-jha-23",
  followers_url: "https://api.github.com/users/roshan-jha-23/followers",
  following_url:
    "https://api.github.com/users/roshan-jha-23/following{/other_user}",
  gists_url: "https://api.github.com/users/roshan-jha-23/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/roshan-jha-23/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/roshan-jha-23/subscriptions",
  organizations_url: "https://api.github.com/users/roshan-jha-23/orgs",
  repos_url: "https://api.github.com/users/roshan-jha-23/repos",
  events_url: "https://api.github.com/users/roshan-jha-23/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/roshan-jha-23/received_events",
  type: "User",
  site_admin: false,
  name: "Roshan jha",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Result Driven Engineer .",
  twitter_username: "roshan_jha_23",
  public_repos: 64,
  public_gists: 0,
  followers: 0,
  following: 5,
  created_at: "2023-08-04T06:57:29Z",
  updated_at: "2024-02-17T19:19:43Z",
};

app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

app.get("/addtwono", (req, res) => {
  res.send("a+b");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>the_lonely_shepherd</h1>");
});

app.get("/linkedin", (req, res) => {
  res.send("<h1>mera linkedin roshan ka</h1>");
});
app.get("/github", (req, res) => {
  res.json(githubData)
});

app.listen(PORT, () => {
  console.log(`Your app is running on http://localhost:${PORT}`);
});
