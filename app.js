let rgb = '';
//generate random color function
const generateColor = function () {
    let colorNum = (Math.floor(Math.random() * 255)) + 1;
    return colorNum;
}

//event listener on button
let btn = document.querySelector('.change');
let h1 = document.querySelector('.title');
let body = document.querySelector('body');
btn.addEventListener('click', function () {
    let red = generateColor();
    let green = generateColor();
    let blue = generateColor();

    rgb = `rgb(${red},${green},${blue})`;
    h1.innerText = rgb;
    body.setAttribute('style', `background-color : ${rgb}`);
    //if color very dark change text to white
    if (red + green + blue <= 300) {
        h1.setAttribute('style', `color : white`);
    } else {
        h1.setAttribute('style', `color : black`);
    }

})

