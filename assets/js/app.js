// テスト用でボタン押したらアラート出すやつ
// const buttons = document.querySelectorAll('.button');
// buttons.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         alert('クリックされました！');
//     });
// });


//grid-cols-4 .grid-itemの要素を全て取得してitemsに格納
const items = document.querySelectorAll('.grid-cols-4 .grid-item');


items.forEach(function (item) { //変数itemsの要素を全てループして、itemに格納する
    item.addEventListener('click', function () { //itemに格納された要素がクリックれた時の処理を登録する
        //以下がクリックされたときの処理
        items.forEach(function (allitem) { //変数itemsの要素を全てループして、allitemに格納する
            allitem.classList.remove('active'); //allitemに格納された要素からactiveクラスを削除する
        });
        item.classList.add('active'); //クリックされたitemにactiveクラスを追加する
    });
});

//ネーム要素が空の場合、バリデーションで弾く処理
const form = document.querySelector('form'); //フォーム要素を取得
form.addEventListener('submit', function (event) {
    // ↑ 第二引数の関数の引数（event）を定義することで、
    //  イベント発生時にブラウザが自動で作った「イベント情報オブジェクト」を受け取れる 
    //変数名は他のやつでも大丈夫だけどわかりやすいように今回はeventにしている
    const name = document.querySelector('#name').value;  // Name input の値
    if(name === '') {
        event.preventDefault(); //フォームの送信をキャンセルする
        alert('名前を入力してください')
    }
})
