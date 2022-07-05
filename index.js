const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
    item.addEventListener("click", headerClick);
    item.addEventListener("click", styleText);
});

function headerClick() {
    this.nextElementSibling.classList.toggle("spoiler-body");
}

function styleText () {
    this.classList.toggle("list-group-text")
}
