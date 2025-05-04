document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        e.preventDefault();
        alert("Please enter your name.");
      } else {
        alert(`Thanks, ${name}! Your message has been received.`);
      }
    });
  }
});
