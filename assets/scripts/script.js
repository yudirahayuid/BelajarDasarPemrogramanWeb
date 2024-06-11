document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Pemuatan awal - mengatur teks tombol berdasarkan mode saat ini
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Tema Terang";
  } else {
    darkModeToggle.textContent = "Tema Gelap";
  }

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Perbarui teks tombol berdasarkan mode
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Tema Terang";
    } else {
      darkModeToggle.textContent = "Tema Gelap";
    }
  });
});
