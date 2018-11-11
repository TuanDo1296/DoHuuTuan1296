document.getElementById('add').addEventListener('click',function(e){
			e.preventDefault();
			var name =document.getElementById('name');
			var email =document.getElementById('email');
			var password =document.getElementById('password');
			var mobile =document.getElementById('mobile');
			var cfpassword =document.getElementById('cfpassword');
			function validateEmail(email) {
    		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		return re.test(String(email).toLowerCase());
			}
			function validatePhoneNumber(mobile) {
			    var flag = false;

			    mobile = mobile.replace('(+84)', '0');
			    mobile = mobile.replace('+84', '0');
			    mobile = mobile.replace('0084', '0');
			    mobile = mobile.replace(/ /g, '');
			    if (mobile != '') {
			        var firstNumber = mobile.substring(0, 2);

			        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '07' || firstNumber == '06' || firstNumber == '04'  || firstNumber == '03' || firstNumber == '05' || firstNumber == '02') && mobile.length == 10) {
			            if (mobile.match(/^\d{10}/)) {
			                flag = true;
			            }
			        }
			    }
			    return flag;
			}
			/////
			if(name.value.trim()==""){
				document.getElementById('errorname').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mời bạn nhập tên';
			}
			else if(name.value.length < 8){
				document.getElementById('errorname').innerHTML ='<i class="fas fa-exclamation-circle"></i> Họ tên phải có ít nhất 8 kí tự';
			}
			else{
				document.getElementById('errorname').innerHTML ='';
			}
			/////
			if (!document.getElementById("male").checked && !document.getElementById("female").checked){
				document.getElementById('errorgender').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mời bạn chọn giới tính';
			}
			else{
				document.getElementById('errorgender').innerHTML ='';
			}
			/////
			if(email.value.trim()==""){
				document.getElementById('erroremail').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mời bạn nhập email';
			}
			else if(!validateEmail(email.value)){
				document.getElementById('erroremail').innerHTML ='<i class="fas fa-exclamation-circle"></i> Email phải có định dạng ***@*mail.***';
			}
			else{
				document.getElementById('erroremail').innerHTML ='';
			}
			/////
			if(password.value.trim()==""){
				document.getElementById('errorpassword').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mời bạn nhập Mật khẩu';
			}
			else if(password.value.length < 6){
				document.getElementById('errorpassword').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mật khẩu phải có ít nhất 6 kí tự';
			}
			else{
				document.getElementById('errorpassword').innerHTML ='';
			}
			/////
			if(cfpassword.value != password.value){
				document.getElementById('errorcfpassword').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mật khẩu phải giống nhau';
			}
			else{
				document.getElementById('errorcfpassword').innerHTML ='';
			}
			/////
			if(mobile.value.trim()==""){
				document.getElementById('errormobile').innerHTML ='<i class="fas fa-exclamation-circle"></i> Mời bạn nhập SĐT';
			}
			else if(!validatePhoneNumber(mobile.value)){
				document.getElementById('errormobile').innerHTML ='<i class="fas fa-exclamation-circle"></i> Số điện thoại không đúng';
			}
			else{
				document.getElementById('errormobile').innerHTML ='';
			}
		})
