//var topMenu = document.querySelector('.topMenu');
//topMenu.addEventListener('click', function(event) {
//        var target = event.target;
//        while(target.tagName != 'UL') {
//            if(target.tagName != 'LI') return;
//            alert('hell');
//            target = target.parentNode;
//        }
//});
(function() {
    var primer = document.querySelector('li');
    for(var i = 0, k = primer.lenght; i<k; i++) {
        
    }
    primer.addEventListener('click', function(e) {
        var target = event.target;
        while(target.tagName != 'UL') {
        if(target.tagName != 'LI') {
            alert(target.innerHTML);
            return;
        }
        
            
        target = target.parentNode();
        }
    })
})()