const filterBtns = document.querySelectorAll('button[data-filter]');
const products = document.querySelectorAll('.product');

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter"); // مسافة اتشالت
    products.forEach(product => {
      if (filter === "all" || product.getAttribute("data-category") === filter) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});