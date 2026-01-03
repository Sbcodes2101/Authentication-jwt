const express = require("express")
const authRoutes = require("./routes/auth.routes")

const app = express();

/*

POST/auth/register
POST/auth/login
GET/auth/user
GET/auth/logout
 */

app.use('/auth',authRoutes)

module.exports = app