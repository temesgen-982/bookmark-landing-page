const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll("#tabs > div");

tabBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener("click", () => {
    // showing the tabs
    tabs.forEach((tab) => {
      tab.classList.add("hidden");
    });
    tabs[index].classList.remove("hidden");

    // to control the red underline
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabBtn.classList.add("active");
  });
});
