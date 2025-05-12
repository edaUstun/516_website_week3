document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();

      if (name === "") {
        e.preventDefault();
        alert("Please enter your name.");
      } else {
        e.preventDefault(); // sayfa yenilenmesini engelle
        showModal(`Thanks, ${name}! Your message has been received.`);
        form.reset(); // formu temizle
      }
    });
  }

  // Modal kapatma
  const closeModalBtn = document.getElementById("close-modal");
  const modal = document.getElementById("success-modal");

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Modal dışında bir yere tıklanınca kapat
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  function showModal(message) {
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.style.display = "block";
  }
});
