/**
 * hero-3d.js
 * ─────────────────────────────────────────────────────────────
 * "Embers in the Dark" — Three.js particle system for the
 * Queen Mannel home page hero section.
 *
 * Renders rising ember particles with additive blending,
 * turbulent drift, mouse-parallax, and automatic lifecycle.
 *
 * Load as: <script type="module" src="js/hero-3d.js"></script>
 * Requires: <canvas id="heroCanvas"> inside the hero section.
 * ─────────────────────────────────────────────────────────────
 */

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';

(function () {
  'use strict';

  /* ══════════════════════════════════════════
   * 1. SETUP & GUARDS
   * ══════════════════════════════════════════ */

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return; // No canvas on this page — exit silently

  /* WebGL support check */
  try {
    const testCanvas = document.createElement('canvas');
    const ctx = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!ctx) throw new Error('No WebGL');
  } catch (e) {
    canvas.style.display = 'none';
    return;
  }

  const heroSection = canvas.parentElement;
  if (!heroSection) return;

  /* ══════════════════════════════════════════
   * 2. RENDERER
   * ══════════════════════════════════════════ */

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: false,
  });

  const isMobile = window.innerWidth <= 768;
  const pixelRatio = isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5);
  renderer.setPixelRatio(pixelRatio);

  function getHeroSize() {
    return {
      width: heroSection.clientWidth,
      height: heroSection.clientHeight,
    };
  }

  let heroSize = getHeroSize();
  renderer.setSize(heroSize.width, heroSize.height);

  /* ══════════════════════════════════════════
   * 3. SCENE & CAMERA
   * ══════════════════════════════════════════ */

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    heroSize.width / heroSize.height,
    0.1,
    1000
  );
  camera.position.z = 50;

  /* ══════════════════════════════════════════
   * 4. PARTICLE CONFIGURATION
   * ══════════════════════════════════════════ */

  const PARTICLE_COUNT = isMobile ? 50 : 400;

  /* Ember colors */
  const COLORS = [
    new THREE.Color(0x8a0303), // deep red
    new THREE.Color(0xff4500), // orange-red
    new THREE.Color(0xff8c00), // warm amber
  ];

  /* World-space bounds (visible area at z=0 given camera FOV) */
  const vFov = (camera.fov * Math.PI) / 180;
  const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
  const visibleWidth = visibleHeight * camera.aspect;

  const halfW = visibleWidth / 2;
  const halfH = visibleHeight / 2;

  /* ══════════════════════════════════════════
   * 5. GEOMETRY & ATTRIBUTES
   * ══════════════════════════════════════════ */

  const geometry = new THREE.BufferGeometry();

  const positions  = new Float32Array(PARTICLE_COUNT * 3);
  const colors     = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = new Float32Array(PARTICLE_COUNT * 2); // x, y per particle
  const opacities  = new Float32Array(PARTICLE_COUNT);
  const sizes      = new Float32Array(PARTICLE_COUNT);

  /**
   * Initialise or respawn a single particle.
   * @param {number} i — particle index
   * @param {boolean} randomY — if true, scatter across full height (initial fill)
   */
  function initParticle(i, randomY) {
    const i3 = i * 3;
    const i2 = i * 2;

    /* Position: across full width, bottom third (or random for initial fill) */
    positions[i3]     = (Math.random() - 0.5) * visibleWidth;
    positions[i3 + 1] = randomY
      ? (Math.random() - 0.5) * visibleHeight
      : -halfH + Math.random() * (visibleHeight * 0.33);
    positions[i3 + 2] = (Math.random() - 0.5) * 10; // slight z scatter

    /* Velocity */
    velocities[i2]     = (Math.random() - 0.5) * 0.4;   // x drift: -0.2 to 0.2
    velocities[i2 + 1] = 0.3 + Math.random() * 0.7;     // y upward: 0.3 to 1.0

    /* Opacity */
    opacities[i] = 0.3 + Math.random() * 0.7;

    /* Size */
    sizes[i] = 1.5 + Math.random() * 2.5;

    /* Color — pick one of the ember colors */
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    colors[i3]     = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  /* Fill all particles (scattered across full height for initial frame) */
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    initParticle(i, true);
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));
  geometry.setAttribute('aSize',    new THREE.BufferAttribute(sizes, 1));

  /* ══════════════════════════════════════════
   * 6. CUSTOM SHADER MATERIAL
   * ══════════════════════════════════════════ */

  const vertexShader = `
    attribute float aOpacity;
    attribute float aSize;
    varying float vOpacity;
    varying vec3 vColor;

    void main() {
      vOpacity = aOpacity;
      vColor = color;

      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vOpacity;
    varying vec3 vColor;

    void main() {
      /* Circular soft particle */
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;

      float alpha = smoothstep(0.5, 0.15, dist) * vOpacity;
      gl_FragColor = vec4(vColor, alpha);
    }
  `;

  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    vertexColors: true,
  });

  /* ══════════════════════════════════════════
   * 7. POINTS MESH
   * ══════════════════════════════════════════ */

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  /* ══════════════════════════════════════════
   * 8. MOUSE PARALLAX
   * ══════════════════════════════════════════ */

  const mouse = { x: 0, y: 0 };
  const parallax = { x: 0, y: 0 };
  const PARALLAX_STRENGTH = 2.0; // max world-unit shift (~15px equiv)
  const PARALLAX_DAMPING  = 0.05;

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      /* Normalise to -1 … +1 relative to hero center */
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = 0;
      mouse.y = 0;
    });
  }

  /* ══════════════════════════════════════════
   * 9. ANIMATION LOOP
   * ══════════════════════════════════════════ */

  const clock = new THREE.Clock();
  let animationId = null;

  function animate() {
    animationId = requestAnimationFrame(animate);

    /* Pause when tab is hidden */
    if (document.hidden) return;

    const elapsed = clock.getElapsedTime();
    const delta   = Math.min(clock.getDelta(), 0.05); // clamp to avoid jumps

    const posAttr    = geometry.getAttribute('position');
    const opacAttr   = geometry.getAttribute('aOpacity');
    const posArray   = posAttr.array;
    const opacArray  = opacAttr.array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const i2 = i * 2;

      /* ── Turbulence (cheap sin-based) ── */
      const turbFreqX = 0.8 + (i % 7) * 0.1;
      const turbFreqY = 0.5 + (i % 5) * 0.05;
      const turbX = Math.sin(elapsed * turbFreqX + i * 0.37) * 0.06;
      const turbY = Math.cos(elapsed * turbFreqY + i * 0.53) * 0.03;

      /* ── Update position ── */
      posArray[i3]     += velocities[i2]     + turbX;
      posArray[i3 + 1] += velocities[i2 + 1] + turbY;

      /* ── Fade out near top ── */
      const normY = (posArray[i3 + 1] + halfH) / visibleHeight; // 0 = bottom, 1 = top
      const fadeFactor = 1.0 - Math.max(0, (normY - 0.6) / 0.4); // fade in top 40%
      opacArray[i] = (0.3 + Math.random() * 0.05) * fadeFactor + (1.0 - fadeFactor) * 0;

      /* If the base opacity was higher, preserve some of it */
      const baseOpacity = 0.3 + ((i * 7) % 10) / 10 * 0.7; // deterministic per particle
      opacArray[i] = baseOpacity * fadeFactor;

      /* ── Respawn at bottom if off the top ── */
      if (posArray[i3 + 1] > halfH + 2) {
        initParticle(i, false);

        /* Re-set color in buffer */
        const colAttr = geometry.getAttribute('color');
        const colArray = colAttr.array;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        colArray[i3]     = color.r;
        colArray[i3 + 1] = color.g;
        colArray[i3 + 2] = color.b;
        colAttr.needsUpdate = true;
      }

      /* ── Wrap horizontal ── */
      if (posArray[i3] > halfW + 2) {
        posArray[i3] = -halfW - 1;
      } else if (posArray[i3] < -halfW - 2) {
        posArray[i3] = halfW + 1;
      }
    }

    posAttr.needsUpdate  = true;
    opacAttr.needsUpdate = true;

    /* ── Mouse parallax ── */
    if (!isTouchDevice) {
      parallax.x += (mouse.x * PARALLAX_STRENGTH - parallax.x) * PARALLAX_DAMPING;
      parallax.y += (-mouse.y * PARALLAX_STRENGTH - parallax.y) * PARALLAX_DAMPING;
      points.position.x = parallax.x;
      points.position.y = parallax.y;
    }

    renderer.render(scene, camera);
  }

  /* ══════════════════════════════════════════
   * 10. VISIBILITY HANDLING
   * ══════════════════════════════════════════ */

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      clock.stop();
    } else {
      clock.start();
      if (!animationId) {
        animate();
      }
    }
  });

  /* ══════════════════════════════════════════
   * 11. RESIZE HANDLER
   * ══════════════════════════════════════════ */

  let resizeTimeout = null;

  window.addEventListener('resize', () => {
    /* Debounce resize for performance */
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      heroSize = getHeroSize();
      camera.aspect = heroSize.width / heroSize.height;
      camera.updateProjectionMatrix();
      renderer.setSize(heroSize.width, heroSize.height);
    }, 150);
  });

  /* ══════════════════════════════════════════
   * 12. START
   * ══════════════════════════════════════════ */

  animate();

})();
