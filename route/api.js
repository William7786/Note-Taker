const fs = require("fs");
const data = require ("../db/db.json");
const {v4: uuidv4} = require("uuid")
module.exports = function (app){
    app.get("/api/notes/", function(req,res){
        res.json(data);
    })

    app.get("/api/notes/:id", (req, res) => {
        res.json(data[Number(req.params.id)])
    })
    app.post("/api/notes", function(req,res){
        let note = req.body;
        let ID = data.length;
        note.id = ID;
        req.body.id = uuidv4();

        fs.writeFileSync("/db/db.json", JSON.stringify(data), (error)=>{
            if (error) console.log(err)
        })
// note_data.push(req.body);
// res.json(true);
    })

}