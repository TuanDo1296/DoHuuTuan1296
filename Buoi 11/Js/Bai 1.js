$('#add').on('click',function(){
      var text = $('#input').val();
      var abc =`<tr>
                  <td class="check"></td>
                  <td class="text">`+ text +`</td>
                  <td class="del"><i class="fas fa-times"></i></td>
                </tr>`
      if(text==''){
        alert('Vui lòng nhập dữ liệu');
      }
      else{
        $('#input').val('');
        $('#content').append(abc);
      }
    });
    $('#content').on('click','.text', function(){
      var index = $(this);
      if(index.prev().html() ==''){
        index.css('text-decoration' , 'line-through');
        index.prev().html('<i class="fas fa-check"></i>');
        $(index).parent().css('background','#eeeeee')
      }
      else{
        index.css('text-decoration' , 'none');
        index.prev().html('');
        $(index).parent().css('background','')
      }
    });

    $('#content').on('click','.check', function(){
      var index = $(this);
        if (index.html() == '') {
        index.next().css('text-decoration','line-through');
        index.html('<i class="fas fa-check"></i>');
        $(index).parent().css('background','rgba(179, 179, 179, 1)');
      } else {
        index.next().css('text-decoration','none');
        index.html('');
        $(index).parent().css('background','#efeeee');
      }
    });
    
    $('#content').on('click','.del', function(){
      var index = $(this);
      $(index).parent().remove();
    });