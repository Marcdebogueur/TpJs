  
    document.querySelector('button').addEventListener('click', isPalindrome)

    function isPalindrome(){
        const mot = document.querySelector('#mot').value.trim()
        if(mot===""){
            document.getElementById('result').innerHTML=`<p>entrez un mot </p>`
        }else{
            const copie= mot.split('').reverse().join('')
            // console.log(mot, copie)
            if(mot.toLowerCase()===copie.toLowerCase()){
                document.getElementById('result').innerHTML=`<p>${mot} est un palindrome</p>`
            }else{
                document.getElementById('result').innerHTML=`<p>${mot} n est pas un palindrome</p>`
    
            }
        }
      
        
    }

   