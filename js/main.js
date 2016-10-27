;(function() {
    var widthScreenCurent = document.documentElement.scrollWidth;
    var topMenu = document.querySelector('.topMenu');
    console.log(widthScreenCurent);
    
   
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
    window.addEventListener('resize', function() {
        topMenu.classList.remove('topMenuChanger');
    })

    // Buttons for home page 4th
    
    var ourProj = document.querySelector('.buttonsOurProj');
    
    ourProj.addEventListener('click', function(event) {
        var target = event.target;
       if(target.tagName != 'IMG') return;
        var sizeTape = 10%;
        var blocksForCont4Home = document.querySelector('.blocksForCont4Home');
        
        blocksForCont4Home.setAttribute('style', 'margin-left:'+sizeTape);
        sizeTape += sizeTape;
        
    });
    
})();