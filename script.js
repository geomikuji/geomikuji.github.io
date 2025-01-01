document.getElementById('drawButton').addEventListener('click', function() {
    // 1. ボタンを無効化
    document.getElementById('drawButton').disabled = true;

    // 2. アニメーション開始
    let image = document.getElementById('fortuneImage');
    let animationArea = document.getElementById('animationArea');
    image.style.animation = 'moveImage 2s ease-out forwards'; // イラストが動くアニメーション

    // 3. アニメーションが終わったら結果を表示
    setTimeout(function() {
        // ランダムなおみくじ結果を設定
        let fortune = getFortuneResult();
        document.getElementById('resultMessage').textContent = fortune.message;
        document.getElementById('itemMessage').textContent = fortune.itemMessage;
        document.getElementById('fortuneResult').classList.remove('hidden'); // 結果を表示

        // 4. ボタンを再度有効化
        document.getElementById('drawButton').disabled = false;
    }, 2000); // 2秒後に結果を表示
});

// おみくじのランダムな結果を生成する関数
function getFortuneResult() {
    const fortunes = [
        {
            message: "ウルトラプリニー式噴火級の幸運！その爆発力で大きく舞い上がろう！爆風に巻き込まれても大丈夫、あんたならやれる！",
            itemMessage: "ラッキーアイテムは 火山灰！思わぬ方向からチャンスがやってきそう！ただし、灰で部屋が汚れるので掃除機の準備も忘れずに！"
        },
        {
            message: "プレート境界のように力強く進展する運気が期待できます！でも気をつけて、地震のように突然起こるかも！",
            itemMessage: "ラッキーアイテムは 蛇紋岩！水を得たかんらん岩のように、周囲からの影響で大きな変化が訪れる年。変化が怖い？それともワクワクする？どっちも経験だ！"
        },
        {
            message: "積乱雲のように熱意が道を開く年。でもあんまり熱くなりすぎて、雷を落とさないように！",
            itemMessage: "ラッキーアイテムは 偏西風！あなたを押し進める追い風が吹きそうな年。風に乗るのもいいけど、髪型には注意！"
        },
        {
            message: "カルデラ湖の静けさの中に、小さな幸せが広がる予感。静かに大きくなっていく幸運は、気づかないうちに訪れるかも。",
            itemMessage: "ラッキーアイテムは 珪藻！一見小さな幸運でも、よく観察すると素晴らしい価値が隠れています。慎重に見守って、幸運をゲット！"
        },
        {
            message: "侵食された渓谷のように、じっくりとした前進が吉を呼びます。急がば回れってことで、焦らずに行こう！",
            itemMessage: "ラッキーアイテムは 石灰岩！過去の積み重ねがあなたの力になる年。今までの努力が役に立つ時が来るぞ！"
        },
        {
            message: "トリプルジャンクションのように複雑な年。でも心配しないで！新しい道が見つかる予感！迷子になっても、それが運命だ！",
            itemMessage: "ラッキーアイテムは 花崗岩！どっしりとした安定感で基盤をしっかり固めましょう。岩のように動じずに頑張れ！"
        }
    ];

    // ランダムに結果を返す
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}
