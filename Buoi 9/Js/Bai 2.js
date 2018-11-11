var div = document.getElementById('content');
// var checkbox =document.getElementsByTagName('input');
// var text =document.getElementsByTagName('p');
div.onmouseover = function(){
	div.getElementsByClassName("checkbox")[0].style.backgroundColor = 'green';
	div.getElementsByClassName("text")[0].style.backgroundColor = 'green';
}
div.onmouseout = function(){
	div.getElementsByClassName("checkbox")[0].style.backgroundColor = ' #5078e6';
	div.getElementsByClassName("text")[0].style.backgroundColor = ' #5078e6';
}
document.getElementById('checkall').addEventListener('click', function(){
	var cb = document.getElementsByClassName('checkbx');
	 for( var i =0 ; i<cb.length; i++){
	 	cb[i].checked= true;
	 }
})
document.getElementById('uncheckall').addEventListener('click', function(){
	var cb = document.getElementsByClassName('checkbx');
	 for( var i =0 ; i<cb.length; i++){
	 	cb[i].checked= false;
	 }
})

// function changecolor(){
// 	var x = document.getElementById('content').className = "checkbox";
// 	x.style.backgroundColor = 'green';
// }