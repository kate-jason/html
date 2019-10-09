

// 누를 팝업 버튼, 열릴 팝업
function popup(openBtn, popup){
    $(openBtn).click(function(){
        $(popup).addClass('block');
    })
}

function closePopup(closebtn){
    $(closebtn).click(function(){
        $(this).closest('.modal').removeClass('block');
    })
}

popup('.popup-btn', '.modal');
closePopup('close');

