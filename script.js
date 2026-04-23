function filterMenu(category, element) {
    const items = document.querySelectorAll('.menu-item');
    
    // 1. Handle the "Active" button styling
    const buttons = document.querySelectorAll('nav a');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    // 2. Filter the items
    items.forEach(item => {
        // We use a small timeout or CSS classes for a fade effect
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; }, 10);
        } else {
            item.style.opacity = '0';
            item.style.display = 'none';
        }
    });
}
