let welcome = document.getElementById("parallaxText");
let shape1 = document.getElementById("parallax1");
let shape2 = document.getElementById("parallax2");
let shape3 = document.getElementById("parallax3");
let shape4 = document.getElementById("parallax4");
let shape5 = document.getElementById("parallax5");

window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    /*
    welcome.style.left = -value*1.5+'px';
    welcome.style.top = value*0.5+'px';
    let welcomeTop = Number(welcome.style.top.substr(0,4));
    if(welcomeTop > welcome.clientHeight){
        welcome.style.display = 'none';
    }else{
        welcome.style.display = 'block';
    }*/

    shape1.style.top = -value*1.5+'px';
    let shape1Top = Number(shape1.style.top.substr(0,4));
    if(shape1Top < window.clientHeight){
        shape1.style.display = 'none';
    }else{
        shape1.style.display = 'block';
    }

    shape2.style.top = -value*0.5+'px';
    let shape2Top = Number(shape2.style.top.substr(0,4));
    if(shape2Top < window.clientHeight){
        shape2.style.display = 'none';
    }else{
        shape2.style.display = 'block';
    }

    shape3.style.top = value*2+'px';
    let shape3Top = Number(shape3.style.top.substr(0,4));
    if(shape3Top > shape3.clientHeight){
        shape3.style.display = 'none';
    }else{
        shape3.style.display = 'block';
    }

    shape4.style.left = -value*2+'px';

    shape5.style.top = -value*2+'px';
    let shape5Top = Number(shape5.style.top.substr(0,4));
    if(shape5Top > shape5.clientHeight){
        shape5.style.display = 'none';
    }else{
        shape5.style.display = 'block';
    }
});