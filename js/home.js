;(function() {
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
    
    if (margin === 0) {
           prevButton.setAttribute('src', 'img/strLeft.png');
    
   nextButton.addEventListener('click', function() {
       
       margin = margin - differ;
       
       if(margin < 0) {
           prevButton.setAttribute('src', 'img/srtRedLeft.png');
       }
        if(margin < -differ*countBlock) {
           nextButton.setAttribute('src', 'img/strRight.png');
       }
       
       if (margin === 0) {
           prevButton.setAttribute('src', 'img/strLeft.png');
       }
       
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
       if (margin === -differ) {
           prevButton.setAttribute('src', 'img/strLeft.png');
       }
       
        console.log('there is margin of prev = ' + margin + '%');
       if(margin < 0) {
        margin = margin + differ;
        widthBlocks.style.marginLeft = margin + '%';
      }
   })
   
   
   // THERE IS 
   var forPhotos = document.createElement('div');
    var cont4 = document.querySelector('.container4');
    cont4.appendChild(forPhotos);
    cont4.style.position = 'relative';
    forPhotos.style.position = 'absolute';
    forPhotos.classList.add('photoBigger');
    
//    var blockImg = widthBlocks.querySelectorAll('.blockCont4')
//    for(var i = 0; i<; i++) {
//        
//    }
    };
})();