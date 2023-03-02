const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

document.getElementById('btn').addEventListener('click', function(e) {
    e.preventDefault()
   sidebar.classList.toggle('sidebar_small');
   mainContent.classList.toggle('main-content_large')
})
// document.querySelector('button').onclick = function () {
//     console.log('I got clicked!')
//   sidebar.classList.toggle('sidebar_small');
//   mainContent.classList.toggle('main-content_large')
// }