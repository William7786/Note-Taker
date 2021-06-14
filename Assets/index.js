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
        noteTitle.attr("readonly", false);
        noteText.attr("readonly", false);
        noteTitle.val("");
        noteText.val("");
    }
}


const Save = function(){
const newNote = {
    title: noteTitle.val(),
    text: noteText.val()
};

saveNote(newNote).then(function(data){
    getANDRender();
    renderActiveNote();
});
}


const noteView = function(){
activeNote = $(this).data();
renderActiveNote();

}

const newNoteVeiw = function(){

}

const renderSave = function(){

}
const renderList = function (notes){

}

const getANDRender = function(){

}


