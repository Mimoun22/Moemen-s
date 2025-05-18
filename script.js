document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', () => {
    const videoURL = item.getAttribute('data-video');
    const isYouTube = videoURL.includes('youtube') || videoURL.includes('youtu.be');
    const iframe = document.createElement('iframe');

    iframe.src = isYouTube ? videoURL + '?autoplay=1' : videoURL;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    item.innerHTML = '';
    item.appendChild(iframe);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar div");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        obs.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.6
  });

  bars.forEach(bar => observer.observe(bar));
});
