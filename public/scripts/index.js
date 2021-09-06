//drop downs

let Accordions = document.getElementsByClassName('acc');

for(let i=0;i<Accordions.length;i++){
    Accordions[i].addEventListener('click',function(){
        let active_ele = document.getElementsByClassName('active');

        //function chkActive(cls){
        //    return cls === 'active';
        //}

        //for(let k=0;k<Accordions.classList.length;k++){
        //    if(Accordions[k].classList.find(chkActive)){
        //        console.log("I found it")
        //    }
        //}
        
        for(let j=0;j<active_ele.length;j++){
            active_ele[j].classList.toggle('active');
        }
        this.classList.toggle('active');
    })
}

let hamburger = document.getElementById("hamburger");
let navbar = document.getElementById("navigation");
let mobNav = document.getElementById("mobileNav");

hamburger.addEventListener('click',function openMenu(){
    this.classList.toggle('is-active');

    if(mobNav.style.minHeight == '0px' || mobNav.style.minHeight == 0){
        console.log("Open");
        mobNav.style.minHeight = '100vh';
    }
    else{
        console.log("close");
        mobNav.style.minHeight = 0;
    }
})

let mobLinks = document.getElementsByClassName("mob-a");

for(let i=0;i<mobLinks.length;i++){
    mobLinks[i].addEventListener('click',function(){
        hamburger.classList.toggle('is-active');

        if(mobNav.style.minHeight == '0px' || mobNav.style.minHeight == 0){
            console.log("Open");
            mobNav.style.minHeight = '100vh';
        }
        else{
            console.log("close");
            mobNav.style.minHeight = 0;
        }
    })
}