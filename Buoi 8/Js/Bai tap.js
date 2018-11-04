function hinh1(){
			for (var i = 0; i <= 7; i++) {
    			for (var j = 0; j < i; j++) {
      				document.write("*");
    			}
    		document.write('<br/>')
  			}
		}
		function hinh2(){
			for (var i = 0; i<7; i++){
				for (var j =0; j<7;j++){
					document.write("*");
				}
			document.write('<br>')
			}
		}
		function hinh3(){
			for( var i=1; i<=7; i++){
				for (var j=1; j<=7; j++){
					if (i ==1 || j==1 || i==7 || j==7) {
						document.write("*");
					}
					else{
						document.write('&nbsp;&nbsp;');
					}
				}
			document.write('<br>');
			}
		}
		function hinh4(){
  			for(var i=7;i>=1;i--){
    			for(var j=1;j<=i;j++){
     				document.write("*");
    			}
     			document.write('<br>');
   			}
		}
		function bai2(){
			var tong10sochan = 0;
			for(var i =0;i<=10;i++){
				tong10sochan +=i*2;
			}
			document.write('Tổng 10 số chắn đầu tiên là:' + tong10sochan);
		}
		function bai3(){
			// Biến tính tổng
    		var tong = 0;
 
    		// Lấy giá trị
    		var n = parseInt(prompt("Nhập số cần tính"));
 
    		// Kiểm tra giá trị
    		if (n <= 0){
        		alert("Bạn phải nhập số lớn hơn 0");
    		}
    		else{
        		// Tính toán
        		for (var i = 1; i <= n; i++){
            		tong += (1/i);
        		}
        	document.write("Tổng giá trị biểu thức là: " + tong);
    		}
		}
		function bai4(){
			var n = parseInt(prompt("enter N"));
			var m = parseInt(prompt("enter M"));
			var k = parseInt(prompt("enter K"));
			var x=0;
			var tong=0;
			for (x>=n; x<= m; x++){ //Điều kiện n<=x<=m
				if(x % k == 0){
				tong += x;
				}
			}		
			document.write(" Tổng các số chia hết cho " + k +  " từ " + n + " tới " + m + " là: " + tong + " <br/>");
		}
		function bai5(){
			var n = parseInt(prompt("Nhập n:"));
			var gt = 1;
			var tong = 0;
			if (n <= 0){
        		alert("Bạn phải nhập số lớn hơn 0");
    		}
    		else{
    			for(var i=1; i<=n; i++){
            		gt=gt*i;
            		tong=tong+i/gt;
      			}
    		}
    		document.write("Tổng giá trị biểu thức là: " + tong);
		}
		function bai6(){
			var tong =0;
			var n = parseInt(prompt("Nhập số cần tính"));
			if (n <= 0){
        		alert("Bạn phải nhập số lớn hơn 0");
    		}
    		else{
        		for (var i = 1; i <= n; i++){
            		tong += (i);
        		}
        	document.write("Tổng giá trị biểu thức là: " + tong);
    		}
		}
		function bai7(){
			var n = parseInt(prompt("Nhập số cần tính"));
            for (var i = 0; i <= n; i++){
                if (i % 3 == 0 || i % 7 == 0){
                    document.write( i + '&nbsp;' +'<br>');
                }
            }
		}