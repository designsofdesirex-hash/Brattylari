/**
 * booking-gate.js
 * ─────────────────────────────────────────────────────────────
 * Conditional booking flow for the Queen Mannel booking page.
 *
 * Controls:
 *   • Identity split (Slave / Fetishist card selection)
 *   • Path reveal with GSAP animation
 *   • Contract checkbox gating → unlocks Tally iframe
 *   • Back button resets everything
 *
 * CRITICAL: iframe src is NEVER set until the checkbox is checked.
 *           The real URL lives in data-src; src starts as about:blank.
 * ─────────────────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Element References ── */
  const split            = document.getElementById('bookingSplit');
  const cardSlave        = document.getElementById('cardSlave');
  const cardFetishist    = document.getElementById('cardFetishist');
  const pathSlave        = document.getElementById('pathSlave');
  const pathFetishist    = document.getElementById('pathFetishist');
  const backSlave        = document.getElementById('backSlave');
  const backFetishist    = document.getElementById('backFetishist');
  const slaveAgree       = document.getElementById('slaveAgree');
  const fetishistAgree   = document.getElementById('fetishistAgree');
  const slaveFormLock    = document.getElementById('slaveFormLock');
  const fetishistFormLock = document.getElementById('fetishistFormLock');
  const slaveTally       = document.getElementById('slaveTally');
  const fetishistTally   = document.getElementById('fetishistTally');

  /* ── Guard: exit if not on booking page ── */
  if (!split) return;

  /* ──────────────────────────────────────────
   * showPath(pathKey)
   * Hides the split cards and reveals the
   * chosen path with an optional GSAP anim.
   * ────────────────────────────────────────── */
  function showPath(pathKey) {
    split.style.display = 'none';

    const target = pathKey === 'slave' ? pathSlave : pathFetishist;
    target.classList.add('active');

    /* GSAP fade-in-up if available */
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(
        target,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }

    /* Smooth scroll to the revealed path */
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }

  /* ──────────────────────────────────────────
   * resetToSplit()
   * Hides both paths, resets checkboxes,
   * re-locks forms, unloads iframes, and
   * scrolls back to the split cards.
   * ────────────────────────────────────────── */
  function resetToSplit() {
    /* Hide both paths */
    pathSlave.classList.remove('active');
    pathFetishist.classList.remove('active');

    /* Show split cards */
    split.style.display = '';

    /* Reset checkboxes */
    if (slaveAgree)     slaveAgree.checked = false;
    if (fetishistAgree) fetishistAgree.checked = false;

    /* Re-lock forms */
    if (slaveFormLock)    slaveFormLock.classList.remove('unlocked');
    if (fetishistFormLock) fetishistFormLock.classList.remove('unlocked');

    /* Unload iframes — never leave a form loaded after reset */
    if (slaveTally)    slaveTally.src = 'about:blank';
    if (fetishistTally) fetishistTally.src = 'about:blank';

    /* Scroll back to split */
    setTimeout(() => {
      split.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }

  /* ── Card Click Handlers ── */
  cardSlave.addEventListener('click', () => showPath('slave'));
  cardFetishist.addEventListener('click', () => showPath('fetishist'));

  /* ── Back Button Handlers ── */
  backSlave.addEventListener('click', resetToSplit);
  backFetishist.addEventListener('click', resetToSplit);

  /* ──────────────────────────────────────────
   * handleGating(checkbox, lock, iframe)
   * Binds checkbox change to lock/unlock the
   * form container and load/unload the iframe.
   * ────────────────────────────────────────── */
  function handleGating(checkbox, lock, iframe) {
    if (!checkbox || !lock || !iframe) return;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        /* Unlock the form */
        lock.classList.add('unlocked');

        /* Load the iframe only if it hasn't been loaded yet */
        if (
          !iframe.src ||
          iframe.src === 'about:blank' ||
          iframe.src.endsWith('about:blank')
        ) {
          iframe.src = iframe.dataset.src;
        }
      } else {
        /* Re-lock the form */
        lock.classList.remove('unlocked');

        /* Unload the iframe for safety */
        iframe.src = 'about:blank';
      }
    });
  }

  /* ── Bind Gating to Both Paths ── */
  handleGating(slaveAgree, slaveFormLock, slaveTally);
  handleGating(fetishistAgree, fetishistFormLock, fetishistTally);

});
