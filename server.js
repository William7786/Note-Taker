const express = require ("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(__dirname + "./public"))


require("./route/api.js")(app);
require("./route/html.js")(app);

app.listen(PORT, function(){
    console.log(`listening on : http://localhost:${PORT}`)
})