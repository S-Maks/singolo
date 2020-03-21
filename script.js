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

let page = document.querySelector('.list-img');
let themeButton = document.querySelector('.list-img');
themeButton.onclick = function() {
    page.classList.toggle('border-off');
  page.classList.toggle('border-img');
};

let page1 = document.querySelector('.list1-img');
let themeButton1 = document.querySelector('.list1-img');
themeButton1.onclick = function() {
    page1.classList.toggle('border-off');
  page1.classList.toggle('border-img');
};

let page2 = document.querySelector('.list2-img');
let themeButton2 = document.querySelector('.list2-img');
themeButton2.onclick = function() {
    page2.classList.toggle('border-off');
  page2.classList.toggle('border-img');
};
let page3 = document.querySelector('.list3-img');
let themeButton3 = document.querySelector('.list3-img');
themeButton3.onclick = function() {
    page3.classList.toggle('border-off');
  page3.classList.toggle('border-img');
};
let page4 = document.querySelector('.list4-img');
let themeButton4 = document.querySelector('.list4-img');
themeButton4.onclick = function() {
    page4.classList.toggle('border-off');
    page4.classList.toggle('border-img');
};
let page5 = document.querySelector('.list5-img');
let themeButton5 = document.querySelector('.list5-img');
themeButton5.onclick = function() {
    page5.classList.toggle('border-off');
    page5.classList.toggle('border-img');
};
let page6 = document.querySelector('.list6-img');
let themeButton6 = document.querySelector('.list6-img');
themeButton6.onclick = function() {
    page6.classList.toggle('border-off');
    page6.classList.toggle('border-img');
};

let page7 = document.querySelector('.list7-img');
let themeButton7 = document.querySelector('.list7-img');
themeButton7.onclick = function() {
    page7.classList.toggle('border-off');
    page7.classList.toggle('border-img');
};

let page8 = document.querySelector('.list8-img');
let themeButton8 = document.querySelector('.list8-img');
themeButton8.onclick = function() {
    page8.classList.toggle('border-off');
    page8.classList.toggle('border-img');
};

let page9 = document.querySelector('.list9-img');
let themeButton9 = document.querySelector('.list9-img');
themeButton9.onclick = function() {
    page9.classList.toggle('border-off');
    page9.classList.toggle('border-img');
};

let page10 = document.querySelector('.list10-img');
let themeButton10 = document.querySelector('.list10-img');
themeButton10.onclick = function() {
    page10.classList.toggle('border-off');
    page10.classList.toggle('border-img');
};
let page11 = document.querySelector('.list11-img');
let themeButton11 = document.querySelector('.list11-img');
themeButton11.onclick = function() {
    page11.classList.toggle('border-off');
    page11.classList.toggle('border-img');
};
