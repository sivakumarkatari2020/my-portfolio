//drop downs

let Accordions = document.getElementsByClassName('acc');

for(let i=0;i<Accordions.length;i++){
    Accordions[i].addEventListener('click',function(){
        let active_ele = document.getElementsByClassName('active');
        for(let j=0;j<active_ele.length;j++){
            active_ele[j].classList.toggle('active');
        }
        this.classList.toggle('active');
    })
}

