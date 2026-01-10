const tabs = document.querySelectorAll(".tabs button");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active states
    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    // Activate selected
    tab.classList.add("active");
    document.getElementById(tab.dataset.page).classList.add("active");
  });
});
