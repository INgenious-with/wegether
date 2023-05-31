$(document).ready(function() {
    let text = "";
    searchproject.forEach(project => {
        text += `
                    <div class="preview">
                        <a href="/project/detail?id=${project.id}">
                `
        project.files.forEach(file => {
            if (file.fileType == "REPRESENTATIVE") {
                text += `<img style="height:300px" src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
            }
        })
        text += `
                            <p class="PreOrderCard_projectCard_title__psAv4">
                                            <!-- 제목 -->
                                <strong>${project.projectTitle}</strong>
                                            <!-- 학과 -->
                            <small class="PreOrderCard_projectCard_subInfo__vbiVf">
                                <span>${project.projectMajor}</span>
                            </small>
                            </p>
                            </a>
                    </div>
                `
    });
    $("#project-search").html(text);

    $(".preview").css({
        "width": "30%",
        "height": "100%",
        "margin-bottom": "50px",
        "margin-right" : "30px"

    });

    searchdata.forEach(data => {
        text += `
                    <div class="preview">
                        <a href=""></a>
                `
        data.files.forEach(file => {
            if (file.fileType == "REPRESENTATIVE") {
                text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
            }
        })
        text += `
                            <p class="PreOrderCard_projectCard_title__psAv4">
                                <strong>${data.dataTitle}</strong>
                            <small class="PreOrderCard_projectCard_subInfo__vbiVf">
                                <span>${data.dataMajor}</span>
                            </small>
                            </p>
                    </div>
                `
    });
    $("#data-search").html(text);

    $(".preview").css({
        "width": "30%",
        "height": "100px",
        "margin-bottom": "50px"
    });
    // });

});

//
// let page =   1;
// let keyword = $("#keyword").val();
// let searchService = (function(){
//     function getSearchProjectList(callback){
//         console.log(callback);
//         console.log("들어옴")
//         $.ajax({
//             url: "/index/search-project-list",
//             type:"POST",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify({page: page, keyword: keyword}),
//             success: function(searchproject){
//                 if(callback){
//                     callback(searchproject)
//                     console.log("나감")
//                 }
//             }
//         })
//     }
//     function getSearchDataList(callback){
//         $.ajax({
//             url: `/index/search-data-list`,
//             type:"POST",
//             contentType: `application/json; charset=utf-8`,
//             data: JSON.stringify({page: page}),
//             success: function(searchdata){
//                 if(callback){
//                     callback(searchdata)
//                 }
//             }
//         })
//     }
//
//     return {getSearchProjectList: getSearchProjectList, getSearchDataList: getSearchDataList};
//     })();
//
//
//
//
//
// // 전체 클릭시
// $("#all-btn").on("click", function(){
//     searchService.getSearchProjectList(function(searches){/*화면에 뿌리기*/
//         let text = "";
//         searches.forEach(search => {
//             text += `
//                     <div class="preview">
//                         <a href=""></a>
//                 `
//             search.files.forEach(file => {
//                 if (file.fileType == "REPRESENTATIVE") {
//                     text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
//                 }
//             })
//             text += `
//                             <p class="PreOrderCard_projectCard_title__psAv4">
//                                             <!-- 제목 -->
//                                 <strong>${search.projectTitle}</strong>
//                                             <!-- 학과 -->
//                             <small class="PreOrderCard_projectCard_subInfo__vbiVf">
//                                 <span>${search.projectMajor}</span>
//                             </small>
//                             </p>
//                     </div>
//                 `
//         });
//         $("#project-search").append(text);
//
//         $(".preview").css({
//             "width": "30%",
//             "height": "100px",
//             "margin-bottom": "50px"
//
//         });
//
//
//     })
//     searchService.getSearchDataList(function(searches){/*화면에 뿌리기*/
//         let text = "";
//         searches.forEach(search => {
//             text += `
//                     <div class="preview">
//                         <a href=""></a>
//                 `
//             search.files.forEach(file => {
//                 if (file.fileType == "REPRESENTATIVE") {
//                     text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
//                 }
//             })
//             text += `
//                             <p class="PreOrderCard_projectCard_title__psAv4">
//                                 <strong>${search.dataTitle}</strong>
//                             <small class="PreOrderCard_projectCard_subInfo__vbiVf">
//                                 <span>${search.dataMajor}</span>
//                             </small>
//                             </p>
//                     </div>
//                 `
//         });
//         $("#data-search").append(text);
//
//         $(".preview").css({
//             "width": "30%",
//             "height": "100px",
//             "margin-bottom": "50px"
//         });
//         // });
//
//     })
// });
//
// // 프로젝트 클릭시
// $("#project-btn").on("click", function(){
//     console.log("들어옴2")
//     searchService.getSearchProjectList(function(searchproject){/*화면에 뿌리기*/
//         console.log("들어옴3")
//
//         let text = "";
//         searchproject.forEach(search => {
//             console.log("들어옴4")
//
//             text += `
//                     <div class="preview">
//                         <a href=""></a>
//                 `
//             search.files.forEach(file => {
//                 if (file.fileType == "REPRESENTATIVE") {
//                     text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
//                 }
//             })
//             text += `
//                             <p class="PreOrderCard_projectCard_title__psAv4">
//                                             <!-- 제목 -->
//                                 <strong>${search.projectTitle}</strong>
//                                             <!-- 학과 -->
//                             <small class="PreOrderCard_projectCard_subInfo__vbiVf">
//                                 <span>${search.projectMajor}</span>
//                             </small>
//                             </p>
//                     </div>
//                 `
//         });
//         $("#project-search").append(text);
//
//         $(".preview").css({
//             "width": "30%",
//             "height": "100px",
//             "margin-bottom": "50px"
//
//         });
//
//
//
//     })
// })
//
//
// // 자료 클릭시
// $("#data-btn").on("click", function(){
//     searchService.getSearchDataList(function(searches){/*화면에 뿌리기*/
//         let text = "";
//         searches.forEach(search => {
//             text += `
//                     <div class="preview">
//                         <a href=""></a>
//                 `
//             search.files.forEach(file => {
//                 if (file.fileType == "REPRESENTATIVE") {
//                     text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
//                 }
//             })
//             text += `
//                             <p class="PreOrderCard_projectCard_title__psAv4">
//                                 <strong>${search.dataTitle}</strong>
//                             <small class="PreOrderCard_projectCard_subInfo__vbiVf">
//                                 <span>${search.dataMajor}</span>
//                             </small>
//                             </p>
//                     </div>
//                 `
//         });
//         $("#data-search").append(text);
//
//         $(".preview").css({
//             "width": "30%",
//             "height": "100px",
//             "margin-bottom": "50px"
//         });
//         // });
//     })
//
// });


// searchService.goToSearchData(showList);

// function showList(searches) {
//     // $(document).ready(function () {
//     // const $searchtest = $("#data-search");
//     let text = "";
//     searches.forEach(search => {
//         text += `
//                     <div class="preview">
//                         <a href=""></a>
//                 `
//         search.files.forEach(file => {
//             if (file.fileType == "REPRESENTATIVE") {
//                 text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
//             }
//         })
//         text += `
//                             <p class="PreOrderCard_projectCard_title__psAv4">
//                                 <strong>${search.dataTitle}</strong>
//                             <small class="PreOrderCard_projectCard_subInfo__vbiVf">
//                                 <span>${search.dataMajor}</span>
//                             </small>
//                             </p>
//                     </div>
//                 `
//     });
//     $("#data-search").html(text);
//
//     $(".preview").css({
//         "width": "30%",
//         "height": "100px",
//         "margin-bottom": "50px"
//     });
//     // });
// };

// let searchProject = (function(){
//     function goToSearchProject(callback){
//         $.ajax({
//             url: "/index/search-list",
//             success: function(projects){
//                 if(callback){
//                     callback(projects)
//                 }
//             }
//         })
//     }
//     return {goToSearchProject: goToSearchProject};
// })();
// searchProject.goToSearchProject(function(projects) {
//     console.log(projects);
// });
//
// searchProject.goToSearchProject(getList)
//
// function getList(projects) {
//     console.log("들어옴")
//     const $psearch = $("#project-search");
//     let text = "";
//     projects.forEach(search => {
//         text += `
//                     <div class="preview">
//                         <a href=""></a>
//                 `
//         search.files.forEach(file => {
//             if (file.fileType == "REPRESENTATIVE") {
//                 text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}">`;
//             }
//         })
//         text += `
//                             <p class="PreOrderCard_projectCard_title__psAv4">
//                                             <!-- 제목 -->
//                                 <strong>${search.projectTitle}</strong>
//                                             <!-- 학과 -->
//                             <small class="PreOrderCard_projectCard_subInfo__vbiVf">
//                                 <span>${search.projectMajor}</span>
//                             </small>
//                             </p>
//                     </div>
//                 `
//     });
//     $psearch.html(text);
//
//     $(".preview").css({
//         "width": "30%",
//         "height": "100px",
//         "margin-bottom": "50px"
//
//     });
// }
// };

