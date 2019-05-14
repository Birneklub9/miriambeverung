var isClicked = false;
var isScrolled = false;

window.onload = function () {
    /* --------------------------------------------------------- */
    /* ##### - Function add current year to rr_copyright - ##### */
    /* --------------------------------------------------------- */
    var year = new Date();
    document.getElementById("rr_copyright").innerHTML = "Copyright &copy; <em>" + year.getFullYear() + " Robin Rehbein</em> - All rights reserved.";    

    document.getElementById("rr_extra_menu_p").addEventListener('click', function () {
        isClicked = !isClicked;
        if (isClicked) {
            addClass("query", "rr_extra_menu_list", "active");
        }
        else {
            removeClass("query", "rr_extra_menu_list", "active");
        }
    });
}

/* ------------------------------------------------------------- */
/* ################### - Function addClass - ################### */
/* ------------------------------------------------------------- */
function addClass(selector, identifier, classname) {
    if (selector == "query") {
        document.querySelector(identifier).classList.add(classname);
    } 
    else if (selector == "id") {
        document.getElementById(identifier).classList.add(classname);
    } 
    else {
    }
};
function removeClass(selector, identifier, classname) {
    if (selector == "query") {
        document.querySelector(identifier).classList.remove(classname);
    } 
    else if (selector == "id") {
        document.getElementById(identifier).classList.remove(classname);
    } 
    else {
    }
};