const modal = document.querySelector(".modal");
const modalTitle = document.querySelector("#modalTitle");
const cookie = document.querySelector(".cookie");

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.scroll);
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-program]").forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.program;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".modal__close").addEventListener("click", () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }
});

document.querySelector(".lead-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector(".form-status");

  if (!form.checkValidity()) {
    status.textContent = "Заполните имя, контакт и цель.";
    form.reportValidity();
    return;
  }

  const name = new FormData(form).get("name").trim();
  status.textContent = `${name}, заявка принята. Мы скоро подберем программу.`;
  form.reset();
});

document.querySelectorAll(".faq-item").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = question.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      item.querySelector(".faq-plus").textContent = "+";
      item.nextElementSibling.classList.remove("is-open");
    });

    if (!isOpen) {
      question.setAttribute("aria-expanded", "true");
      question.querySelector(".faq-plus").textContent = "×";
      answer.classList.add("is-open");
    }
  });
});

cookie.querySelector("button").addEventListener("click", () => {
  cookie.classList.add("is-hidden");
});
