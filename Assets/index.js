let noteText;
let noteTitle;
let newNote;
let saveNote;
let listNote;
let activeNote = {};

const getNote = function(){
    return $.ajax({
        url: "/api/notes/",
        method: "GET"
    });
};

const save = function (note){
    return $.ajax({
        url:"/api/notes/",
        data: note,
        method:"post"
    })
};

const renderActiveNote = function (){
    saveNote.hide();

    if(activeNote.id){
        noteTitle.attr("readonly", true);
        noteText.attr("readonly", true);
        noteTitle.val(activeNote.title);
        noteText.value (activeNote.text);

    } else {

    }
}


const Save = function(){

}


const noteView = function(){

}

const newNoteVeiw = function(){

}

const renderSave = function(){

}
const renderList = function (notes){

}

const getANDRender = function(){
    
}