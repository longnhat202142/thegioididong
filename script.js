
const addressn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')



addressn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display ='flex'
})

addressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display ='none'
})


//          ----- Slider -------
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
let index = 0;
const imgNumber = document.querySelectorAll('.slider-content-left-top img')


rightbtn.addEventListener("click",() =>{
    index = index + 1;
    if (index > imgNumber.length-1)
    {
        index = 0;
    }
    removeactive()
    document.querySelector('.slider-content-left-top').style.right = index*100 +"%"
    imgNumli[index].classList.add("active")
})

leftbtn.addEventListener("click",() =>{
    index = index - 1;
    if (index < 0)
    {
        index = imgNumber.length-1;
    }
    removeactive()
    document.querySelector('.slider-content-left-top').style.right = index*100 +"%"
    imgNumli[index].classList.add("active")
})

//   ----- Slider 1 -----
const imgNumli = document.querySelectorAll('.slider-content-left-bottom li')

imgNumli.forEach(function(img,index){
    
    img.addEventListener("click", function(){
        removeactive()
        document.querySelector('.slider-content-left-top').style.right = index*100 +"%" 
        img.classList.add("active")
    })
})

function removeactive(){
    let imgActive  = document.querySelector('.active')
    imgActive.classList.remove("active")
}

//   ----- Slider 2 -----

function imgAuto (){
    index += 1;
    if (index > imgNumber.length-1)
    {
        index = 0;
    }
    removeactive()
    document.querySelector('.slider-content-left-top').style.right = index*100 +"%"
    imgNumli[index].classList.add("active")
}

setInterval(imgAuto,4000)


//   ----- Slider Product -----

const rightbtntwo = document.querySelector('.fa-chevron-right-two');
const leftbtntwo = document.querySelector('.fa-chevron-left-two');
const itemNum = document.querySelectorAll('.slider-product-one-content-items')

rightbtntwo.addEventListener("click",() =>{
    index = index + 1;
    if (index > itemNum.length-1)
    {
        index = 0;
    }
   
    document.querySelector('.slider-product-one-content-items-content').style.right = index*100 +"%"
    
})

leftbtntwo.addEventListener("click",() =>{
    index = index - 1;
    if (index < 0)
    {
        index = itemNum.length-1;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index*100 +"%"
 
})

//   ----------- SLider Gallery two ---------

const imgNumlitwo = document.querySelectorAll('.product-gallery-two-content-left-top li')

imgNumlitwo.forEach (function (img,index){
    img.addEventListener("click",() =>{
        removeactive();
        document.querySelector('.product-gallery-two-content-left-top li').style.backgroundColor ="#203E4E"+index;
    
        img.classList.add("active");
     
    })
})



