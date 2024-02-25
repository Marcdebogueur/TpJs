// function calculateLove(){

   
//     console.log(name1);
// }
 const b = document.querySelector('button')
 b.addEventListener('click', calculateLove)

 function calculateLove(){
    const name1= document.querySelector('#name').value.trim();
    const name2= document.querySelector('#name2').value.trim();
   
    if(name1 == "" || name2 == "" ){
        console.log(name1, name2)
        alert('remplissez les champs ')
       
    }else {
        const lovePourcentage = Math.floor(Math.random() * 100)
        console.log( lovePourcentage)
        const r = document.querySelector('#result');
        r.innerHTML=`<p>le couple ${name1} et ${name2} s'aime a ${lovePourcentage} %</p>`
       document.getElementById('name').value=''
       document.getElementById('name2').value=''
        
    }
 }




