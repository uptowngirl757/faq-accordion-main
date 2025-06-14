const toggleBtns = document.querySelectorAll(".faq__toggle");
const toggleImgs = document.querySelectorAll(".faq__question img");

function toggleAccordion(button) {
  const answerId = button.getAttribute("aria-controls");
  const answer = document.getElementById(answerId);
  const questionContainer = button.closest(".faq__question");
  const img = questionContainer.querySelector("img");
  if (button.getAttribute("aria-expanded") === "true") {
    answer.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
    img.src = "./assets/images/icon-plus.svg";
  } else {
    answer.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
    img.src = "./assets/images/icon-minus.svg";
  }
}

toggleBtns.forEach((toggleBtn) =>
  toggleBtn.addEventListener("click", () => {
    toggleAccordion(toggleBtn);
  })
);
toggleImgs.forEach((toggleImg, index) =>
  toggleImg.addEventListener("click", () => {
    const correspondingBtn = toggleBtns[index];
    toggleAccordion(correspondingBtn);
  })
);
