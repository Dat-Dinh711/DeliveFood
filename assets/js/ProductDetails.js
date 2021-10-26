/*zoom image*/
/*window.onload=function(){
const zoomImg=document.querySelector("#zoom");
zoomImg.addEventListener("mousemove", function(e){
    const screenImage = document.querySelector(".img-cover");
    const image = document.querySelector(".container__product-imglarger");
    image.style="width: auto; height:auto; max-height:unset";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    const screenWidth=screenImage.offsetWidth;
    const screenHeight=screenImage.screenHeight;
    const spaceX = (imageWidth/2-screenWidth)*2;
    const spaceY = (imageHeight/2-screenHeight)*2;
    imageWidth=imageWidth+spaceX;
    imageHeight=imageHeight+spaceY;

    let x=
        e.pageX - screenImage.offsetParent?.offsetLeft-screenImage.offsetLeft;
    let y = 
        e.pageY - screenImage.offsetParent?.offsetTop - screenImage.offsetTop;
    const positionX = (imageWidth/screenWidth/2)*x;
    const positionY = (imageHeight/screenHeight/2)*y;
    image.style= `left: ${-positionX}px; top: ${-positionY}px
    width: auto; height:auto; max-height:unset; transform:none;`;
});
}*/

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  /*var imgProduct=document.getElementsByClassName("screen-img");
  glass.addEventListener("mouseout",function(){
    glass.parentElement.parentElement.remove();
  });*/
  /*imgProduct.onmouseout = function(e) {
      Object.assign(glass.style, {
        backgroundPosition:0,
        backgroundSize: 100,
      });
      glass.style.backgroundSize=0;
  };*/


  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    /*e.preventDefault();*/
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {/*y = img.height - (h / zoom);*/ y=0;}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    
  }
  
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

/*So luong san pham */
/*Tang san pham */
const btnPlus=document.querySelector('.btn-plus');
const countProductPlus=document.querySelector('.quantity-btn-count');
btnPlus.addEventListener('click',function(){
  countProductPlus.value=parseInt(countProductPlus.value)+1;
},false);

/*Giam san pham */
const btnMinus=document.querySelector('.btn-minus');
const countProductMinus=document.querySelector('.quantity-btn-count');
btnMinus.addEventListener('click',function(){
  countProductMinus.value=parseInt(countProductMinus.value)-1;
  /*san pham khong dc <=0*/
  if (isNaN(countProductMinus.value) || countProductMinus.value <= 0) {
    countProductMinus.value = 1;
  }
},false);


// Slider for Recipe
const sliderProducts = document.querySelector('.container__product-img-list-items');
const sliderItems = document.querySelectorAll('.container__product-img-item');
const item=document.querySelector('.container__product-img-item');
const nextBtn = document.querySelector('.next-slick-next');
const prevBtn = document.querySelector('.next-slick-prev');

const sliderLength = sliderItems.length;
let positionX = 0;
let index = 0;

window.addEventListener('load', function() {
    prevBtn.style = 'display: none';
    item.style='boder: 1px solid #8ABF44';
});

nextBtn.addEventListener('click', function() {
    handleChangeSlide(1);
});

prevBtn.addEventListener('click', function() {
    handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
  if (direction == 1) {
    index++;
    if (index > (sliderLength / 1) - 1) {
      return;
    }

    if (index == (sliderLength / 1) - 1) {
      nextBtn.style = 'display: none';
    }
    
    if (index > 0) {
      prevBtn.style = 'display: flex; left:0; bottom: 38%;';
    }
    positionX = positionX - 80;
    sliderProducts.style = 'transform: translateX(' + positionX + 'px)';
  } else if (direction == -1) {
    index--;
    if (index < 0) {
      return;
    }
    if (index == 0) {
      prevBtn.style = 'display: none';
    }

    if (index < (sliderLength / 1) - 1) {
      nextBtn.style = 'display: flex; right:0; top: 40%;';
    }

    positionX = positionX + 80;
    sliderProducts.style = 'transform: translateX(' + positionX + 'px)';
  }
      
  console.log(index);
  
}

//Chon khoi luong san pham
//const select=document.getElementsByClassName("type-item");
/*select.addEventListener("click",selectProductType);
function selectProductType(e){
  //select.classList.add("type-item-active");
  select.style.backgroundColor='red';
}*/

/*var btnSelect = document.getElementsByClassName('type-item');
    btnSelect.onclick = function(){
        showMsg1();
    };
     
    function showMsg1(){
      btnSelect.style.color='red';
    }*/
    const btnSelect=document.querySelectorAll('.type-item');
    btnSelect.addEventListener('click',function(){
      btnSelect.style.color="red";
    },false);