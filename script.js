document.addEventListener('DOMContentLoaded', function() {
  // 1. Responsive Menu Functionality
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  
  const nav = document.querySelector('nav');
  const navList = document.querySelector('nav ul');
  
  if (nav && navList) {
    nav.insertBefore(menuToggle, navList);
    
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
    });
    
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function() {
        navList.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }

  // 2. Typing Animation
  const text = "Kazim";
  let index = 0;
  const typingTarget = document.getElementById("typing-name");

  if (typingTarget) {
    typingTarget.textContent = "";
    function typeWriter() {
      if (index < text.length) {
        typingTarget.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 200);
      }
    }
    typeWriter();
  }
});