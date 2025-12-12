document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.getElementById("navToggle");
    var navOverlay = document.getElementById("navOverlay");
    var links = document.querySelectorAll(".nav-overlay-link");

    function toggleNav() {
        navOverlay.classList.toggle("is-open");
    }

    navToggle.addEventListener("click", toggleNav);

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navOverlay.classList.remove("is-open");
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            var targetId = this.getAttribute("href").slice(1);
            var target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
});