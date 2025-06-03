const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

/*********** TYPEWRITER  *********/

document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    { id: "typewriter", text: "Introduktion:" },
    { id: "typewriter2", text: "Læs mere om:" },
  ];

  elements.forEach(({ id, text }) => {
    const target = document.getElementById(id);
    let index = 0;
    let hasStarted = false;

    function typeWriter() {
      if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 160);
      }
    }

    const observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            typeWriter();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(target);
  });
});
