function filterMenu(category, btn) {
    const items = document.querySelectorAll('.item');
    const buttons = document.querySelectorAll('.nav-btn');

    // Update active button state
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    items.forEach(item => {
        // Start animation out
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';

        setTimeout(() => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                // Trigger reflow for animation
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
}
