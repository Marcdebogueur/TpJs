
document.querySelector('button').addEventListener('click', detectCharacter);

console.log( character)

function detectCharacter(){
    const character = document.querySelector('#character').value;
    const result = document.querySelector('.result')
    console.log(character)
    if(character){
        console.log(character)
        result.textContent= ` The unicode value is ${character.charCodeAt(0)}`
    }else{

        console.log('bonjour')
        result.textContent="please enter a character"
    }
}
