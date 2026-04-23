
(function () {
    const doc = document.documentElement;

    function recalc() {
        const w = doc.clientWidth;

        if (w < 768) {
            doc.style.fontSize = (w / 400) * 100 + "px";
        } else {
            doc.style.fontSize = (w / 1920) * 100 + "px";
        }
    }

    window.addEventListener("resize", recalc);
    document.addEventListener("DOMContentLoaded", recalc);
})();


// Filter system
function filter(category, event) {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".filter-bar button");

    buttons.forEach(btn => btn.classList.remove("active"));
    if (event) event.target.classList.add("active");

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
