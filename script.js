let body = document.querySelector('body');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let modeswitch = document.querySelector('.mode-switch');

if(localStorage.getItem('mode') === 'Dark Mode'){
    body.classList.add('Dark');
    modeswitch.textContent = "Light Mode";
}

modeswitch.addEventListener('click', ()=>{
    body.classList.toggle('Dark');

    const isDarkmode = body.classList.contains('Dark');

    modeswitch.textContent = isDarkmode ? 'Light Mode' : 'Dark Mode';

    localStorage.setItem("mode", isDarkmode? 'Dark Mode' : 'Light Mode');


})


const updatetime = () =>{
    let date = new Date();
    let sec = (date.getSeconds() / 60 * 360);
    let min = (date.getMinutes() / 60 * 360);
    let hr = (date.getHours() / 12 * 360);

    second.style.transform = `rotate(${sec}deg)`
    minute.style.transform = `rotate(${min}deg)`
    hour.style.transform = `rotate(${hr}deg)`
}



setInterval(updatetime,1000);

updatetime();