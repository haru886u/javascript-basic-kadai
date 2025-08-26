const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  // ボタンをクリックしたらすぐに文字を変更（任意）
  // text.textContent = 'ボタンをクリックしました';

  // 2秒後に文字を変更
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
