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

  if (currentSlide === 2) {
    $('#flowersContent').load('https://akariiff.github.io/flowers-for-her/');
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
});
