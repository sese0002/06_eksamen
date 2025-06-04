/*********** TYPEWRITER  *********/

document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    { id: "typewriter", text: "Introduktion:" },
    { id: "typewriter2", text: "Læs mere om:" },
    { id: "typewriter3", text: "Læs mere om:" },
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
