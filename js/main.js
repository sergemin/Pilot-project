;(function() {
   var mainMenu = document.querySelector('.topMenu');
    mainMenu.addEventListener('click', function(event) {
        var target = event.target;
        
        while(target.tagName != 'Ul') {
            if(target.tagName == 'LI') {
                alert(target.innerHTML);
                return;
            }
    
            
            target = target.parentNode;
        }
        
    });
})();