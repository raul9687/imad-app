console.log('Loaded!');
//Changing the content
var div=document.getElementById('main');
div.innerHTML='Updated Content';
//Moving the image
var img=document.getElementById('image');
var temp=0;
function moveRight()
{
    temp=temp+5;
    img.style.marginLeft= temp + 'px';
}
img.onclick = function(){
    var interval=setInterval(moveRight,100);
};