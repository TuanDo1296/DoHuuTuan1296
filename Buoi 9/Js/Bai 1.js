var min=50;
var max=500;
function zoominLetter() {
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("%",''));
		} else {
			var s = 100;
		}
		if(s!=max) {
			s += 40;
		}
		p[i].style.fontSize = s+"%"
	}
}
function zoomoutLetter() {
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("%",''));
		} else {
			var s = 100;
		}
		if(s!=min) {
			s -= 40;
		}
		p[i].style.fontSize = s+"%"
	}
}
function normal(){
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("%",''));
		} else {
			var s = 100;
		}
		if(s!=max) {
			s = 100;
		}
		p[i].style.fontSize = s+"%"
	}
}