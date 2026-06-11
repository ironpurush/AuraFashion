/* ===================================================
   AURA FASHION — script.js
   Vanilla JavaScript — No frameworks
=================================================== */

'use strict';

// ── DOM References ────────────────────────────────
const grid            = document.getElementById('product-grid');
const noResults       = document.getElementById('no-results');
const resultsCount    = document.getElementById('results-count');
const brandFilter     = document.getElementById('brand-filter');
const sizeFilter      = document.getElementById('size-filter');
const availFilter     = document.getElementById('availability-filter');
const resetBtn        = document.getElementById('reset-filters');
const header          = document.getElementById('site-header');
const navToggle       = document.getElementById('nav-toggle');
const mainNav         = document.getElementById('main-nav');
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightbox-img');
const lightboxInfo    = document.getElementById('lightbox-info');
const lightboxClose   = document.getElementById('lightbox-close');
const lightboxBdrop   = document.getElementById('lightbox-backdrop');
const backToTop       = document.getElementById('back-to-top');

const WA_NUMBER = '918356059051';

// ── Render Products ───────────────────────────────
function renderProducts(list) {
  grid.innerHTML = '';

  if (!list.length) {
    noResults.hidden = false;
    resultsCount.textContent = '0';
    return;
  }

  noResults.hidden = true;
  resultsCount.textContent = list.length;

  const fragment = document.createDocumentFragment();

  list.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'product-card' + (p.soldOut ? ' sold-out' : '');
    card.setAttribute('aria-label', p.name);
    card.style.animationDelay = (idx % 12) * 0.045 + 's';

    const waMsg = encodeURIComponent(
      `Hello AURA Fashion,\n\nI would like to purchase this kurti.\n\nProduct ID: ${p.id}\nProduct Name: ${p.name}\nBrand: ${p.brand}\nSize: ${p.size}\n\nPlease share availability and payment details.\n\nThank you.`
    );
    const waLink = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

    card.innerHTML = `
      <div class="card-image-wrap" data-img="${p.image}" data-name="${p.name}" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.name} in full screen">
        <img
          class="card-image"
          src="${p.image}"
          alt="${p.name} — ${p.brand} Size ${p.size}"
          loading="lazy"
          decoding="async"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%23F2EDE4%22/%3E%3Ctext x=%2250%25%22 y=%2248%25%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23C4A882%22 text-anchor=%22middle%22%3EImage%3C/text%3E%3Ctext x=%2250%25%22 y=%2254%25%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23C4A882%22 text-anchor=%22middle%22%3ELoading...%3C/text%3E%3C/svg%3E'"
        />
        <span class="brand-badge" aria-hidden="true">${p.brand}</span>
        <div class="sold-out-badge" aria-hidden="true">
          <span class="sold-out-badge-text">Sold Out</span>
        </div>
        <div class="zoom-hint" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C1412" stroke-width="2" stroke-linecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </div>
      </div>

      <div class="card-body">
        <span class="card-id" title="Use this ID when ordering">${p.id}</span>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-meta">
          <span class="meta-size">Size ${p.size}</span>
        </div>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          ${p.soldOut
            ? `<button class="btn btn-whatsapp" disabled aria-disabled="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.813 9.813 0 01-5.027-1.383l-.36-.215-3.762.892.951-3.663-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Sold Out
              </button>`
            : `<a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp" aria-label="Buy ${p.name} (${p.id}) on WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.813 9.813 0 01-5.027-1.383l-.36-.215-3.762.892.951-3.663-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Buy on WhatsApp
              </a>`
          }
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
  attachImageListeners();
}

// ── Filtering ─────────────────────────────────────
function applyFilters() {
  const brand = brandFilter.value;
  const size  = sizeFilter.value;
  const avail = availFilter.value;

  const filtered = products.filter(p => {
    if (brand !== 'all' && p.brand !== brand) return false;
    if (size  !== 'all' && p.size  !== size)  return false;
    if (avail === 'available' && p.soldOut)    return false;
    if (avail === 'soldout'   && !p.soldOut)   return false;
    return true;
  });

  renderProducts(filtered);
}

brandFilter.addEventListener('change', applyFilters);
sizeFilter.addEventListener('change',  applyFilters);
availFilter.addEventListener('change', applyFilters);

resetBtn && resetBtn.addEventListener('click', () => {
  brandFilter.value = 'all';
  sizeFilter.value  = 'all';
  availFilter.value = 'all';
  applyFilters();
});

// ── Lightbox ──────────────────────────────────────
function openLightbox(img, name, id) {
  lightboxImg.src = img;
  lightboxImg.alt = name;
  lightboxInfo.innerHTML = `
    <span style="font-size:0.75rem;letter-spacing:0.14em;color:#B8962E;text-transform:uppercase;">${id}</span>
    <br/>${name}
  `;
  lightbox.hidden = false;
  lightboxBdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxBdrop.classList.remove('active');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxBdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

// Touch swipe to close on mobile
let touchStartY = 0;
lightbox.addEventListener('touchstart', e => { touchStartY = e.changedTouches[0].clientY; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const delta = e.changedTouches[0].clientY - touchStartY;
  if (delta > 80) closeLightbox();
});

function attachImageListeners() {
  document.querySelectorAll('.card-image-wrap').forEach(wrap => {
    const handler = () => {
      openLightbox(
        wrap.dataset.img,
        wrap.dataset.name,
        wrap.dataset.id
      );
    };
    wrap.addEventListener('click', handler);
    wrap.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });
}

// ── Header scroll effect ──────────────────────────
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  backToTop.hidden = y < 400;

  // Active nav link
  const sections = ['home', 'collection', 'contact'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
};

window.addEventListener('scroll', onScroll, { passive: true });

// ── Mobile Nav ────────────────────────────────────
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav when a link is clicked
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Smooth scroll for anchor links ───────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = header.offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Back to top ───────────────────────────────────
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Init ──────────────────────────────────────────
renderProducts(products);
onScroll();
