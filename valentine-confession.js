let currentSlide = 0;
const slideEl = document.getElementById('slides');
const bgm = document.getElementById('bgm');

// Fungsi update posisi slide
function updateSlide() {
  slideEl.style.transform = `translateX(-${currentSlide * 100}vw)`;

  // Atur musik hanya untuk slide selain ke-2
  if (currentSlide === 1) {
    bgm.pause();
  } else {
    bgm.play().catch(() => {});
  }
}

// Fungsi tombol 'Lanjut'
function nextSlide() {
  if (currentSlide < 2) {
    currentSlide++;
    updateSlide();
  }
}

// Fungsi tombol 'Kembali'
function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

// Saat dokumen siap
$(document).ready(function () {
  // Event buka surat
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

  // Kunci geser horizontal manual (swipe) di layar
  let startX = 0;
  slideEl.addEventListener('touchstart', function(e) {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
    }
  }, { passive: true });

  slideEl.addEventListener('touchmove', function(e) {
    const moveX = e.touches[0].clientX;
    const deltaX = moveX - startX;
    if (Math.abs(deltaX) > 10) {
      e.preventDefault(); // cegah swipe horizontal
    }
  }, { passive: false });

  // Tambahan anti zoom gesture (opsional)
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
});
