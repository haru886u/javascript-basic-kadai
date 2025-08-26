// ボタン要素を取得
const button = document.getElementById('btn');

// ボタンにクリックイベントを設定
button.addEventListener('click', () => {
  // ボタンの前のテキストを変更
  const h2 = document.getElementById('text');
  h2.textContent = 'ボタンをクリックしました';
});
