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
    
    //gallery container4
    
    var margin = 0,
        differ = 102;
    
    var buttonsGallery = document.querySelector('.buttonsOurProj'),
        prevButton = buttonsGallery.getElementsByTagName('img')[0],
        nextButton = buttonsGallery.getElementsByTagName('img')[1],
        widthBlocks = document.querySelector('.blocksForCont4Home');
    
    var countBlock = widthBlocks.children.length;
    var allBlocksWidth = differ / 4 * countBlock;
   console.log('all photos width = ' + allBlocksWidth + '%');
    
   nextButton.addEventListener('click', function() {
       
       margin = margin - differ;
       
       
       console.log('there is margin of next = ' + margin + '%');
       
       if(margin > - allBlocksWidth) {
          widthBlocks.style.marginLeft = margin + '%';
       }
       if(allBlocksWidth+margin === 76.5) {
           widthBlocks.style.marginLeft = margin + 25.5 +'%';
       }
       if(allBlocksWidth+margin === 51) {
           widthBlocks.style.marginLeft = margin + 51 +'%';
       }
       if(allBlocksWidth+margin === 25.5) {
           widthBlocks.style.marginLeft = margin + 76.5 +'%';
       }
       if(allBlocksWidth + margin <= differ) {
           margin = differ;
       }
   })
   prevButton.addEventListener('click', function() {
        console.log('there is margin of prev = ' + margin + '%');
       if(margin < 0) {
        margin = margin + differ;
        widthBlocks.style.marginLeft = margin + '%';
      }
   })
})();