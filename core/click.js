// 讓所有 .explore 按鈕點擊時跳轉到對應 href
document.querySelectorAll('.explore').forEach(function(btn) {
    // 對每個 .explore 元素加上點擊事件監聽器
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止按鈕的預設行為（例如表單送出或跳轉）
        const href = btn.getAttribute('link'); // 取得自訂屬性 link 的值
        if (href) { // 如果有設定 link 屬性
            window.location.href = href; // 導向到 link 指定的網址
        }
    });
});