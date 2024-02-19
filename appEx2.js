const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
//const expressHbs = require("express-handlebars")

const app = express();
const errorController = require("./controllers/error")

//app.engine("handlebars", expressHbs({layoutsDir: "views/layouts/", defaultLayout: "main-layout"}))
//add a new not default engine

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin",adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)


app.listen(3000)