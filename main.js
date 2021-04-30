window.addEventListener("keydown",(e)=>{
    let keyCode = e.keyCode;

    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();

    let key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add("playing");
})

let audioAll = document.querySelectorAll("audio");
audioAll.forEach(audio=>audio.volume = 0.2);
let slider = document.querySelector("#volumeSlider");

slider.addEventListener('mousedown',volume);
slider.addEventListener('mousemove',volume);
slider.addEventListener('touchend',volume);

function volume(){
    audioAll.forEach(audio=>audio.volume = slider.value/100);
    document.querySelector("#sound").innerHTML = slider.value;
}

let keys = document.querySelectorAll(".key");
keys.forEach(keyClass=>keyClass.addEventListener("transitionend",removeClass))
function removeClass(e){
    if(e.propertyName=="transform"){
        this.classList.remove("playing");
    }
}
keys.forEach(key=>key.addEventListener("click",clickUse));

function clickUse(e){
    let keyCode = e.target.attributes[0].value;
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
    let key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add("playing");
}