let $container = $('.main-container');
let text = '';

lists.forEach(list => {
    text += `
 <div class="SchoolLectureListDesktop_schoolLecture__2EK3P" data-is-end="false">
 `
    list.files.forEach(file => {
        if (file.fileType == "REPRESENTATIVE") {
            text += `
            <span class="SchoolLectureListDesktop_background__2Kqf_ SchoolLectureListDesktop_visible__2lI79"
                
              ><img style="width=359px; height: 170px"
    width: 100px;" src="/lecture-files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" ></span><a href="/lectures/detail?id=${list.id}"><div class="SchoolLectureListDesktop_lectureCon__BhKMl">`
        }
    })


    text += `
                <p class="SchoolLectureListDesktop_lectureTitle__2wTDN">
                  ${list.lectureTitle}
                </p>
                <p></p>
                <p class="SchoolLectureListDesktop_lectureSub__3soFP">
                  <Wegether>
                </p>
                <p class="SchoolLectureListDesktop_lectureInfo__1dFY_">
                  일시 : ${list.lectureDate} <br> 강연 시간 : ${list.lectureTime} <br>장소 : ${list.lectureLocation} 
                </p>
                <p class="SchoolLectureListDesktop_lectureNum__oypsR">
                  <em>Wegether 강연</em> 모집 인원 ${list.lectureTotalPersonnel} 명
                </p>
              </div></a>
          </div>
    `
})

$container.html(text);

//페이징
$("a.change-page").on("click", function(e){
    e.preventDefault();
    let page = $(this).attr("href");
    location.href = `/consults/list?page=${page}`
});

$('.my-consult-list').on("click", function (e) {
    e.preventDefault();
    if(id ==null){
        showWarnModal("로그인 후 이용해주세요")
        $('.modal').on("click", function () {
            location.href=`/accounts/login?location=/mypage/my-page/my-consult-detail`;
        })
    }else{
        location.href=`/mypage/my-page/my-consult-detail`;
    }
})
