//modal _style_popup J-Query code

$(document).ready(function(){

    function popup(openBtn, popup){
        $(openBtn).click(function(){
            $(popup).addClass('block');
        });
    }
    
    function closePopup(closebtn){
        $(closebtn).click(function(){
            $(this).closest('.popup').removeClass('block');
        });
    }
    popup('.btn','.popup');
    closePopup('.close, .dim');

});