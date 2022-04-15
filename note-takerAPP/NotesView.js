export default class NotesView {
    constructor(root, { onNoteSelect, onNotNoteFilter,onNoteFilter,onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNotNoteFilter=onNotNoteFilter;
        this.onNoteFilter = onNoteFilter;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        
        this.root.innerHTML = `
            <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <input  class="notes__filter-input" type="text" >
                <button class="notes__filter" type="button">Filter</button>
                <label class="notes__label">Delete a note with double click!</label>
                <div class="notes__list"></div> 
            </div>                    
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note...">
                <textarea class="notes__body"> Take note...</textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes__add");
        const btnFilterNotes = this.root.querySelector(".notes__filter");
        const inputFilter = this.root.querySelector(".notes__filter-input");
        const inputTitle = this.root.querySelector(".notes__title");
        const inputBody = this.root.querySelector(".notes__body");

        btnAddNote.addEventListener("click", ()=>{
            this.onNoteAdd();
        });

        [inputTitle, inputBody].forEach(inputField =>{
            inputField.addEventListener("blur",()=>{
                const updatedTitle = inputTitle.value.trim();
                const updatedBody = inputBody.value.trim();

                this.onNoteEdit(updatedTitle,updatedBody);
            })
        });

        inputFilter.addEventListener("input", ()=>{
            if (!inputFilter.value){
                this.onNotNoteFilter();
            }
        });

        inputFilter.addEventListener("keypress", (event)=>{
            if(event.keyCode==13){
                this.onNoteFilter(inputFilter.value.trim());    
            };
        });

        btnFilterNotes.addEventListener("click", ()=>{
            this.onNoteFilter(inputFilter.value.trim());
        });


        this.updateNotePreviewVisibility(true);
    }


    _createListItemHTML(id,title,body,updated){
        const MAX_BODY_LENGTH = 60;
        
        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                    ${body.substring(0,MAX_BODY_LENGTH)}
                    ${body.length>MAX_BODY_LENGTH ? "...": "" } 
                </div>
                <div class="notes__small-updated">
                    ${updated.toLocaleString(undefined,{dateStyle:"full",timeStyle:"short"})}
                </div>
            </div>
        `;
    }

    updateNoteList(notes){
        const notesListContainer = this.root.querySelector(".notes__list");
        notesListContainer.innerHTML="";
        
        for (const note of notes) {
            const html = this._createListItemHTML(note.id,note.title,note.body,new Date(note.updated));

            notesListContainer.insertAdjacentHTML("beforeend",html);
        }
        
        notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem =>{
            noteListItem.addEventListener("click",()=>{
                this.onNoteSelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick",()=>{
                const doDelete = confirm("Are you sure you want to delete this note?");
                if (doDelete){
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });
        });
    }

    updateActiveNote(note){
        this.root.querySelector(".notes__title").value=note.title;
        this.root.querySelector(".notes__ody").value=note.body;

        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem =>{
            noteListItem.classList.remove ("notes__list-item--selected");
        });

        this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");

    }

    updateNotePreviewVisibility(visible){
        this.root.querySelector(".notes__preview").style.visibility=visible ? "visible":"hidden";
    }
}
