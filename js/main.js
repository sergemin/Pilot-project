;(function() {
    
    console.log('Width of screen = ' + document.documentElement.clientWidth + 'px');
    
    console.log('Width of screen with scroll = ' + document.documentElement.scrollWidth + 'px');
    
    var widthScreenCurent = document.documentElement.scrollWidth,
        topMenu = document.querySelector('.topMenu');
    if(widthScreenCurent > 847) {
        topMenu.classList.remove('topMenuChanger');
    }
    var menuButton = document.querySelector('.topMenuShower');
    
    menuButton.addEventListener('click', function() {
        topMenu.classList.toggle('topMenuChanger');
    })
    
    
//   var mainMenu = document.querySelector('.topMenu');
//    mainMenu.addEventListener('click', function(event) {
//        var target = event.target;
//        
//        while(target.tagName != 'Ul') {
//            if(target.tagName == 'LI') {
//                alert(target.innerHTML);
//                return;
//            }
//    
//            
//            target = target.parentNode;
//        }
//        
//    });
})();