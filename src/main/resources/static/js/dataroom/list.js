$(document).ready(function () {

    const $list = $("#list-container");
    const $btnWrap = $(".searchMoreData");

    let page = 1;
    let order ="new";
    let categoryType= "all";


    let text = "";
    function showList(datas) {
        datas.forEach(data => {
            text += `

            <div role="presentation" class="CardTable_itemContainer__v9-cW"
                style="width: calc((25% - 24px + 6px) - 0.01px); margin-left: 0px; margin-right: 12px; margin-bottom: 40px;">
                <a class="StoreCard_item__1hRfz"
                   href="/datas/detail?id=${data.id}">
                   <div class="CardThumbnail_thumbnailContainer__DwnpC" style="height: 269px;">
                   `

            data.files.forEach(file => {
                if (file.fileType == "REPRESENTATIVE") {
                    text += `
                        <div class="CardThumbnail_thumbnailPlaceholder__1Yv8K" style="padding-top: calc(100% - 0px); background-color: #f7f7f7; min-width: auto; min-height: auto;">
                            <div aria-hidden="true"
                                class="CardThumbnail_thumbnail__3bDBJ CardThumbnail_visible__343f4"
                                style="background-image: url(/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}); border-radius: 8px;">
                             </div>
                        </div>`;
                }
            })

            text += `
                   </div>
                   <div class="StoreCard_contentContainer__tQfaN">
                      <div class="StoreCard_title__2hUM7">${data.dataTitle}
                      </div>
                      <div class="StoreCard_subText__1G_sb">${data.memberNickname}</div>
                      <div class="StoreCard_footer__12twC">
                         <div class="StoreCard_priceGroup__3T4UV">
                            <div class="StoreCard_priceContainer__3-AjB">
                               <span class="StoreCard_price__210Oz">${data.dataPrice}</span>
                               <span>원</span>
                            </div>
                            <div class="StoreCardFooter_container__X5rH8">
                               <div class="StoreCardFooter_upperFooter__kvjJa">
                                  <div class="ParticipantScore_container__JH3e_">
                                     <div class="ParticipantScore_peopleIcon__22zg8"></div>
                                     <span class="ParticipantScore_peopleCountText__1oHUl"> ${data.dataReadCount}
                                        조회</span>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="CardSpinner_container__1cKRs">
                      <div class="CardSpinner_loader__2-LrZ" style="width: 32px; height: 32px;">
                         <svg viewBox="25 25 50 50" aria-label="Loading">
                            <g class="Loader_circular__2dy3E">
                               <circle class="Loader_path__2uhmv" cx="50" cy="50" r="20"
                                  fill="none" stroke-width="4" stroke-miterlimit="10"></circle>
                            </g>
                         </svg>
                      </div>
                   </div>
                </a>
                <button type="button"
                   class="WishButton_button__1ZqbG WishButton_smallArea__sDV77 WishButton_interaction__2FCel"
                   aria-label="찜하기 버튼" aria-pressed="false" data-ga-category="공통_상품카드_스토어"
                   data-ga-action="찜하기_추가" data-ga-label="">
                   <svg viewBox="0 0 32 32" focusable="false" role="presentation"
                      class="withIcon_icon__3VTbq" aria-hidden="true">
                      <path
                         d="M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085z">
                      </path>
                   </svg>
                </button>
            </div>
            `
        });

        $list.append(text);
    }


    load("all");


    //  더보기 버튼
    $("#searchMoreData_btn").on("click", function(){
        page++;
        load(categoryType);
    });


    // category list
    $('.category_lists button').on("click", function () {
        text="";
        $list.html("");
        page =1;
        // 클릭한 버튼 활성화
        text="";
        $(this).addClass('ImageTab_active__BGdXu').parent().siblings()
            .find('.ImageTab_tab__3siCY').removeClass('ImageTab_active__BGdXu');

        categoryType = $(this).attr('id');
        load(categoryType);
    });


    //  sort_list
    //  최신순
    $('.new').on("click", function () {
        $(this).addClass('OrderSelectDesktop_active__YTP2K').siblings().removeClass('OrderSelectDesktop_active__YTP2K');
        page = 1;
        $list.html("");
        order="new";
        load(categoryType);
    })

    //  인기순
    $('.trand').on("click", function () {
        $(this).addClass('OrderSelectDesktop_active__YTP2K').siblings().removeClass('OrderSelectDesktop_active__YTP2K');
        $list.html("");
        page = 1;
        order="trand";
        load(categoryType);
    })

    //load ajax
    function load(categoryType) {
        console.log(categoryType)
        $.ajax({
            url: `/datas/list/${page}/${categoryType}/${order}`,
            contentType : "application/json; charset=UTF-8;",
            success:  function (datas) {

                if (datas.length == 0) {
                    showWarnModal("<span>마지막 페이지입니다</span>");
                    $('#searchMoreData_btn').hide();
                    return;
                }
                text="";
                showList(datas);


            }
        })
    }


    //TOP btn
    var button = $(".FloatingTopButton_pageTop__2gqm9");
    button.hide();

    //TOP btn offset Show Hide
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    // TOP 버튼 클릭시 페이지 위로 이동
    button.click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    //    작성하기 로그인 체크 + 모달
    $("button.go-write-form").on("click", function(){
        if(id){
            location.href = "/datas/register"
            return;
        } else {
            showWarnModal("<span>로그인 후 작성 가능합니다.</span>");
            $('.modal').on("click", ()=>{location.href = "/accounts/login"});
            return;
        }
    })

}); //E