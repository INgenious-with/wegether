
$(function () {

    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        };
    }, true);

//  체크박스 유효성 검사
    const payButton = $("#payButton");
    const chkList = $('input[type=checkbox]');
    const agreeAll = $("#checkAll");
    const privacyTerms = $("#privacyTerms");
    const serviceTerms = $("#serviceTerms");
    const chk = $(".checkBox");

    let usePoint;
    let memberPoint = Number(`${memberId.memberPoint}`);
    let dataPrice = Number(`${dataDTO.dataPrice}`);

    let chkboxCheck = false;
    let pointCheck = false;

    //  버튼 초기화
    payButton.attr('disabled', true);
    //  input 초기화
    $("#payPointUse").val("");

    //  적립 포인트
    // "${(int)(dataDTO.dataPrice * 0.1)}"
    $("#getHistory").val(parseInt(dataDTO.dataPrice * 0.1));


    // checkbox => agreeAll
    agreeAll.click(function () {
        if ($(this).is(':checked')) {
            chk.prop('checked', true);
            chkboxCheck = true;
            console.log(chkboxCheck);
        } else {
            chk.prop('checked', false);
            chkboxCheck = false;
        }
        flagCheck();
    });

    // check list => All
    chk.click(function () {
        if ($('.checkBox:checked').length >= $('.checkBox').length) {
            agreeAll.prop('checked', true);
            chkboxCheck = true;
            console.log(chkboxCheck);
        } else {
            agreeAll.prop('checked', false);
            chkboxCheck = false;
        }
        flagCheck();
    });


//     point check
    //  point input
    $("#payPointUse").blur(function () {
        usePoint= Number($("#payPointUse").val());
        pointError();

        // point text 바꾸기
        $(".pointUse span").text(usePoint);
        // 최종 금액 (자료금액 - 포인트)
        Number($(".total_price .total").text(dataPrice - usePoint));

    });

    // point error
    function pointError(){
        console.log("usePoint : " + typeof usePoint + " : " + usePoint);
        console.log("memberPoint : " + typeof  memberPoint + " : " + memberPoint);
        console.log("dataPrice : " + typeof dataPrice + " : " + dataPrice);
        console.log("(usePoint > memberPoint : " + usePoint > memberPoint);

        // point 쓸 수 있는 금액 한도
        if (usePoint > memberPoint) {
            showWarnModal("<span>사용 가능 포인트보다 많습니다</span>");
            pointCheck = false;
            $("#payPointUse").val("");
            flagCheck();
        } else if (usePoint > dataPrice){
            showWarnModal("<span>자료 금액보다 많습니다</span>");
            pointCheck = false;
            $("#payPointUse").val("");
            flagCheck();
        } else {
            pointCheck = true;
            flagCheck();
        }
    }



    // flag check
    function flagCheck() {
        if (chkboxCheck && pointCheck) {
            console.log('gogo');
            payButton.attr('disabled', false);
        } else {
            console.log("nono");
            payButton.attr('disabled', true);
        }
    };

    //  input placeHolder 숨기기
    // $("#payPointUse").click(function () {
    //     $(".select-menu__placeholder").hide();
    // });




}); //E



