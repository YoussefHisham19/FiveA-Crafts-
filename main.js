const filterBtns = document.querySelectorAll('button[data-filter]');
const products = document.querySelectorAll('.product');

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter"); 
    products.forEach(product => {
      if (filter === "all" || product.getAttribute("data-category") === filter) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});
filterBtns.forEach(btn=>{
  btn.addEventListener('click', function () {
filterBtns.forEach(btn=>btn.classList.remove('active'));
this.classList.add('active')
  })
})

