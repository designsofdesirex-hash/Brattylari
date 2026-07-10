/**
 * Cloudinary-backed gallery loader for Mrs Lari.
 * Drop into assets/js/ and include after main.js, or merge into main.js.
 *
 * Single unified gallery — no category tabs. Every photo shares ONE tag
 * in Cloudinary; this pulls that tag, sorts newest-first, and renders
 * everything into one container.
 *
 * Requires (set these to your actual values):
 *   - CLOUD_NAME: your Cloudinary cloud name
 *   - GALLERY_TAG: the single tag applied to every photo, regardless of subject
 *   - WATERMARK_PUBLIC_ID: public ID of the watermark asset you uploaded (optional)
 */
const CLOUD_NAME = 'gakgr6wq';
const GALLERY_TAG = 'gallery';                // tag every upload with this, no subcategories needed
const WATERMARK_PUBLIC_ID = ''; // set to '' to disable watermarking

/**
 * Builds a delivery URL for a Cloudinary asset, with optional watermark overlay
 * and automatic format/quality optimization.
 */
function buildImageUrl(publicId, { watermark = true, width = null } = {}) {
  const transforms = [];
  if (watermark && WATERMARK_PUBLIC_ID) {
    // l_ = overlay public id, g_ = gravity, x_/y_ = offset, o_ = opacity, w_ = overlay width
    transforms.push(`l_${WATERMARK_PUBLIC_ID},g_south_east,x_20,y_20,o_60,w_150`);
  }
  if (width) {
    transforms.push(`w_${width},c_limit`);
  }
  transforms.push('f_auto', 'q_auto'); // auto format + quality, always keep these last
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms.join('/')}/${publicId}`;
}

/**
 * Fetches the current list of images sharing GALLERY_TAG.
 * Returns [] on failure rather than throwing.
 */
async function fetchGalleryImages() {
  const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${GALLERY_TAG}.json`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Cloudinary list fetch failed: ${res.status}`);
    const data = await res.json();
    const resources = data.resources || [];
    // Cloudinary doesn't guarantee list order — sort newest first.
    resources.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return resources;
  } catch (err) {
    console.error(`Failed to load gallery (tag "${GALLERY_TAG}"):`, err);
    return [];
  }
}

/**
 * Renders every image into a single container element.
 * Replace the tile markup below with your existing gallery tile structure
 * (check the gradient-placeholder tiles currently in gallery.html).
 */
function renderGallery(container, images) {
  container.innerHTML = '';
  if (images.length === 0) {
    container.innerHTML = '<p class="gallery-empty">No photos yet.</p>';
    return;
  }
  images.forEach((img) => {
    const tile = document.createElement('div');
    tile.className = 'gallery-tile';

    const thumb = document.createElement('img');
    thumb.src = buildImageUrl(img.public_id, { width: 600 });
    thumb.loading = 'lazy';
    thumb.alt = img.public_id.split('/').pop();
    thumb.dataset.fullSrc = buildImageUrl(img.public_id); // for lightbox, full-res

    tile.appendChild(thumb);
    container.appendChild(tile);
  });
}

/**
 * Loads and renders the gallery into whichever container is on the page.
 * Call this on page load.
 */
async function loadGallery() {
  const container = document.querySelector('[data-gallery]');
  if (!container) {
    console.error('No element with [data-gallery] found — add that attribute to your gallery grid container in gallery.html.');
    return;
  }
  const images = await fetchGalleryImages();
  renderGallery(container, images);
}

document.addEventListener('DOMContentLoaded', loadGallery);
