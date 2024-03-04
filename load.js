document.addEventListener('DOMContentLoaded', function() {
  var loadingBar = document.getElementById('loading-bar');
  var loadingPercentage = document.getElementById('loading-percentage');
  var width = 0;

  var loading = setInterval(frame, 20);

  function frame() {
    if (width >= 100) {
      clearInterval(loading);
      var loadingWrapper = document.getElementById('loading-wrapper');
      loadingWrapper.style.transition = 'transform 1s cubic-bezier(0.55, 0.055, 0.675, 0.19)'; // Using cubic-bezier for zippy effect
      loadingWrapper.style.transform = 'translateY(100vh)';
      setTimeout(() => loadingWrapper.remove(), 1000);
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
