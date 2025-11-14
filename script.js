document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "Por favor completa todos los campos.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    status.style.color = "blue";
    status.textContent = "Ingresa un correo válido.";
    return;
  }

  // Simulación de envío exitoso
  status.style.color = "red";
  status.textContent = "¡Mensaje enviado con éxito!";

  // limpiar formulario
  document.getElementById("contactForm").reset();
});
