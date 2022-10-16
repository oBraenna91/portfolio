const postContainer = document.querySelector("#ulCards");
const nextButton = document.getElementById("carouselNext");
const prevButton = document.getElementById("carouselPrev");

nextButton.addEventListener("click", event => {
    const cardWidth = postContainer.clientWidth;
    postContainer.scrollLeft += cardWidth;
});

prevButton.addEventListener("click", event => {
    const cardWidth = postContainer.clientWidth;
    postContainer.scrollLeft -= cardWidth;
});