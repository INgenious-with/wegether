$(document).ready(function() {
    const $datarg = $("#dataregister");
    let text = "";
    const numToShow = 6; // 보여줄 개수 설정

    for (let i = 0; i < numToShow && i < datards.length; i++) {
        const datard = datards[i];
        text += `
        <div role="presentation" class="CardTable_itemContainer__v9-cW" style="width: calc((16.6667% - 16px + 5px) - 0.01px); margin-left: 0px; margin-right: 8px; margin-bottom: 0px;">
            <a href="/datas/detail?id=${datard.id}" class="RecommendationStoreCard_item__3iMMQ" data-ec-list="홈_추천_스토어" data-ec-id="35" data-ec-name="내 손안의 스마트한 스튜디오, 저스트모바일 셔터그립2" data-ec-position="0" data-ec-price="59900" data-ec-category="테크·가전" data-ec-brand="주식회사 시티파이브" data-ec-contenttype="STORE">
                <div class="RecommendationStoreCard_thumbnailContainer__mghKx">
                    <div class="RecommendationStoreCard_thumbnailPlaceholder__3TTOS">`;

        datard.files.forEach(file => {
            if (file.fileType == "REPRESENTATIVE") {
                text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" class="preview">`;
            }
        });

        text += `
             </div>
                </div>
                <div class="RecommendationStoreCard_contentContainer__aDF-5">
                    <div class="RecommendationStoreCard_projectName__kIgBJ">${datard.dataTitle}</div>
                </div>
            </a>
        </div>`;
    }

    $datarg.html(text);
});
