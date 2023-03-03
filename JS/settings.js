const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const list = document.getElementById('list')
const button = document.getElementById('btn')
const btnSideBarMode = document.getElementsByClassName('sidebar-mode')
console.log(sidebar.classList)

button.addEventListener('click', function(e) {
    e.preventDefault()
    
    if(e.target.classList.contains('sidebar-mode')){
        console.log(button.classList )
        button.classList.remove('sidebar-mode')
        
        sidebar.classList.toggle('sidebar_small');
        list.style.display = "none"
    }
    if(!e.target.classList.contains('sidebar-mode')) {
        console.log(button.classList)
        button.classList.add('sidebar-mode')

        list.style.display = "block"
        mainContent.classList.toggle('main-content_large')
        
    }

})

// btnSideBarMode.addEventListener('click', function (e) {
//     e.preventDefault()
//     sidebar.classList.toggle('sidebar_small');
//     list.style.display = "none"
//     mainContent.classList.toggle('main-content_large')
// })

