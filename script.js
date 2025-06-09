window.addEventListener("DOMContentLoaded", () => {
  const text = "Kazim";
  let index = 0;
  const typingTarget = document.getElementById("typing-name");

  if (typingTarget) {
    typingTarget.textContent = "";
    function typeWriter() {
      if (index < text.length) {
        typingTarget.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 200); // slower animation
      }
    }
    typeWriter();
  }
});
// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

// Style the button