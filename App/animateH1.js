document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    let currentVisible = 1; // Start with one dot visible
  
    setInterval(() => {
      dots.forEach((dot, index) => {
        // Cycle through the dots based on the currentVisible counter
        dot.style.visibility = index < currentVisible ? 'visible' : 'hidden';
      });
  
      currentVisible = (currentVisible % 3) + 1; // Cycle through 1, 2, 3, then back to 1
    }, 500); // Adjust timing as needed
  });
