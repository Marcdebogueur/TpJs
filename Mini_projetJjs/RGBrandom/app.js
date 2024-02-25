const redsilder= document.querySelector('#redsilder')
const greensilder= document.querySelector('#greensilder')
const bluesilder= document.querySelector('#bluesilder')
const body= document.querySelector('body')


const redvalue= document.querySelector('#redvalue')
const greenvalue= document.querySelector('#greenvalue')
const bluevalue= document.querySelector('#bluevalue')


const colorbox= document.querySelector('#color-box')
const copyButton= document.querySelector('#copyButton')
const inputType= document.querySelector('#inputType')


redsilder.addEventListener('input', updateColor);
greensilder.addEventListener('input', updateColor);
bluesilder.addEventListener('input', updateColor);
copyButton.addEventListener('click', copyRgbValue);



function updateColor(){
    const red= redsilder.value
    const green= greensilder.value
    const blue= bluesilder.value


    inputType.innerHTML=`rgb(${red}, ${green}, ${blue})`
    redvalue.innerHTML=`${red}`
    greenvalue.innerHTML=`${green}`
    bluevalue.innerHTML=`${blue}`

    const rgbColor= `rgb(${red}, ${green}, ${blue})`
    colorbox.style.backgroundColor= rgbColor;
    body.style.backgroundColor= rgbColor
    // console.log(red, green, blue)

}
updateColor()


function copyRgbValue(){
    const red= redsilder.value
    const green= greensilder.value
    const blue= bluesilder.value

    const rgbColor= `rgb(${red}, ${green}, ${blue})`

    navigator.clipboard.writeText(rgbColor)
        .then(()=>{
            alert(rgbColor)
        })
        .catch((e)=>{
            console.error("impossible de copier la couleur", e)
        })

}