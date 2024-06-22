document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    showSection('masterclass', document.getElementById('masterclassBtn'));
  });

function showSection(sectionId, button) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
    });

    document.querySelectorAll('.menu-box button').forEach(btn => {
      btn.classList.remove('active-event');
    });
  
    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';

    button.classList.add('active-event');
  }