window.onload = function () {
    /* --------------------------------------------------------- */
    /* ####### - Function add current year to Copyright - ###### */
    /* --------------------------------------------------------- */
    var year = new Date();
    document.getElementById("copyright").innerHTML = "Copyright &copy; <em>" + year.getFullYear() + " <a href=\"http://robinrehbein.de\">Robin Rehbein</a></em> - All rights reserved.";    

    /* --------------------------------------------------------- */
    /* ############# - Function Lazy Load Images - ############# */
    /* --------------------------------------------------------- */
    var lazyloadImages;
    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy-load");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    // trigger only after image is loaded completly
                    image.onload = function () {
                        image.classList.remove("lazy-load");
                        imageObserver.unobserve(image);
                    }
                    image.src = image.dataset.src;
                }
            });
        });
        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy-load");
        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }
            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (windows.innerHeight + scrollTop)) {
                        img.onload = function () {
                            img.classList.remove(".lazy-load");
                        }
                        img.src = image.dataset.src;
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationchange", lazyload);
                }
            }, 20);
        }
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationchange", lazyload);
    }
    /* --------------------------------------------------------- */
    /* ############### - Toggle mobile nav menu - ############## */
    /* --------------------------------------------------------- */
    document.getElementById("mobile-nav").addEventListener("click", function () {
        document.getElementById("mobile-nav").classList.toggle("active");
        document.getElementById("nav-list").classList.toggle("active");
        // var navListItems = document.getElementsByClassName("nav-list-item");
        // Array.from(navListItems).forEach(element => element.classList.toggle("active"));
        Array.from(document.getElementsByClassName("nav-list-item")).forEach(element => element.classList.toggle("active"));

    })
}