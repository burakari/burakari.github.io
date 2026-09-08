(function () {
  "use strict";

  // Mobil menü aç/kapa
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  // Ürün kategori filtresi
  var tabs = document.querySelectorAll(".cat-tab");
  var cards = document.querySelectorAll(".product-card");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
      tab.setAttribute("aria-selected", "true");
      var cat = tab.getAttribute("data-cat");
      cards.forEach(function (card) {
        var match = cat === "all" || card.getAttribute("data-cat") === cat;
        card.classList.toggle("hidden", !match);
      });
    });
  });
})();
