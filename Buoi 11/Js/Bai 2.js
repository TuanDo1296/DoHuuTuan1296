$("#container .content:not(:first)").hide(); //Ẩn các content trừ content đầu tiên.
		$(".header").click(function(){
		// // chọn .content (do phần tử .content đi ngay sau phần tử h3 nên ta dùng .next())
		// 	var content = $(this).next();
		// // Kiểm tra nếu đang ẩn thì sẽ hiện và ẩn các phần tử khác
		// // Nếu đang hiện thì click vào h3 sẽ ẩn
		// 	if (content.is(':hidden') === true) {
		// 		$("#container .content").slideUp();
		// 		content.slideDown();
		// 		$(this).css('color' , '#beee42');
		// 		$(this).children().toggleClass("fa-minus fa-plus");
		// 	} 
		// 	else {
		// 		content.slideUp();
		// 		// $(".header i").attr("class", "fas fa-plus");
		// 		$(this).css('color' , 'white');
		// 		$(this).children().toggleClass("fa-minus fa-plus");
		// 	}
			if($(this).next("div").is(":visible")){ //Điều kiện: nếu content nào hiện
		        $(this).next("div").slideUp(); //content tiếp theo sẽ slideup
		        $(this).css('color' , 'white');
		        $(this).children().toggleClass("fa-minus fa-plus"); //toggle giữa nút + và -
	      	} 
	      	else {
		        $(".header").next("div").slideUp();
		        $(".header i").attr("class", "fas fa-plus"); //Chuyển class fa-minus thành fa-plus
		        $(this).next("div").slideDown(); //content slidedown
		        $(this).css('color' , '#beee42');
		        $(this).children().toggleClass("fa-minus fa-plus"); //tpggle giữa + và -

	      	}
		});