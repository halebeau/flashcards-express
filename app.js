const express = require("express")
const bodyParser = require("body-parser")
const Parser = require("cookie-parser")
const cookieParser = require("cookie-parser")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.set("view engine", "pug")

app.get("/", (req, res) => {
  const name = req.cookies.username
  if (name) {
    res.render("index", { name: name })
  } else {
    res.redirect("/hello")
  }
})

app.get("/card", (req, res) => {
  res.render("card", { prompt: "Who is buried in Grant's tomb?" })
})

app.get("/hello", (req, res) => {
  const name = req.cookies.username
  if (name) {
    res.redirect("/")
  } else {
    res.render("hello")
  }
})

app.post("/hello", (req, res) => {
  res.cookie("username", req.body.username)
  res.redirect("/")
})

app.listen(3000, () => {
  console.log("App is running on localhost:3000!")
})
