window.onload = function () {
    /* --------------------------------------------------------- */
    /* ##### - Function add current year to rr_copyright - ##### */
    /* --------------------------------------------------------- */
    var year = new Date();
    document.getElementById("copyright").innerHTML = "Copyright &copy; <em>" + year.getFullYear() + " Robin Rehbein</em> - All rights reserved.";    
}