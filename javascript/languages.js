document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll(
    ".language-switcher button"
  );
  const content = {
    home: document.getElementById("lanHome"),
    about: document.getElementById("lanAbout"),
    projects: document.getElementById("lanProjects"),
    contact: document.getElementById("lanContact"),
  };

  const loadLanguage = (lang) => {
    fetch(`./assets/json/${lang}.json`)
      .then((response) => response.json())
      .then((data) => {
        content.home.textContent = data.home;
        content.about.textContent = data.about;
        content.projects.textContent = data.projects;
        content.contact.textContent = data.contact;
        localStorage.setItem("language", lang); // Save the selected language
      })
      .catch((error) => console.error("Error loading language file:", error));
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      loadLanguage(lang);
    });
  });

  const savedLanguage = localStorage.getItem("language") || "de";
  loadLanguage(savedLanguage);
});

// languageButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const lang = button.getAttribute("data-lang");
//     fetch(`./assets/json/${lang}.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         content.home.textContent = data.home;
//         content.about.textContent = data.about;
//         content.projects.textContent = data.projects;
//         content.contact.textContent = data.contact;
//       })
//       .catch((error) => console.error("Error loading language file:", error));
//   });
// });