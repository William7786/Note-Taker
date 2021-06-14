const path = require("path")

module.exports = (app)=> {
    app.get("/notes",(req, res) => {
        res.sendfile(path.join(_dirname, '../public/notes.html'));
    })
    app.get("*", function(req,res){
        res.sendFile(path.join(_dirname, "../public/index.html"));
    })
}