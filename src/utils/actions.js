
//NEED REMOVE THIS ARCHIVE
var version = 1;
var trigger = document.getElementById('menu-trigger')
    .addEventListener("click",function() {
	    var menu = document.getElementById('menu-hidde');
            if (version == 1) {
                menu.style.left = "0px";
                version = 0;
            } else {
                menu.style.left = "-100%";
                version = 1;
            }
})
