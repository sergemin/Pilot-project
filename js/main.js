;(function() {
    var widthScreenCurent = document.documentElement.scrollWidth;
    var topMenu = document.querySelector('.topMenu');
    
console.log(widthScreenCurent);
    var menuButton = document.querySelector('.topMenuShower');
    
    if(widthScreenCurent < 843) {
       topMenu.classList.remove('topMenuChanger');
       }
    menuButton.addEventListener('click', function() {
        topMenu.classList.toggle('topMenuChanger');
    })
    
})();