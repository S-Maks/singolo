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
let themeButton = document.querySelector('.vertical-circle');
themeButton.onclick = function(){
    if(document.querySelector('.vertical-blackRect').classList.length==2)
    document.querySelector('.vertical-blackRect').classList.remove('display-of-iphones');
else document.querySelector('.vertical-blackRect').classList.add('display-of-iphones');

}
