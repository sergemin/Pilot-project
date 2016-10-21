;(function() {
    var widthScreenCurent = document.documentElement.scrollWidth;
    var topMenu = document.querySelector('.topMenu');
    
console.log(widthScreenCurent);
    var menuButton = document.querySelector('.topMenuShower');
    
    menuButton.addEventListener('click', function() {
        topMenu.classList.toggle('topMenuChanger');
    })
    window.addEventListener('resize', function() {
        topMenu.classList.remove('topMenuChanger');
    })
})();