
const addbtn=document.getElementById('add')
const main= document.querySelector('#main')
    addbtn.addEventListener('click', addNote);

//ajout d une nouvelle note
function addNote(){
    

    const note= document.createElement('div')
    note.innerHTML=`  <div class="tool">
                        <i class="save fas fa-save"></i>
                        <i class="trash fas fa-trash"></i>
                    </div>
                    <textarea></textarea>`
    note.classList.add("note");
    main.appendChild(note);
   

  
    const save= note.querySelector('.save')
    const trash= note.querySelector('.trash')
    const textarea= note.querySelector('textarea')
    
    save.addEventListener('click',saveNote )
    // textarea.addEventListener("input", saveNote) 
    trash.addEventListener('click', ()=>{
        note.remove()
        saveNote()
    })
    
}


//sauvegarder la note dans le local storage
function saveNote(){
    const notes = document.querySelectorAll('textarea')
    // console.log(notes)
    const data= Array.from(notes).map(note=> note.value)
    // console.log(notes, data)
    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
    
}


//retourner les notes sauvegarder
function showNote(){
  const lsNotes= JSON.parse(localStorage.getItem("notes"));
//   console.log(lsNotes==null)
//   console.log('bonjour')

  if(lsNotes !== null){
    lsNotes.forEach(noteText=>{
        addNote()

    const notes1= document.querySelectorAll(".note textarea")
    console.log(notes1)
    const lastNote= notes1[notes1.length-1];
     lastNote.value= noteText;
    //   console.log(lastNote )
    });
  }else {
    addNote()
  }
}
showNote()

