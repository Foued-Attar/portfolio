document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.querySelector('.custom-cursor');
  const cursorWidth = customCursor.offsetWidth;
  const cursorHeight = customCursor.offsetHeight;

  document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX - cursorWidth / 2}px, ${e.clientY - cursorHeight / 2}px)`;
    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element) {
      const backgroundColor = window.getComputedStyle(element).backgroundColor;
      const isLightBackground = isLight(backgroundColor);
      if (isLightBackground) {
        customCursor.classList.add('black');
      } else {
        customCursor.classList.remove('black');
      }
    }
  });

  document.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
  });

  document.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
  });

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      customCursor.classList.add('grow');
      customCursor.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
      customCursor.classList.remove('grow');
    });
  });

  function onScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll);

  onScroll();
});

function isLight(color) {
  const rgb = color.match(/\d+/g);
  const r = parseInt(rgb[0]);
  const g = parseInt(rgb[1]);
  const b = parseInt(rgb[2]);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}

document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.querySelector('.custom-cursor');
  const cursorWidth = customCursor.offsetWidth;
  const cursorHeight = customCursor.offsetHeight;
  const imageHoverContainer = document.querySelector('.image-hover-container');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX - cursorWidth / 2}px, ${e.clientY - cursorHeight / 2}px)`;

    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element && element.dataset.image) {
      const imageUrl = element.dataset.image;
      imageHoverContainer.style.backgroundImage = `url(${imageUrl})`;
      imageHoverContainer.style.left = `${e.clientX + 20}px`;
      imageHoverContainer.style.top = `${e.clientY + 20}px`;
      imageHoverContainer.style.display = 'block';
    } else {
      imageHoverContainer.style.display = 'none';
    }
  });

  document.querySelectorAll('.mouse-pos-list-image-inner').forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const imageUrl = e.currentTarget.dataset.image;
      if (imageUrl) {
        const imageHover = document.createElement('div');
        imageHover.classList.add('image-hover');
        imageHover.style.backgroundImage = `url(${imageUrl})`;
        imageHoverContainer.appendChild(imageHover);
        imageHoverContainer.style.display = 'block';
      }
    });

    item.addEventListener('mouseleave', () => {
      while (imageHoverContainer.firstChild) {
        imageHoverContainer.removeChild(imageHoverContainer.firstChild);
      }
      imageHoverContainer.style.display = 'none';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const customCursor = document.querySelector('.custom-cursor');
  const cursorWidth = customCursor.offsetWidth;
  const cursorHeight = customCursor.offsetHeight;
  const imageHoverContainer = document.querySelector('.image-hover-container');

  document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX - cursorWidth / 2}px, ${e.clientY - cursorHeight / 2}px)`;

    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element && element.dataset.imageUrl) {
      const imageUrl = element.dataset.imageUrl;
      imageHoverContainer.style.backgroundImage = `url(${imageUrl})`;
      imageHoverContainer.style.left = `${e.clientX + 20}px`;
      imageHoverContainer.style.top = `${e.clientY + 20}px`;
      imageHoverContainer.style.display = 'block';
    } else {
      imageHoverContainer.style.display = 'none';
    }
  });

  document.querySelectorAll('[data-image-url]').forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const imageUrl = e.currentTarget.dataset.imageUrl;
      if (imageUrl) {
        const imageHover = document.createElement('div');
        imageHover.classList.add('image-hover');
        imageHover.style.backgroundImage = `url(${imageUrl})`;
        imageHoverContainer.appendChild(imageHover);
        imageHoverContainer.style.display = 'block';
      }
    });

    item.addEventListener('mouseleave', () => {
      while (imageHoverContainer.firstChild) {
        imageHoverContainer.removeChild(imageHoverContainer.firstChild);
      }
      imageHoverContainer.style.display = 'none';
    });
  });
});
