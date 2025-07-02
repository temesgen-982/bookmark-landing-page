const faqBtns = document.querySelectorAll(".faq-btn");
const faqAnswers = document.querySelectorAll(".faq > p");

faqBtns.forEach((faqBtn) => {
  faqBtn.addEventListener("click", () => {
    const faqAnswerID = faqBtn.getAttribute("aria-controls");
    const currentAnswer = document.getElementById(faqAnswerID);
    const currentIcon = faqBtn.querySelector(".faq-icon");
    // if already open, close it
    if (!currentAnswer.classList.contains("hidden")) {
      currentAnswer.classList.add("hidden");
      faqBtn.setAttribute("aria-expanded", "false");
      currentIcon.classList.remove("open");
    } else {
      // if you want multile answers open at once, remove these two loops
      faqAnswers.forEach((answer) => answer.classList.add("hidden"));
      faqBtns.forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        const icon = btn.querySelector(".faq-icon");
        icon?.classList.remove("open");
      });

      currentAnswer.classList.remove("hidden");
      faqBtn.setAttribute("aria-expanded", "true");
      currentIcon.classList.add("open");
    }
  });
});
