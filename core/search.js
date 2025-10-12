document.getElementById("search-button").addEventListener("click", function () {
    const searchBar = document.getElementById("search-bar");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "block";
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('sch-in');
//     const searchList = document.getElementById('sch-UL');
//     const listItems = searchList.getElementsByTagName('li');

//     searchInput.addEventListener('input', function() {
//         const filter = searchInput.value.toLowerCase();
//         let hasMatch = false;
//         for (let i = 0; i < listItems.length; i++) {
//             const a = listItems[i].getElementsByTagName('a')[0];
//             if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
//                 listItems[i].style.display = '';
//                 hasMatch = true;
//             } else {
//                 listItems[i].style.display = 'none';
//             }
//         }
//         if (!hasMatch) {
//             alert('沒有符合的選項');
//         }
//     });

//     searchInput.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             const filter = searchInput.value.toLowerCase();
//             let hasMatch = false;
//             for (let i = 0; i < listItems.length; i++) {
//                 const a = listItems[i].getElementsByTagName('a')[0];
//                 if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
//                     window.location.href = a.href;
//                     hasMatch = true;
//                     break;
//                 }
//             }
//             if (!hasMatch) {
//                 alert('There\'s no result...');
//             }
//         }
//     });

//     // 新增點擊事件處理程式
//     for (let i = 0; i < listItems.length; i++) {
//         const a = listItems[i].getElementsByTagName('a')[0];
//         a.addEventListener('click', function(event) {
//             event.preventDefault();
//             alert('您點擊了: ' + a.innerHTML);
//         });
//     }
// });