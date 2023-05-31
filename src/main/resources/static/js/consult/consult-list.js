// 등록하기 이동 버튼

let $registerButton = $('.register-move-button');

// 목록 컨테이너 안에 ul 태그
let $ul = $('.board-main ul');
console.log($ul);
let text = '';

// 등록하기폼으로 이동하기 버튼
$registerButton.on("click", function () {
    if (session == null) {
        showWarnModal("<span>로그인 후</span><span>이용해주세요.</span>");
        $('.modal').on("click", () => {
            location.href = '/accounts/login?location=/consults/register';
        })
    } else {
        location.href = '/consults/register';
    }
})

if (consults.length == 0) {
    console.log("들어옴");
    text = `
      <div class="css-1lo9184">검색된 정보가 없습니다.</div>
      `
}


// 상담 목록 뿌리기
consults.forEach(consult => {
    console.log(consult);


    text += `
                     <li>                   
              <a class="article " href="/consults/detail?id=${consult.id}">
                <em class="category">카테고리</em>
              <em class="status closed">${consult.consultingCategory}</em>
                    <div class="info">
                    <div class="answer-status" style="color: #868e96" >상세 보기</div>
                       <h3 class="title">[${consult.consultingCategory}] ${consult.consultingTitle} </h3>
                        <span class="author">${consult.memberNickname}</span><span class="created-at">${consult.consultingRegisterDate.split(" ")[0]}</span>
                      </div>
                    </a>
                  </li>
        `

})


$ul.html(text);


//페이징
$("a.change-page").on("click", function (e) {
    e.preventDefault();
    let page = $(this).attr("href");
    let keyword = $('.search-input').val();
    location.href = `/consults/list?page=${page}&keyword=${keyword}`
});