document.addEventListener('DOMContentLoaded', function() {
    var loadingBar = document.getElementById('loading-bar');
    var loadingPercentage = document.getElementById('loading-percentage');
    var width = 0;
  
    var loading = setInterval(frame, 30);
  
    function frame() {
      if (width >= 100) {
        clearInterval(loading);
        setTimeout(() => { // Delay before starting fade
          var loadingWrapper = document.getElementById('loading-wrapper');
          loadingWrapper.style.transition = 'opacity 1s ease-out';
          loadingWrapper.style.opacity = '0';
          setTimeout(() => loadingWrapper.remove(), 1000);
        }, 400); // 0.4s delay
      } else {
        width += 1.6;
        var progress = easingFunction(width / 100) * 100;
        loadingBar.style.width = progress + '%';
        loadingPercentage.innerHTML = Math.round(progress) + '%';
      }
    }
  
    function easingFunction(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
  });