/*zoom image*/
window.onload=function(){
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
}