import DefaultTheme from 'vitepress/theme';
import './custom.css';

function closeImagePreview() {
  document.querySelector('.doc-image-preview')?.remove();
  document.body.classList.remove('doc-image-preview-open');
}

function openImagePreview(image: HTMLImageElement) {
  closeImagePreview();

  const overlay = document.createElement('div');
  overlay.className = 'doc-image-preview';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', image.alt || '图片预览');

  const preview = document.createElement('img');
  preview.src = image.currentSrc || image.src;
  preview.alt = image.alt || '';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'doc-image-preview-close';
  closeButton.setAttribute('aria-label', '关闭图片预览');
  closeButton.textContent = '×';

  overlay.append(preview, closeButton);
  document.body.appendChild(overlay);
  document.body.classList.add('doc-image-preview-open');

  overlay.addEventListener('click', (event) => {
    if (event.target !== preview) closeImagePreview();
  });
}

if (typeof window !== 'undefined') {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;
    if (!target.closest('.vp-doc')) return;

    event.preventDefault();
    openImagePreview(target);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeImagePreview();
  });
}

export default DefaultTheme;
