$(document).ready(function(){
    const $ul = $("ul.CardList_container__39oS4");

    let text = "";

    points.forEach(point => {
        console.log("들어옴")
        text += `
             <li
                  class="CardList_itemContainer__2c_vS"
                  style="width: calc((50% - 0px) - 0.01px); margin: 0 auto"
                >
                  <div class="PurchaseSummaryCard_item__3LlZ3">
                    <dl class="PurchaseSummaryCard_etcArea__3Ummh"></dl>
                    <div class="PurchaseSummaryCard_content__21XLk">
                      <div class="PurchaseSummaryCard_thumbnailArea__2BT7p" aria-hidden="true">
                        <div class="PurchaseSummaryCard_thumbnailPlaceholder__3O0tl">
                          <div
                            aria-hidden="true"
                            class="CardThumbnail_thumbnail__3bDBJ CardThumbnail_visible__343f4"
                            style="background-image: url('')"
                          ></div>
                        </div>
                      </div>
                      <dl class="PurchaseSummaryCard_titleArea__3qDl4">
                                 
                        <dd title="" class="PurchaseSummaryCard_title__uCiz5">${point.pointHistory} Point ${point.pointCategory}</dd>
                      </dl>
                      `
                if(point.dataTitle == null){
                   text+= `이벤트`
                }else{
                    text+=`${point.dataTitle}`
                }

                  text+=  `</div>
                    <!--                     <div class="PurchaseSummaryCard_detailText__2GWWi" aria-hidden="true">
                      상세보기<svg
                        viewBox="0 0 40 40"
                        focusable="false"
                        role="presentation"
                        class="withIcon_icon__3VTbq PurchaseSummaryCard_arrowIcon__2WltX"
                        aria-hidden="true"
                      >
                        <path d="M28 20L15 33l-1.4-1.4L25.2 20 13.6 8.4 15 7l13 13z"></path>
                      </svg>
                    </div> -->
                  </div>
                </li> `



    });

    $ul.html(text);
});



