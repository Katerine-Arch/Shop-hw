let button = document.getElementById('header__nav-button');
let navigation = document.getElementById('menu');
let wrp = document.getElementById('wrp');
button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
    wrp.classList.toggle('display-block');
});

