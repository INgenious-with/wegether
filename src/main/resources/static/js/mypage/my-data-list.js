$(document).ready(function(){
    // $('.GNBDesktop_container__3X3Cg').hide();
    const $ul = $(".CardList_container__39oS4");

    let text = "";

    datas.forEach(data => {
        text += `
            <li
                  class="CardList_itemContainer__2c_vS"
                  style="
            width: calc((100% - 0px) - 0.01px);
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 20px;
          "
          >
            <div role="link" class="PurchaseSummaryCard_item__3LlZ3">
            <input type="hidden" name="id" th:value="${datas.id}">

            <a href="/datas/detail?id=${datas.id}">
              <dl class="PurchaseSummaryCard_etcArea__3Ummh">
                <dd> </dd>
                <dd> </dd>
              </dl>
              <div class="PurchaseSummaryCard_content__21XLk">
                <div class="PurchaseSummaryCard_thumbnailArea__2BT7p" aria-hidden="true">
                  <div class="PurchaseSummaryCard_thumbnailPlaceholder__3O0tl">
                    <div
                            aria-hidden="true"
                            class="CardThumbnail_thumbnail__3bDBJ CardThumbnail_visible__343f4"
               > `
        data.files.forEach(file => {
            if(file.fileType == "REPRESENTATIVE"){
                text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" class="preview">`;
            }
        })
    text+=`
           
        </div>
                  </div>
                </div>
            
                
                <dl class="PurchaseSummaryCard_titleArea__3qDl4">
                  <dd
                          title="<컴퓨터 공학과> 사이트 개발 프로젝트"
                          class="PurchaseSummaryCard_title__uCiz5"
                  > ${data.dataTitle}

                  </dd>
                  <dd class="PurchaseSummaryCard_description__245z_">
                    <span class="PurchaseSummaryCard_makerName__1n7dA">${data.dataPrice}원</span>
                  </dd>
                </dl>
              </div>
              <div class="PurchaseSummaryCard_detailText__2GWWi" aria-hidden="true">
                <button><a href="/mypage/datas/modify?id=${data.id}">수정</a></button>
                <span>&nbsp | &nbsp</span>
                <button id="${data.id}">삭제</button>
              </div>

            </div>
          </li>
`;

    });

    $ul.html(text);
});





