$(document).ready(function() {
    var auto_slide = 0;
        var hover_pause = 0;
    var key_slide = 1;
    var auto_slide_seconds = 5000;
    $('#carousel_ul li.carousel:first').before($('#carousel_ul li.carousel:last'));
    if(auto_slide == 1){
        var timer = setInterval('slide("right")', auto_slide_seconds);
        $('#hidden_auto_slide_seconds').val(auto_slide_seconds);
    }
    if(hover_pause == 1){
        $('#carousel_ul').hover(function(){
            clearInterval(timer)
        },function(){
            timer = setInterval('slide("right")', auto_slide_seconds);
        });
    }
    if(key_slide == 1){
        $(document).bind('keypress', function(e) {
            if(e.keyCode==37){
                    slide('left');
            }else if(e.keyCode==39){
                    slide('right');
            }
        });
    }
  });
function slide(where){
    var item_width = $('#carousel_ul li.carousel').outerWidth() + 10;
    if(where == 'left'){
        var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;
    }else{
        var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;
    }
    $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
        if(where == 'left'){
            $('#carousel_ul li.carousel:first').before($('#carousel_ul li.carousel:last'));
        }else{
            $('#carousel_ul li.carousel:last').after($('#carousel_ul li.carousel:first'));
        }
        $('#carousel_ul').css({'left' : '-290px'});
    });
};