var buttons = document.getElementsByClassName('button');//Gán tham số cho button
var contents = document.getElementsByClassName('content');//Gán tham số cho thẻ content
function showContent(id){//Khai báo hàm để hiển thị content
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';//Ẩn tất cả thẻ div chứa content
    }
    var content = document.getElementById(id);//Gán content theo id
    content.style.display = 'block';//Gọi thẻ div chứa content theo id đc truyền vào
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){ //Gọi sự kiện onclick cho các button
        var id = this.textContent; //Gán id theo giá trị text trong button
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active"); //Thay đổi class active khi button đc click
        }
        this.className += " active";
        showContent(id);//Hiển thị nội dung theo id
    });
}
showContent('Tab 1');//Hiển thị nội dung Tab 1 với id="Tab 1"