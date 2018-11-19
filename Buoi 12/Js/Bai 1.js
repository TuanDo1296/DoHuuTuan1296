var index = 1;

$(function () {
	$('.next').on('click',function() {
		switch (index) {
			case 1:
				if (checkTab1()) {
					NextTab(1)
					$('')
				}
				break;
			case 2:
				if (checkTab2()) {
					if ($('#age').val() > 17) {
						$('#ib2').hide(200);
						$('#tab2').removeClass('tabactive').addClass('tabfinish')
						$('#tab3').removeClass('tabactive')
						NextTab(3)
					} else {
						NextTab(2)
					}
				}
				break;
		}
	})
	$('.prev').on('click',function() {
		event.preventDefault();
		switch (index) {
			case 1:
				break;
			case 2:
				PreviousTab(2);
				break; 
			case 3:
				PreviousTab(3);
				$('#tab3').removeClass('tabfinish')
				break;
			case 4:
				PreviousTab(3);
				$('#ib4').hide(200);
				$('#tab4').removeClass('tabactive');
				$('#tab3').removeClass('tabfinish')
				break;
		}
	})
	$('#finish').on('click',function() {
		if ($('#check').prop('checked')) {
			alert('Thành Công')
			$('#check_error').html('')
		} else {
			$('#check_error').html('Vui lòng tích vào')
		}
	})
	$('#check').on('change',function() { 
		if ($('#check').prop('checked')) {
			$('#check_error').html('')
		} else {
			$('#check_error').html('Vui lòng tích vào')
		}
	})

})

function checkTab1(){
	event.preventDefault();
	var username    = $.trim($('#userName').val());
	var password    = $.trim($('#password').val());
	var confirm     = $.trim($('#confirm').val());
	var flag = true;

	//UserName
	if(username == ''){
		$('#username_error').text('Tên đăng nhập không được để trống');
		flag = false;
	}
	else if (username.length < 8){
        $('#username_error').text('Tên đăng nhập phải lớn hơn 8 ký tự');
        flag = false;
    }
    else{
        $('#username_error').text('');
    }

    //Password
    if(password == ''){
		$('#password_error').text('Mật khẩu không được để trống');
		flag = false;
	}
    else if (password.length < 6){
        $('#password_error').text('Mật khẩu phải lớn hơn 8 ký tự');
        flag = false;
    }
    else{
        $('#password_error').text('');
    }

    //Confirm password
    if (password != confirm){
        $('#cfpassword_error').text('Xác nhận mật khẩu không khớp');
        flag = false;
    }
    else{
        $('#cfpassword_error').text('');
    }

	if (flag){	
		return true;
	}
	else{
		return false;
	}
}

function checkTab2(){
	event.preventDefault();
	var firstname    = $.trim($('#name').val());
	var surname    = $.trim($('#surname').val());
	var email     = $.trim($('#email').val());
	var address    = $.trim($('#address').val());
	var age    = $.trim($('#age').val());
	var flag = true;
	//Firstname
	if(firstname == ''){
		$('#firstname_error').text('Tên không được để trống');
		flag = false;
	}
	else if (firstname.length < 2){
        $('#firstname_error').text('Tên lớn hơn 2 ký tự');
        flag = false;
    }
    else{
        $('#firstname_error').text('');
    }

    //Surname
    if(surname == ''){
		$('#surname_error').text('Họ đệm không được để trống');
		flag = false;
	}
    else if (surname.length < 2){
        $('#surname_error').text('Họ đệm phải lớn hơn 3 ký tự');
        flag = false;
    }
    else{
        $('#surname_error').text('');
    }

    //Emai;
    if (email == ''){
        $('#email_error').text('Email không được để trống');
        flag = false;
    }
    else if (!validateEmail(email)){
		$('#email_error').text('Chưa đúng định dạng mail');
        flag = false;
	}
    else{
        $('#email_error').text('');
    }
    //Tuổi
    if(age == ''){
		$('#age_error').text('Tuổi không được để trống');
		flag = false;
	}
    else{
        $('#age_error').text('');
    }

	if (flag){
		return true;
	}
	else{
		return false
	}
}

function NextTab(e) {
	$('#ib'+e).hide(200);
	$('#ib'+(e+1)).show(500)
	$('#tab'+(e+1)).addClass('tabactive');
	$('#tab'+e).removeClass('tabactive').addClass('tabfinish');
	index = e+1
}

function PreviousTab(e) {
	$('#ib'+e).hide(200);
	$('#ib'+(e-1)).show(500)
	$('#tab'+e).removeClass('tabactive');
	$('#tab'+(e-1)).addClass('tabactive').removeClass('tabfinish');
	index = e-1;
}

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
