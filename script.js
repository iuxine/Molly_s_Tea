function filter(type, event) {
  const cards = document.querySelectorAll(".card");
  const buttons = document.querySelectorAll(".filter-bar button");

  buttons.forEach(b => b.classList.remove("active"));
  if (event) event.target.classList.add("active");

  cards.forEach(card => {
    if (type === "all" || card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
