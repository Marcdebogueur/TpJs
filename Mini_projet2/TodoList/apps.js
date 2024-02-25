

const listContainer=document.querySelector('#list-container')



document.querySelector('button').addEventListener('click', AddTask);



//ajouter une nouvelle tache
function AddTask(){
    const inputBox= document.querySelector('#input-box')
    if(inputBox.value ===''){
        // inputBox.style.border="red"
    }else{
        // console.log(inputBox)
        // listContainer.innerHTML+=`  <li class="checked">${inputBox}</li>`
        let li= document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li)

        let span= document.createElement('span');
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }

    inputBox.value='';
    SaveTask();
}


function SaveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function ShowTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}

ShowTask()

// cocher les taches finies
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        SaveTask()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        SaveTask()
    }
})


//supprimer une tache