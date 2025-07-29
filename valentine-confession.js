let currentSlide = 0;
const slideEl = document.getElementById('slides');
const bgm = document.getElementById('bgm');

function updateSlide() {
  slideEl.style.transform = `translateX(-${currentSlide * 100}vw)`;

  if (currentSlide === 1) {
    bgm.pause();
  } else {
    bgm.play().catch(() => {});
  }
}

function nextSlide() {
  if (currentSlide < 2) {
    currentSlide++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

$(document).ready(function () {
  $('#messageState').change(function () {
    const msg = $('.message'), heart = $('.heart');
    if (this.checked) {
      bgm.play().catch(() => {});
      msg.addClass('openNor');
      heart.addClass('openHer');
    } else {
      msg.removeClass('openNor');
      heart.removeClass('openHer');
    }
  });

  // Cegah swipe horizontal hanya pada slides, tapi tetap izinkan klik elemen dalamnya
  slideEl.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) return; // multi-touch? skip
    this._startX = e.touches[0].clientX;
  }, { passive: true });

  slideEl.addEventListener('touchmove', function(e) {
    const deltaX = e.touches[0].clientX - this._startX;
    if (Math.abs(deltaX) > 10) {
      e.preventDefault(); // cegah geser horizontal
    }
  }, { passive: false });
});
