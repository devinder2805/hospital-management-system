let navBarToggle = document.getElementById("nav-bar-toggle");

let navigationList = document.getElementById("navigation-link");
navBarToggle.onmouseenter = function () {
    navigationList.style.display = "block";
}

navBarToggle.onmouseleave = function () {
    navigationList.style.display = "none";
    navigationList.onmouseenter = function () {
        this.style.display = "block";
    }

    navigationList.onmouseleave = function () {
        this.style.display = "none";
    }
}