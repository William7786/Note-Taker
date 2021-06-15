const express = require ("express");
const app = express();
const PORT = process.env || 8080;

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static("./public/"))


require("./route/api.js")(app);
require("./route/html")(app);

app.listen(PORT, function(){
    console.log("listening on " + PORT)
})