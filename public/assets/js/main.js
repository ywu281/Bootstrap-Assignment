let menus = document.querySelectorAll('.nav-link');

menus.forEach(menu => {
    menu.addEventListener('click', function () {
        changeMenu(menu);
    });
});

function changeMenu(selectedMenu) {
    let menus = document.querySelectorAll('.nav-link');
    menus.forEach(menu => menu.classList.remove('active'));

    selectedMenu.classList.add('active');
}

let menubtn = document.querySelector('.openmenu');
let sidemenu = document.querySelector('aside');
menubtn.addEventListener('click', function () {
    sidemenu.classList.add('mobilemenu');
});

let closebtn = document.querySelector('.close');
closebtn.addEventListener('click', function () {
    sidemenu.classList.remove('mobilemenu');
});

