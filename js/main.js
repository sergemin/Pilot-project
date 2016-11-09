;(function() {
    
    
    var widthScreenCurent = document.documentElement.scrollWidth;
     console.log('there is a size of screen = ' + widthScreenCurent + 'px');
    
    var topMenu = document.querySelector('.topMenu');
   
    var menuButton = document.querySelector('.topMenuShower');
    
    topMenu.addEventListener('click', function(event) {
        var target = event.target;
        //var class = event.getAttribute('className');
        while(target != topMenu) { 
           if (target.tagName == 'LI') {
               // alert('hi');

      return;
    }
    target = target.parentNode;
        }
    });
    
    
    menuButton.addEventListener('click', function() {
        topMenu.classList.toggle('topMenuChanger');
    })
    
    //there is a code for hiding topMenu when user changes the size of screen
    window.addEventListener('resize', function() {
        topMenu.classList.remove('topMenuChanger');
    })
    
})();