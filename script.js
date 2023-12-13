function showSidebar() {
  const side = document.querySelector(".sidebar");
  side.style.display = "flex";
}
function closeSlidebar() {
  const side = document.querySelector(".sidebar");
  side.style.display = "none";
}
var div1=document.getElementsByClassName('hero')[0];
var img1=document.getElementsById('game-img1');
div1.addEventListener('mouseover',function(){changeImg(true);});
div1.addEventListener('mouseout', function(){changeImg(false);});
function changeImg(isHovered){
  if(isHovered){
    img1.src='images/teen1.png';
  }else{
    img1.src='images/game.jpg';
  }
}