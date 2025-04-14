const div = document.querySelector('.top-bar')
fetch('/index.html')
.then(res=>res.text())
.then(data=>{
    div.innerHTML=data;
})

// const div = document.querySelector('.top-bar');
// if (div) { // 確保 .top-bar 存在
//   fetch('/index.html')
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return res.text();
//     })
//     .then(data => {
//       div.innerHTML = data;
//     })
//     .catch(err => console.error('Error loading index.html:', err));
// } else {
//   console.error('Element with class "top-bar" not found.');
// }