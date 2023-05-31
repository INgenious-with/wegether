const $input = $('input[type=password]');
const $button=$('#submitButton');
const $modalBack=$(".modalBack");

$input.on('focus', function () {
    $(this).css('border', '1px solid #50e3c2');
});
$input.on('blur', function () {
    $(this).css('border', '1px solid #e4e4e4');
});




$button.on('click', function() {
    console.log("버튼 누름");
    $.ajax({
        url:"comparePW",
        success:function (data) {
            console.log("ajax 들어옴")
            console.log(data);
            if(data==$input.val()){
                console.log("비밀번호 맞음");
                location.href="/mypage/setting/setting-password";
                $button.submit();

            }

            else{
                console.log("비번 달라");
                $modalBack.show();
                $(".modal").show();
            }
        }


    })


})


$(".alertify-o-button-ok").on("click", function(){
    $modalBack.hide();
    $(".modal").hide();

    $input.value=null;


})