let num = document.getElementsByClassName('num');
// let num_span = num.getElementsByTagName('span');
for(let i = 0; i<num.length; i++){
    num[i].style.transformOrigin = `bottom center`;
}
for(let i = 0; i<num.length; i++){
    num[i].style.transform = `rotate(${i * 30}deg)`;
    num[i].querySelector('div').style.transform = `rotate(-${i * 30}deg)`;
}





let lineBox = document.getElementsByClassName('line-box');
// let num_span = num.getElementsByTagName('span');
for(let i = 0; i<lineBox.length; i++){
    lineBox[i].style.transformOrigin = `bottom center`;
}
for(let i = 0; i<lineBox.length; i++){
    lineBox[i].style.transform = `rotate(${i * 6}deg)`;
    if(i % 5 == 0){
        lineBox[i].querySelector('div').style.width = '8px';
        lineBox[i].querySelector('div').style.height = '8px';
        lineBox[i].querySelector('div').style.borderRadius = '50%';
        lineBox[i].querySelector('div').style.position = 'relative';
        lineBox[i].querySelector('div').style.left = '-3px';
    }
    // lineBox[i].querySelector('div').style.transform = `rotate(-${i * 6}deg)`;
}






let hourStick = document.querySelector('.hour-stick');
let minuteStick = document.querySelector('.minute-stick');
let secondStick = document.querySelector('.second-stick');

setInterval(() => {
    let d = new Date();

    hourStick.style.transform = `rotate(${(d.getHours() * 30) + 360 / d.getMinutes}deg)`;
    minuteStick.style.transform = `rotate(${d.getMinutes() * 6}deg)`;
    secondStick.style.transform = `rotate(${d.getSeconds() * 6}deg)`;

    console.clear();
    console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}, 1000);

