// Botón "I'm Feeling Lucky" redirige a google.com
document.getElementById("lucky-btn").addEventListener("click", () => {
  const query = document.querySelector('input[name="q"]').value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&btnI`, "_blank");
  } else {
    window.open("https://www.google.com/", "_blank");
  }
});