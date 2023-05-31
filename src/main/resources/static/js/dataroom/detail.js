$(document).ready(function () {
    document.title = "자료 | " + dataDTO.dataTitle;

    const $imageContainer = $("#image_container");
    const $textContainer = $("#text_container");
    const $contentContainer = $(".inner-contents");
    let image = "";
    let text = "";
    let content ="";


    console.log("dataDTO : " + dataDTO);
    console.log("id : " + id);

    dataDTO.files.forEach(file => {
        if(file.fileType == "REPRESENTATIVE") {
            image += `

                <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 626px;">
                   <div>
                      <div tabindex="-1" style="width: 100%; display: inline-block;">
                        <div class="StoreSlider_slickBackgroundImage__1CH4Y" 
                            style=" background-position: center;
                            background-image: url(/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName});">
                         </div>
                      </div>
                   </div>
                </div>`;
        }
    });

    $imageContainer.append(image);



    text += `

          <div class="DetailInfo_container__9Q8ap">
                <div class="DetailInfoHeader_container__2EKRL">
                    <h2 class="DetailInfoHeader_textBlind__2owz5">스토어 스토리 상세페이지</h2>
                    <div class="DetailInfoHeader_searchInfoWrapper__1R1Pn">
                        <div class="ProjectSearchTags_container__7YZNA">
                            <a href="#" style="cursor:default;"
                                class="ProjectSearchTags_category__3ofgG ProjectSearchTags_gaElement__1mZHZ"
                                data-ga-category="스토어(상세)_카테고리" data-ga-action="클릭" data-ga-label="대학교">
                                <span aria-label="카테고리">${dataDTO.dataSchool}</span>
                                <svg viewBox="0 0 40 40" focusable="false" role="presentation"
                                    class="withIcon_icon__3VTbq" aria-hidden="true"
                                    style="width: 18px; height: 18px;">
                                    <path d="M28 20L15 33l-1.4-1.4L25.2 20 13.6 8.4 15 7l13 13z"></path>
                                </svg>
                            </a>
                            <div class="ProjectSearchTags_hashTags__3v6i6">
                                <a data-ga-category="스토어(상세)_검색태그" data-ga-action="클릭"
                                    data-ga-label="학과" href="#" style="cursor:default;"
                                    class="Button_button__2FuOU Button_tertiaryGrey__3jJV7 Button_contained__2SIAT Button_xs__2DWsb Button_circular__1cdcJ ProjectSearchTags_hashTagButton__fCndq ProjectSearchTags_gaElement__1mZHZ">
                                    <span>
                                        <span class="Button_children__ilFun">
                                            <div class="ProjectSearchTags_hashTag__2UMo_">
                                                <span class="ProjectSearchTags_hash__IgbO9">#</span>
                                                <span>${dataDTO.dataMajor}</span>
                                            </div>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="DetailInfoHeader_titleInfo__2nx8Q">
                        <h3 class="DetailInfoHeader_title__i0kaY">${dataDTO.dataTitle}
                        </h3>
                    </div>
                    <div class="DetailInfoHeader_buyInfo__160ZZ">
                        <em class="DetailInfoHeader_price__2PVzf">
                            <span>${dataDTO.dataPrice}</span>
                            <span class="DetailInfoHeader_unit__2s2Vz">원</span>
                        </em>
                    </div>
                    <div
                        class="PopBanner_container__1N2VG PopBanner_isClose__2QjOM PopBanner_floating__qMuE3">
                        <div class="PopBanner_header__1Vi-y">
                            <button type="button" aria-label="배너 닫기">
                                <svg viewBox="0 0 40 40" focusable="false" role="presentation"
                                    class="withIcon_icon__3VTbq" aria-hidden="true"
                                    style="width: 16px; height: 16px;">
                                    <path
                                        d="M33.4 8L32 6.6l-12 12-12-12L6.6 8l12 12-12 12L8 33.4l12-12 12 12 1.4-1.4-12-12 12-12z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="ProductBuyInfo_container__1nPti undefined">
                    <div class="ProductFloatButton_container__2jWfi">
                        <div class="ProductFloatButton_wishButtonBox__236EH">
                            <button id="wishlist-btn" aria-label="찜하기 버튼" aria-pressed="false"
                                data-ga-category="스토어_상세" data-ga-action="찜하기_추가" data-ga-label=""
                                class="Button_button__2FuOU ProductFloatButton_wishButton__2uCyk"
                                type="button">
                                <span>
                                    <span class="Button_children__ilFun">
                                        <div>
                                            <svg viewBox="0 0 32 32" focusable="false"
                                                role="presentation" class="withIcon_icon__3VTbq"
                                                aria-hidden="true" style="width: 24px; height: 24px;">
                                                <path
                                                    d="M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085zm-5.28 21.84l-.88.8-.88-.8h-.08C8.4 19.76 4 15.84 4 11.44l-.001-.082A5.76 5.76 0 0 1 9.928 5.6a6.542 6.542 0 0 1 4.865 2.232l.486.567h1.52l.48-.56a6.548 6.548 0 0 1 4.877-2.24l.084-.001a5.76 5.76 0 0 1 5.76 5.76l-.001.085c0 4.396-4.4 8.316-11.12 14.396z">
                                                </path>
                                            </svg>
                                        </div>
                                    </span>
                                </span>
                            </button>
                        </div>
                        <a href="#" style="width: 100%;">
                            <button id="${dataDTO.id}" rel="noreferrer noopener"
                                class="Button_button__2FuOU Button_primary__2mZni Button_contained__2SIAT Button_xl__1FM1L ProductFloatButton_button__tpSGA payButton">
<!--                                type="button" -->
                                
                                <span>
                                    <span class="Button_children__ilFun">
                                        <span>구매하기</span>
                                    </span>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
                <div class="PrevFundingInfo_prevFundingInfo__16jzd"></div>
                <div class="StoreMakerInfoContainer_container__RjIvt">
                    <div class="StoreMakerInfoContainer_content__3nIZo">
                        <div class="StoreMakerInfoContainer_header__3F8ep">
                            <a class="MakerInfoHeader_link__29O6y StoreMakerInfoContainer_makerLink__UDmAv" style="cursor:default;"
                                href="#">
                                <div
                                    class="Avatar_avatar__1d9Wt Avatar_xs__3q9gb MakerInfoHeader_avatar__1PMBy">
                                    <span class="Avatar_hasImage__2TKl6"
                                        style="background-image: url(),
                                                url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYzl1cmF3eHIyYSIgZD0iTTAgMGg4MHY4MEgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPG1hc2sgaWQ9IjZ2emt3OXN5NWIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYzl1cmF3eHIyYSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04MCA0MGMwIDIyLjA5Mi0xNy45MDkgNDAtNDAgNDBTMCA2Mi4wOTIgMCA0MCAxNy45MDkgMCA0MCAwczQwIDE3LjkwOCA0MCA0MCIgZmlsbD0iI0U5RUNFRiIgbWFzaz0idXJsKCM2dnprdzlzeTViKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJtMjIuMzA1IDI2LjkxNC4yMyAyLjEyMWMtLjAxLjI5LjA0OS41NTkuMTgxLjgwNy4wODUuMjYxLjIyOC40ODUuNDMzLjY3Ni4xOS4yMDMuNDEzLjM0OC42NzQuNDMyLjI0OS4xMzIuNTE5LjE5MS44MDYuMThsLjU1Ny0uMDc1Yy4zNTUtLjA5OS42NjMtLjI3OS45MjQtLjUzN2wuMzI4LS40MjVjLjE5LS4zMjYuMjg1LS42OC4yODctMS4wNTgtLjA3OC0uNzA2LS4xNTQtMS40MTUtLjIzLTIuMTIxLjAxLS4yOS0uMDUtLjU1OS0uMTgtLjgwN2ExLjU3IDEuNTcgMCAwIDAtLjQzNC0uNjc1IDEuNTUzIDEuNTUzIDAgMCAwLS42NzQtLjQzMyAxLjU4NCAxLjU4NCAwIDAgMC0uODA3LS4xOGMtLjE4NS4wMjYtLjM3Mi4wNS0uNTU3LjA3NWEyLjA4MyAyLjA4MyAwIDAgMC0uOTI1LjUzOGwtLjMyNi40MjRjLS4xOS4zMjctLjI4NS42NzktLjI4NyAxLjA1OE01My44ODIgMjcuMzI4djIuNTIyYzAgLjUzOC4yMzMgMS4xMDIuNjEzIDEuNDgyLjE5LjIwMy40MTQuMzQ4LjY3NC40MzMuMjUuMTMuNTE4LjE5LjgwNy4xOC41NDItLjAyNCAxLjEwNC0uMjAyIDEuNDgxLS42MTMuMzc2LS40MS42MTQtLjkxNC42MTQtMS40ODJ2LTIuNTIyYzAtLjUzNi0uMjM0LTEuMS0uNjE0LTEuNDhhMS41NzYgMS41NzYgMCAwIDAtLjY3NC0uNDM0IDEuNTczIDEuNTczIDAgMCAwLS44MDctLjE4Yy0uNTQyLjAyNC0xLjEwNC4yMDItMS40ODEuNjE0LS4zNzYuNDA5LS42MTMuOTEzLS42MTMgMS40OE0zNi4yOTcgMjUuOTQ1Yy0uNzQzIDQuMzM1LTEuNDg0IDguNjczLTIuMjI1IDEzLjAxLS4xODQgMS4wNzUuMjg1IDIuMzA3IDEuNDYzIDIuNTc2IDEuMDE0LjIzIDIuMzc4LS4zMDkgMi41NzYtMS40NjJsMi4yMjUtMTMuMDExYy4xODQtMS4wNzUtLjI4NS0yLjMwOC0xLjQ2My0yLjU3Ny0xLjAxNS0uMjMtMi4zOC4zMDgtMi41NzYgMS40NjRNNDUuMTU4IDUwLjM4NmMtLjE2LS4zMy0uMTAxLS40NzctLjA0NS0uODA2LS4xMTEuMTc1LS4xMjUuMjAxLS4wNDIuMDc3YS4zNy4zNyAwIDAgMSAuMjAzLS4xNzhjLS4yMi4xMTctLjIzNS4xMzgtLjA0Ny4wNjRhMy40MyAzLjQzIDAgMCAxLS4zOTMuMTE2Yy0uMDgyLjAyLS42NTkuMS0uMjY1LjA1Ny0xLjExNS4xMjQtMi4yNC4xOS0zLjM2LjI4NWwtNi44NzcuNTc3Yy0xLjA4OS4wOTItMi4xNDguODk3LTIuMDk1IDIuMDk0LjA0OCAxLjA1Ni45MjYgMi4xOTIgMi4wOTUgMi4wOTNsOC44NC0uNzRjMS40NS0uMTIzIDMuMDQxLS4xMyA0LjI4Ny0uOTggMS42LTEuMDkzIDIuMTYzLTMuMDI4IDEuMzE2LTQuNzcyLS40OC0uOTktMS45NjYtMS4zMzMtMi44NjYtLjc1Mi0xLjAxMy42NTQtMS4yNjMgMS44MDctLjc1IDIuODY1IiBmaWxsPSIjQ0REM0Q4Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=&quot;); border: 1px solid rgb(221, 226, 230);"></span>
                                </div>
                                <div class="MakerInfoHeader_texts__3ft0t">
                                    <span
                                        class="MakerInfoHeader_makerName__2KFTA StoreMakerInfoContainer_makerName__2GZJn">${dataDTO.memberNickname}</span>
                                    <span class="MakerInfoHeader_subInfo__12Ms6">${dataDTO.memberIntroducing}</span>
                                </div>
                            </a>
                        </div>
                        <div
                            class="MakerInfoStatusSection_container__37_VM StoreMakerInfoContainer_statusSection__38vpv">
                            <div
                                class="SupporterCount_container__2vmwf MakerInfoStatusSection_status__1ILgm">
                                <span class="SupporterCount_wrapper__3lJE7">
                                    <img class="Rating_icon__1gznE" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz4KICAgICAgICA8cGF0aCBkPSJNMiAyaDExLjY2N3YxMS42NjdIMnoiLz4KICAgICAgICA8cGF0aCBkPSJNNy44MzMgMTEuODQxIDUuMDU1IDEzLjU2YS43MjEuNzIxIDAgMCAxLS45OTgtLjI0NC43NDUuNzQ1IDAgMCAxLS4wODYtLjU1NGwuNzU1LTMuMjA1LTIuNDcyLTIuMTQzYS43NDEuNzQxIDAgMCAxLS4wOC0xLjAzNi43MjUuNzI1IDAgMCAxIC40OTQtLjI1NGwzLjI0NS0uMjY0IDEuMjUtMy4wNDJhLjcyMy43MjMgMCAwIDEgMS4zNCAwbDEuMjUgMy4wNDJMMTMgNi4xMjNhLjczOC43MzggMCAwIDEgLjQxNCAxLjI5TDEwLjk0IDkuNTU2bC43NTYgMy4yMDVhLjczNi43MzYgMCAwIDEtLjUzOC44ODYuNzIuNzIgMCAwIDEtLjU0Ny0uMDg5bC0yLjc3OC0xLjcxN3oiIGZpbGw9IiMwMEM0QzQiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K" alt="">
                                    포인트 | ${dataDTO.memberPoint}
                                </span>
                            </div>
                        </div>
                        <button
                            class="AccordionButton_accordionButton__2LHP- StoreMakerInfoContainer_accordionButton__3rhUd">
                            <span class="StoreMakerInfoContainer_accordionButtonText__z7Jgs">더보기</span>
                            <svg viewBox="0 0 32 32" focusable="false" role="presentation"
                                class="withIcon_icon__3VTbq" aria-hidden="true">
                                <path d="M16 22.4L5.6 12l1.12-1.12L16 20.16l9.28-9.28L26.4 12 16 22.4z">
                                </path>
                            </svg>
                        </button>
                        <div class="StoreMakerInfoContainer_contactSection__3MZnT">
                            <table class="MakerInfoContactSection_table__Ced8h">
                                <tbody>
                                    <tr>
                                        <th>소속</th>
                                        <td>${dataDTO.memberSchool}</td>
                                    </tr>
                                    <tr>
                                        <th>학과</th>
                                        <td>${dataDTO.memberMajor}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <button
                        class="AccordionButton_accordionButton__2LHP- StoreMakerInfoContainer_accordionButton__3rhUd">
                        <span class="StoreMakerInfoContainer_accordionButtonText__z7Jgs">닫기</span>
                        <svg viewBox="0 0 32 32" focusable="false" role="presentation"
                            class="withIcon_icon__3VTbq" aria-hidden="true">
                            <path d="M16 9.6L26.4 20l-1.12 1.12L16 11.84l-9.28 9.28L5.6 20 16 9.6z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="DetailInfo_observer__1F3B3"></div>
            </div>
    `

    $textContainer.append(text);


    content += `

          <blockquote class="type-default">
                <p>${dataDTO.dataContent}</p>
          </blockquote>

        `

    $contentContainer.append(content);



// 스토리 아래 추가 정보 버튼
    $(document).on("click", "#btn1", function () {
        $(".ProductNoticeInfo_notiContainer__1Ui4k").toggle();
        $(".rotate-icon").toggleClass("rotate");
    });

    $(document).on("click", "#btn2", function () {
        $(".DetailStory_seller__O9uJ6").toggle();
        $(".rotate-icon2").toggleClass("rotate");
    });

    $(document).on("click", "#btn3", function () {
        $(".DetailStory_service__2rTtM").toggle();
        $(".rotate-icon3").toggleClass("rotate");
    });

//   판매자 정보 더보기 버튼
    var moreButton = $(".StoreMakerInfoContainer_accordionButton__3rhUd:contains('더보기')");
    var closeButton = $(".StoreMakerInfoContainer_accordionButton__3rhUd:contains('닫기')");
    var contactSection = $('.StoreMakerInfoContainer_contactSection__3MZnT');

    contactSection.hide();
    closeButton.hide();

    moreButton.click(function () {
        contactSection.show();
        moreButton.hide();
        closeButton.show();
    });

    closeButton.click(function () {
        contactSection.hide();
        moreButton.show();
        closeButton.hide();
    });


    // 카테고리 이름 변경
    $(".computer").text("컴퓨터공학과");
    $(".design").text("디자인학과");
    $(".sports").text("스포츠과학과");
    $(".biology").text("생명과학과");
    $(".chemistry").text("화학과");
    $(".machine").text("기계공학과");
    $(".engineering").text("전기공학과");
    $(".math").text("수학과");
    $(".media").text("미디어영상학과");
    $(".applied_music").text("실용음악과");

    let dataService = (function(){
        function checkMyWish(callback){
            $.ajax({
                url: `/datas/wish/${dataId}`,
                success: function(check){
                    if(callback){
                        callback(check);
                    }
                }
            })
        }

        function doWish(callback){
            $.ajax({
                url: `/datas/do-wish/${dataId}`,
                success: function(){
                    if(callback){
                        callback();
                    }
                }
            });
        }

        function doNotWish(callback){
            $.ajax({
                url: `/datas/do-not-wish/${dataId}`,
                success: function(){
                    if(callback){
                        callback();
                    }
                }
            });
        }

        return {doWish: doWish, doNotWish: doNotWish, checkMyWish, checkMyWish}
    })();


    // 찜하기 버튼 아이콘 변경
    var svgIcon = $(this).find('svg');
    // 찜하기 버튼 텍스트 업데이트
    var buttonCount = $(this).find('.ProductFloatButton_count__1a-7B');
    var count = parseInt(buttonCount.text().replace(/,/g, ''));

    function doWish(){
    //    스타일 변경(찜한 걸로)
        svgIcon.addClass('selected');
    }

    function doNotWish(){
    //    스타일 변경(찜 취소한걸로)
        svgIcon.removeClass('selected');
    }

    /*찜하기*/
    $textContainer.on("click", "#wishlist-btn", function(){
        if(id){
            dataService.checkMyWish(function(check){
                if(!check){
                    console.log("짐하기들어옴")
                    dataService.doWish(doWish);
                    doWish()

                }else{
                    console.log("짐하기들어옴2")
                    dataService.doNotWish(doNotWish);
                    doNotWish()
                }
            });
            return;
        } else {
            showWarnModal("<span>로그인 후 찜하기 가능합니다.</span>");
        }
    });

    /* 구매하기 버튼 로그인 체크 */
    $(document).on("click", '.payButton', function(e){
        let dataId = $(this).attr("id");
        e.preventDefault();
        if(id) {
            location.href = `/datas/payment?dataId=${dataId}`
            return;
        } else {
            showWarnModal("<span>로그인 후 구매 가능합니다.</span>");
            $('.modal').on("click", ()=>{location.href = "/accounts/login"});
            return;
        }
    });




    // 찜하기 버튼
    // $('.ProductFloatButton_wishButtonBox__236EH button').click(function () {
    //     // 찜하기 버튼 활성화
    //     var isActive = $(this).attr('aria-pressed') === 'true';
    //
    //     // 찜하기 버튼 활성화 업데이트
    //     $(this).attr('aria-pressed', !isActive);
    //
    //     // 찜하기 버튼 아이콘 변경
    //     var svgIcon = $(this).find('svg');
    //     svgIcon.toggleClass('selected');
    //
    //     // 찜하기 버튼 텍스트 업데이트
    //     var buttonCount = $(this).find('.ProductFloatButton_count__1a-7B');
    //     var count = parseInt(buttonCount.text().replace(/,/g, ''));
    //     if (isActive) {
    //         count--;
    //     } else {
    //         count++;
    //     }
    //     buttonCount.text(count.toLocaleString());
    // });


}); //E



