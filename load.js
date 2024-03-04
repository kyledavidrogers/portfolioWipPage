document.addEventListener('DOMContentLoaded', function() {
    var loadingBar = document.getElementById('loading-bar');
    var loadingPercentage = document.getElementById('loading-percentage');
    var width = 0;
    
    var loading = setInterval(frame, 40); // Adjust the interval for smoother animation
    
    function frame() {
      if (width >= 100) {
        clearInterval(loading);
        document.getElementById('loading-wrapper').style.transform = 'translateY(100vh)';
        setTimeout(() => document.getElementById('loading-wrapper').remove(), 1000); // Wait for slide animation
      } else {
        width++; 
        var progress = easingFunction(width / 100) * 100; // Apply easing function to progress
        loadingBar.style.width = progress + '%';
        loadingPercentage.innerHTML = Math.round(progress) + '%';
      }
    }
  
    function easingFunction(t) { // Using easeInOutQuad for natural progress feel
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  });
  