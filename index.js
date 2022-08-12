const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./Routes/auth");
const app = express();
var cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(
//   cookieSession({ name: "session", keys: ["VanTinh"], maxAge: 24 * 60 * 60 * 100 })
// );
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

const session = require('express-session')

app.use(session({
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());



app.get('/user', (req, res)=>{
       res.json({
        name:"hello"
       })
})
app.use("/auth", authRoute);
app.get('/', (req, res)=>{
  const user = req.user;
  console.log(user);
    res.json({
     name:"hello"
    })
})


app.listen("4000", () => {
  console.log("Server is running!");
});