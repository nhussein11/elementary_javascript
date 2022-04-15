import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App{
    constructor(root){
        this.notes=[];
        this.activeNote = null;
        this.view=new NotesView(root,this._handlers());

        this._refreshNotes();
    }
    _refreshNotes(){
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.length>0){
            this._setActiveNotes(notes[0]);
        }
    }
    _refreshFilteredNotes(someExpression){
        const notes = NotesAPI.getAllNotes();
        const someExpressionLowerCase = someExpression.toLowerCase();
        const filteredNotes = notes.filter(note => 
            note.title.toLowerCase().includes(someExpressionLowerCase) || 
            note.body.toLowerCase().includes(someExpressionLowerCase)
        );

        this._setNotes(filteredNotes);

        if (notes.length>0){
            this._setActiveNotes(notes[0]);
        }
    }

    _setNotes(notes){
        this.notes=notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.length>0);
    }
    
    _setActiveNotes(note){
        this.activeNote= note;
        this.view.updateActiveNote(note);
    }

    _handlers(){
        return {
            onNoteSelect: noteId =>{
                const selectedNote = this.notes.find(note => note.id==noteId);
                this._setActiveNotes(selectedNote); 
            },
            onNotNoteFilter:()=>{
                this._refreshNotes();
            },
            onNoteFilter:someExpression=>{
                this._refreshFilteredNotes(someExpression);
            },
            onNoteAdd: () =>{
                const newNote = {
                    title: "New Note",
                    body:"Take a note..."
                };

                NotesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title,body) =>{
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onNoteDelete: noteId =>{
                NotesAPI.deleteNote(noteId);
                this._refreshNotes();
            }
        };
    }
}
