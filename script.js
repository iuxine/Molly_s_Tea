// HeyTea Dynamic Scaling
(function (doc, win) {
    var docEI = doc.documentElement,
        recalc = function () {
            var clientWidth = docEI.clientWidth;
            if (!clientWidth) return;
            // 1920 is the base width. Everything scales relative to this.
            docEI.style.fontSize = 100 * (clientWidth / 1920) + "px";
            
            // Mobile fix: If screen is small, boost the font size
            if (clientWidth < 768) {
                docEI.style.fontSize = 100 * (clientWidth / 400) + "px";
            }
        };
    win.addEventListener("resize", recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

// Filtering Logic
function filter(category) {
    const cards = document.querySelectorAll('.card');
    const btns = document.querySelectorAll('.filter-bar button');
    
    // Update active button
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
