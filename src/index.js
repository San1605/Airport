const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes")
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", apiRoutes)
console.log(apiRoutes)


app.listen(ServerConfig.PORT, () => {
    console.log("server is up and runing on ", ServerConfig.PORT)
})