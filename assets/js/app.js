// テスト用でボタン押したらアラート出すやつ
const buttons = document.querySelectorAll('.button');
buttons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    alert('クリックされました！');
  });
});

