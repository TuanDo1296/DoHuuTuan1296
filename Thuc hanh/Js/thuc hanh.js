function clickme(){
	alert('Ahihihi')
}
function clickme2(){
	if(confirm('Ahaha')){
		window.location.href="https://google.com";
	}
}
function clickme3(){
	var age =prompt('Input your age')
	alert('Tuoi cua ban la: ' + age)
}
function clickme4(){
	var a = prompt('Nhap vao a:')
	var b = prompt('Nhap vao b:')
	alert(parseInt(a) + parseInt(b))
	document.write(parseInt(a) + parseInt(b))
}
function clickme5(){
	document.getElementById('name').style.color="red"
	document.getElementById('name').style.fontSize="40px"
}
function clickme6(){
	var a = document.getElementsByClassName('text')

	for (var i = a.length - 1; i>=0 ; i--) {
		a[i].style.color="red"
	}
}