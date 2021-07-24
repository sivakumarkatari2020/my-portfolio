//drop downs
let acc1 = document.getElementById("down1");
let acc2 = document.getElementById("down2");
let acc3 = document.getElementById("down3");
let acc4 = document.getElementById("down4");
let acc5 = document.getElementById("down5");
let acc6 = document.getElementById("down6");

let accordions = new Array(acc1,acc2,acc3,acc4,acc5,acc6);

function openAcc(e){
    let id = e.target.attributes.id.nodeValue;
    
    let acc = document.getElementById(id); 
    let para = document.getElementsByClassName(id);

    if(para[0].style.display == 'none'){
        para[0].style.display = 'block';
        acc.style.transform = "scale(0.7) rotate(-90deg)";
    }
    else{
        para[0].style.display = 'none';
        acc.style.transform = "scale(0.7) rotate(90deg)";
    }
}

function closeAcc(ele){
    console.log(ele);
    let acc = document.getElementById(ele);
    acc.style.transform = 'rotate(45deg) scale(0.7)';

    acc.toggleAttribute('onClick');
    acc.setAttribute('onClick','openAcc(e)');

    let para = document.getElementsByClassName(ele);
    para[0].style.display = 'none';
}