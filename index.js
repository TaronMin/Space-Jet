let mens = document.querySelector(".mens");
let mouse = document.querySelector(".mouse");
let forShake = document.querySelector(".container-fifth");
let firstCircle = document.querySelector(".first-circle");
let secondCircle = document.querySelector(".second-circle");
let forSliderShake = document.querySelector(".for-slider-shake");
let forHeader = document.querySelector(".content-of-header");
let forMediaNone = document.querySelector(".for-none-media");
let mediaOpen = document.querySelector(".for-media");
let filterForStart = document.querySelector(".filter");
let forFacebookCount = document.querySelector(".for-likes-count");
let forLogoLeftTop = document.querySelector(".logo-left-top ");
let fireJet = document.querySelector("canvas");
fireJet.setAttribute('width',400);
fireJet.setAttribute('heigth',400);
let countForFace = 0;
let forCallFace = true;
window.onscroll = ()=>{
    if(document.body.scrollTop >= 66){
        forLogoLeftTop.style.cssText = "top: -2px;"
    }else{
        forLogoLeftTop.style.cssText = "top: -180px;"
    }
    if(document.body.scrollTop >= 20){
        filterForStart.style.opacity = "1";
    }else{
        filterForStart.style.opacity = "0";
    }
    if(document.body.scrollTop >=70 && document.body.scrollTop <= 800){
        mens.style.top = `${-document.body.scrollTop}px`
    }
    if(document.body.scrollTop >=80 && document.body.scrollTop <= 650){
        console.log(document.body.scrollTop);
        if(document.body.scrollTop - 620 <= -220 || document.body.scrollTop - 620 >= -3){return;}
        mouse.style.cssText = `left:${document.body.scrollTop - 620}px;`;
    }
    if(document.body.scrollTop >= 2400 && document.body.scrollTop <= 2439){
        for(let i = 0;i<3;i++){
            forShake.children[i].classList.add("shake-div");
        }
    }
    if(document.body.scrollTop >= 1200 && document.body.scrollTop <= 1269){
        if(forCallFace){
            forCallFace = false;
            face();
            function face(){
                if(countForFace >= 500){
                    return;
                }
                forFacebookCount.innerHTML = `${++countForFace}`;
                setTimeout(face,8);
                return;
            }
        }
        return;
    }
    a()
    function a(){
        for(let i=0; i<forMediaNone.children.length; i++){
            forMediaNone.children[i].firstChild.classList.remove("bg-yellow-color-blue");
        }
        if(document.body.scrollTop >=0 && document.body.scrollTop <= 733){
            forMediaNone.children[0].firstChild.classList.add("bg-yellow-color-blue");
        }
        if(document.body.scrollTop > 733 && document.body.scrollTop <= 1000){
            forMediaNone.children[1].firstChild.classList.add("bg-yellow-color-blue");
        }
        if(document.body.scrollTop > 1001 && document.body.scrollTop <= 1403){
            forMediaNone.children[2].firstChild.classList.add("bg-yellow-color-blue");
        }
        if(document.body.scrollTop > 1403 && document.body.scrollTop <= 1786){
            forMediaNone.children[3].firstChild.classList.add("bg-yellow-color-blue");
        }
        if(document.body.scrollTop > 1786 && document.body.scrollTop <= 2533){
            forMediaNone.children[4].firstChild.classList.add("bg-yellow-color-blue");
        }
        if(document.body.scrollTop > 2533 && document.body.scrollTop <= 3153){
            forMediaNone.children[5].firstChild.classList.add("bg-yellow-color-blue");
        }
    }
    console.log(document.body.scrollTop);
}
function secondcircle(){
    forSliderShake.style.cssText = "transform: translateX(-50%);";
}
function firstcircle(){
    forSliderShake.style.cssText = "transform: translateX(0px);";
} 
function scrollFor(count){
    if(count === 0){
        window.scrollTo(0,0);
    }
    if(count === 1){
        window.scrollTo(0,801);
    }
    if(count === 2){
        window.scrollTo(0,1269);
    }
    if(count === 3){
        window.scrollTo(0,1737);
    }
    if(count === 4){
        window.scrollTo(0,2400);
    }
    if(count === 5){
        window.scrollTo(0,3119);
    }
}
function mediaHeaderOpen(){
    mediaOpen.style.cssText = "transform: translateX(0px);";
}
function mediaHeaderClose(){
    mediaOpen.style.cssText = "transform: translateX(200px);";
}
console.log(window.innerWidth + " im ekrani chap@");
$('#fire').fire({
    width: parseInt($(window).width() / 55),
    height: parseInt($(window).width() / 10),
    speed: 60,
    fireTransparency: 900,
    globalTransparency: 11,
    maxPow: 8,
    minPow: 10,
    gravity: 6.5,
    fadingFlameSpeed: 1,
    yOffset: 0,
    mouseEffect: false,
    flameWidth: 0,
    flameHeight: 2,
    plasm: false,
    burnBorders: false,
    maxPowZone: "center",
});

$('#fire1').fire({
    width: parseInt($(window).width() / 55),
    height: parseInt($(window).width() / 10),
    speed: 200,
    fireTransparency: 80,
    globalTransparency: 0,
    maxPow: 10,
    minPow: 10,
    gravity: 30,
    fadingFlameSpeed: 0,
    yOffset: 0,
    mouseEffect: false,
    flameWidth: 0,
    flameHeight: 1,
    plasm: false,
    burnBorders: false,
    maxPowZone: "center",
});