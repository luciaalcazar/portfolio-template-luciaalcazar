const hero = document.querySelector('.hero');
const illo = document.querySelector('.hero-illustration');

if (hero && illo) {
  hero.addEventListener('mousemove', (e) => {
    const heroRect = hero.getBoundingClientRect();
    const illoRect = illo.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const illoCenterX = illoRect.left + illoRect.width / 2;
    const illoCenterY = illoRect.top + illoRect.height / 2;

    const distanceX = mouseX - illoCenterX;
    const distanceY = mouseY - illoCenterY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    const triggerDistance = 150; // 🔑 solo si te acercas

    if (distance < triggerDistance) {
      const moveX = -distanceX * 0.3;
      const moveY = -distanceY * 0.3;

      const maxX = heroRect.width - illo.offsetWidth;
      const maxY = heroRect.height - illo.offsetHeight;

      let newLeft = illo.offsetLeft + moveX;
      let newTop = illo.offsetTop + moveY;

      newLeft = Math.max(0, Math.min(maxX, newLeft));
      newTop = Math.max(0, Math.min(maxY, newTop));

      illo.style.left = `${newLeft}px`;
      illo.style.top = `${newTop}px`;
    }
  });
}