const anchors=document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockID= anchor.getAttribute('href');
        document.querySelector(''+ blockID).scrollIntoView(
            {behavior:'smooth', block: 'start'});
    })
}


//Phone animation
//Vertical
let Button__Vertical = document.querySelector('.vertical-circle');
Button__Vertical.onclick = function(){
    if(document.querySelector('.vertical-blackRect').classList.length==2)
    document.querySelector('.vertical-blackRect').classList.remove('display-of-iphones');
else document.querySelector('.vertical-blackRect').classList.add('display-of-iphones');
}

let Button1__Vertical = document.querySelector('.vertical-square');
Button1__Vertical.onclick = function(){
    if(document.querySelector('.vertical-blackRect').classList.length==2)
    document.querySelector('.vertical-blackRect').classList.remove('display-of-iphones');
else document.querySelector('.vertical-blackRect').classList.add('display-of-iphones');
}

//Horizontal
let Button__Horizontal = document.querySelector('.horizontal-circle');
Button__Horizontal.onclick = function(){
    if(document.querySelector('.horizontal-blackRect').classList.length==2)
    document.querySelector('.horizontal-blackRect').classList.remove('display-of-iphones');
else document.querySelector('.horizontal-blackRect').classList.add('display-of-iphones');
}

let Button1__Horizontal = document.querySelector('.horizontal-square');
Button1__Horizontal.onclick = function(){
    if(document.querySelector('.horizontal-blackRect').classList.length==2)
    document.querySelector('.horizontal-blackRect').classList.remove('display-of-iphones');
else document.querySelector('.horizontal-blackRect').classList.add('display-of-iphones');
}
