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

document.addEventListener('DOMContentLoaded', function () {
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

//countdown

  // Set the date for the event
  const eventDate = new Date("August 21, 2024 00:00:00").getTime();

  function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the h1 element inside the countdown div
      document.querySelector("#countdown h1").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

      // If the countdown is over, display some text
      if (distance < 0) {
          clearInterval(countdownInterval);
          document.querySelector("#countdown h1").innerHTML = "The event has started!";
      }
  }

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Initial call to display the countdown immediately
  updateCountdown();