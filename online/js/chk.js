// JavaScript Document
var len = document.getElementsByName("i");
var pos = 0;
function changeimage(){
	len[pos].style.display = "none";
	pos++;
	if(pos == len.length) pos=0;
	len[pos].style.display = "block";
}
setInterval("changeimage()",3000);
function addclass(id){
	document.getElementById(id).className = 'nav_cur';
}
function removeclass(id){
	document.getElementById(id).className = 'd';
}