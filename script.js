document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");

    function scrollRight() {
        imageContainer.scrollBy({ left: 200, behavior: "smooth" });
    }

    function scrollLeft() {
        imageContainer.scrollBy({ left: -200, behavior: "smooth" });
    }

    document.querySelector(".gallery h2").insertAdjacentHTML(
        "beforeend",
        
        `
    );
});
