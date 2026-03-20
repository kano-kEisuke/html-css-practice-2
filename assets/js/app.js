// テスト用でボタン押したらアラート出すやつ
const buttons = document.querySelectorAll('.button');
buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        alert('クリックされました！');
    });
});


//grid-cols-4 .grid-itemの要素を全て取得してitemsに格納
const items = document.querySelectorAll('.grid-cols-4 .grid-item');


items.forEach(function (item) { //変数itemsの要素を全てループして、itemに格納する
    item.addEventListener('click', function () { //itemに格納された要素がクリックされるのを待ち構える
        //以下がクリックされたときの処理
        items.forEach(function (allitem) { //変数itemsの要素を全てループして、allitemに格納する
            allitem.classList.remove('active'); //allitemに格納された要素からactiveクラスを削除する
        });
        item.classList.add('active'); //クリックされたitemにactiveクラスを追加する
    });
});