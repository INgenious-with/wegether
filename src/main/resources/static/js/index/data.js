$(document).ready(function() {
    const $data = $("#list-wrap ol");
    let text = "";
    const numToShow = 5; // 보여줄 개수 설정

    for (let i = 0; i < Math.min(numToShow, datas.length); i++) {
        const data = datas[i];
        text += `
            <li class="TabContainer_listItem__2nO5j">
                <div>
                    <a class="CardType_projectCard__3xhjb CardType_projectCardA__33rbP"
                        href="/datas/detail?id=${datard.id}"
                        data-ec-list="홈_실시간랭킹_펀딩" data-ec-id="190430"
                        data-ec-name="1.5억 업그레이드 펀딩ㅣ재테크책 100권 압축ㅣ트라이앵글 이론 2023"
                        data-ec-position="0" data-ec-category="출판"
                        data-ec-brand="주식회사 천망" data-ec-contenttype="REWARD"
                        index="0" data-gtm-vis-recent-on-screen-11319722_2073="200"
                        data-gtm-vis-first-on-screen-11319722_2073="200"
                        data-gtm-vis-total-visible-time-11319722_2073="2000"
                        data-gtm-vis-recent-on-screen-11319722_2115="201"
                        data-gtm-vis-first-on-screen-11319722_2115="201"
                        data-gtm-vis-total-visible-time-11319722_2115="2000"
                        data-gtm-vis-has-fired-11319722_2073="1"
                        data-gtm-vis-has-fired-11319722_2115="1">
                        <article class="for_ranking_weight">
                            <div class="commons_content__2K1SH commons_order__3AewF CardType_content__1Pavj">
                                <div class="commons_orderText__3B9S_">${i + 1}</div>
                                <em class="commons_title__1yGWm">${data.dataTitle}</em>
                            </div>
                            <div class="commons_thumbnail__3wYGv CardType_thumbnail__2dtTe">`;

        data.files.forEach(file => {
            if (file.fileType == "REPRESENTATIVE") {
                text += `<img src="/files/display?fileName=${file.filePath}/t_${file.fileUuid}_${file.fileName}" class="preview">`;
            }
        });

        text += `
                            </div>
                        </article>
                    </a>
                </div>
            </li>`;
    }

    $data.html(text);
    console.log("나감");
    console.log($data);
});
