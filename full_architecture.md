# Queen Mannel - Full Website Architecture & Source Code

This document contains the complete source code and structure for the website.


## File: index.html


`$ext

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Queen Mannel — Moroccan Dominatrix</title>
  <meta name="description" content="Official site of Queen Mannel. Moroccan Dominatrix. Femdom content, custom sessions, and elite slave training. Enter if you dare.">
  <meta property="og:title" content="Queen Mannel — Moroccan Dominatrix">
  <meta property="og:description" content="Cold. Elegant. Merciless. Explore rules, services, and request an audience.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- ============================================================
       AGE GATE
       ============================================================ -->
  <div class="age-gate" id="ageGate">
    <div class="age-gate-content">
      <div class="age-gate-logo">Queen Mannel</div>
      <p class="age-gate-text">This site contains adult content.<br>You must be 18 or older to enter.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary" id="ageEnter">E N T E R</button>
        <button class="btn btn-ghost" id="ageLeave">L E A V E</button>
      </div>
    </div>
  </div>

  <!-- ============================================================
       CUSTOM CURSOR
       ============================================================ -->
  <div class="cursor-ring" id="cursorRing"></div>

  <!-- ============================================================
       NAVIGATION
       ============================================================ -->
  <nav class="nav" id="nav">
    <a href="index.html" class="nav-brand">
      <div class="nav-logo">Queen Mannel</div>
      <div class="nav-motto">Your Eternal Addiction</div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="nav-link nav-link--active">H O M E</a>
      <a href="rules.html" class="nav-link">R U L E S   &   S E R V I C E S</a>
      <a href="gallery.html" class="nav-link">G A L L E R Y</a>
      <a href="booking.html" class="nav-link">B O O K I N G</a>
    </div>
    <div class="nav-socials">
      <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="nav-social" aria-label="Threads">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">@</text></svg>
      </a>
      <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener" class="nav-social" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- ============================================================
       HERO SECTION
       ============================================================ -->
  <section class="hero" id="hero">
    <div class="hero-video-placeholder"></div>
    <div class="hero-overlay"></div>
    <canvas class="hero-canvas" id="heroCanvas"></canvas>
    <div class="hero-content">
      <h1 class="hero-title">QUEEN MANNEL</h1>
      <p class="hero-subtitle">Moroccan Dominatrix · Cold · Elegant · Merciless</p>

      <div class="hero-specialties">
        <div class="specialty-item">Verbal Humiliation</div>
        <div class="specialty-item">Psychological Control</div>
        <div class="specialty-item">Chastity</div>
        <div class="specialty-item">Foot Worship</div>
        <div class="specialty-item">Discipline &amp; Reward</div>
        <div class="specialty-item">Elite Slave Training</div>
      </div>

      <div class="hero-cta">
        <a href="#intro" class="btn btn-primary btn-large">E N T E R &nbsp; M Y &nbsp; W O R L D &nbsp; →</a>
      </div>
    </div>
  </section>

  <!-- ============================================================
       INTRO SECTION
       ============================================================ -->
  <section class="section section--dark" id="intro">
    <div class="section-inner">
      <div class="intro-split reveal">
        <div class="intro-image">
          <img src="image2.jpg" alt="Queen Mannel">
        </div>
        <div class="intro-content">
          <hr class="intro-rule">
          <p class="intro-text">Dominance runs in my blood. It is not an act, it is a lifestyle. Every rule you read here is the price of my attention.</p>
          <hr class="intro-rule">
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       WHAT AWAITS — FEATURE GRID
       ============================================================ -->
  <section class="section section--darker">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">What Awaits</h2>
        <p class="section-subtitle">Exclusive content on Threads</p>
      </div>
      <div class="features">
        <div class="feature-card reveal">
          <span class="feature-number">I</span>
          <h3 class="feature-title">Exclusive Femdom Videos</h3>
          <p class="feature-text">Produced, directed, and starring me. Each video a masterclass in control.</p>
          <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="feature-link">View on Threads →</a>
        </div>
        <div class="feature-card reveal">
          <span class="feature-number">II</span>
          <h3 class="feature-title">Photography</h3>
          <p class="feature-text">Feet, outfits, tools, scenes. Every frame deliberate.</p>
          <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="feature-link">View on Threads →</a>
        </div>
        <div class="feature-card reveal">
          <span class="feature-number">III</span>
          <h3 class="feature-title">Orders &amp; Challenges</h3>
          <p class="feature-text">Tasks for the obedient. Trials for the devoted. Not for the faint.</p>
          <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="feature-link">View on Threads →</a>
        </div>
        <div class="feature-card reveal">
          <span class="feature-number">IV</span>
          <h3 class="feature-title">Custom Content</h3>
          <p class="feature-text">Commissioned work for those who have earned the privilege.</p>
          <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="feature-link">View on Threads →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       TESTIMONIALS
       ============================================================ -->
  <section class="section section--dark">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">Words From Those Who Served</h2>
      </div>
      <div class="testimonials-carousel reveal">
        <div class="carousel-track">
          <!-- SLIDE 1 -->
          <div class="carousel-slide">
            <div class="testimonials">
              <div class="testimonial-card">
                <p class="testimonial-quote">She dismantled everything I thought I knew about control. I am better for it.</p>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-quote">There is no negotiation with her presence. You either submit or you leave. I stayed.</p>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-quote">Discipline was a word I thought I understood. She gave it meaning.</p>
              </div>
            </div>
          </div>
          <!-- SLIDE 2 -->
          <div class="carousel-slide">
            <div class="testimonials">
              <div class="testimonial-card">
                <p class="testimonial-quote">I came seeking punishment, but I found absolute clarity. Her commands are my only truth.</p>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-quote">You do not just give her your time; you surrender your autonomy. It is the greatest privilege.</p>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-quote">Every rule she enforces chips away at your ego until only obedience remains.</p>
              </div>
            </div>
          </div>
          <!-- SLIDE 3 -->
          <div class="carousel-slide">
            <div class="testimonials">
              <div class="testimonial-card">
                <p class="testimonial-quote">Her expectations are impossible, yet you will tear yourself apart trying to meet them.</p>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-quote">The fear she instills is only eclipsed by the desperate need for her approval.</p>
              </div>
              <a href="booking.html" class="testimonial-card cta-grid-card">
                <h3 class="cta-slide-title">Will Your Words Be Next?</h3>
                <p class="cta-slide-text">Submit your application.</p>
                <span class="feature-link">REQUEST AN AUDIENCE</span>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-btn" id="carousel-prev">←</button>
          <div class="carousel-indicators">
            <span class="carousel-dot active"></span>
            <span class="carousel-dot"></span>
            <span class="carousel-dot"></span>
          </div>
          <button class="carousel-btn" id="carousel-next">→</button>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       CTA BAND
       ============================================================ -->
  <div class="cta-band">
    <a href="rules.html" class="cta-card">
      <p class="cta-card-label">Navigate</p>
      <h3 class="cta-card-title">Read the Rules</h3>
    </a>
    <a href="gallery.html" class="cta-card">
      <p class="cta-card-label">Observe</p>
      <h3 class="cta-card-title">View the Gallery</h3>
    </a>
    <a href="booking.html" class="cta-card">
      <p class="cta-card-label">Submit</p>
      <h3 class="cta-card-title">Request an Audience</h3>
    </a>
  </div>

  <!-- ============================================================
       FOOTER
       ============================================================ -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-portrait">
        <div class="footer-portrait-frame">
          <!-- PHOTO PLACEHOLDER -->
        </div>
      </div>
      <div class="footer-center">
        <p class="footer-tagline">"I am the fire of any fire I fear"</p>
      </div>
      <div class="footer-socials">
        <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener">Threads</a>
        <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener">@mannel_dom19</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Queen Mannel</span>
      <span class="footer-divider">·</span>
      <span>18+ Only</span>
      <span class="footer-divider">·</span>
      <a href="rules.html">Rules & Services</a>
      <span class="footer-divider">·</span>
      <a href="terms.html">Terms & Privacy</a>
    </div>
  </footer>

  <!-- ============================================================
       SCRIPTS
       ============================================================ -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="js/main.js"></script>
  <script type="module" src="js/hero-3d.js"></script>

</body>
</html>


``n

## File: rules.html


`$ext

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rules & Services - Queen Mannel</title>
  <meta name="description" content="The rules of engagement with Queen Mannel. Read, understand, and comply — or leave. No exceptions.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <div class="age-gate" id="ageGate">
    <div class="age-gate-content">
      <div class="age-gate-logo">Queen Mannel</div>
      <p class="age-gate-text">This site contains adult content.<br>You must be 18 or older to enter.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary" id="ageEnter">E N T E R</button>
        <button class="btn btn-ghost" id="ageLeave">L E A V E</button>
      </div>
    </div>
  </div>

  <div class="cursor-ring" id="cursorRing"></div>

  <nav class="nav" id="nav">
    <a href="index.html" class="nav-brand">
      <div class="nav-logo">Queen Mannel</div>
      <div class="nav-motto">Your Eternal Addiction</div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="nav-link">H O M E</a>
      <a href="rules.html" class="nav-link nav-link--active">R U L E S   &   S E R V I C E S</a>
      <a href="gallery.html" class="nav-link">G A L L E R Y</a>
      <a href="booking.html" class="nav-link">B O O K I N G</a>
    </div>
    <div class="nav-socials">
      <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="nav-social" aria-label="Threads">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">@</text></svg>
      </a>
      <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener" class="nav-social" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- HERO -->
  <section class="hero hero--small">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Before You Continue</h1>
      <p class="hero-subtitle">These are not guidelines. They are conditions.</p>

      <div class="hero-specialties">
        <div class="specialty-item">Verbal Humiliation</div>
        <div class="specialty-item">Psychological Control</div>
        <div class="specialty-item">Chastity</div>
        <div class="specialty-item">Foot Worship</div>
        <div class="specialty-item">Discipline &amp; Reward</div>
        <div class="specialty-item">Elite Slave Training</div>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section class="section section--dark">
    <div class="section-inner">
      <div class="intro reveal">
        <div class="intro-rule"></div>
        <p class="intro-text">You are entering a space governed by protocol. Every interaction here — from a single message to a full session — operates under the terms laid out below. Ignorance is not a defense. Read. Understand. Then decide if you are worthy of proceeding.</p>
        <div class="intro-rule"></div>
      </div>
    </div>
  </section>

  <section class="section section--darker" id="rules">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title reveal">The Rules</h2>
      </div>
      <div class="rules-grid">
        <div class="rule-card reveal">
          <div class="rule-number">01</div>
          <p>Respect is the baseline, not the ceiling. Disrespect — in any form — ends the exchange immediately. There will be no warning.</p>
        </div>
        <div class="rule-card reveal">
          <div class="rule-number">02</div>
          <p>Negotiated limits are sacred. Even within the strictest Femdom dynamic, hard limits and safewords are honoured without exception. This is not weakness. It is control.</p>
        </div>
        <div class="rule-card reveal">
          <div class="rule-number">03</div>
          <p>Payment is rendered before service begins. Custom content and sessions are paid in full upfront. Refunds are not issued once delivery is complete.</p>
        </div>
        <div class="rule-card reveal">
          <div class="rule-number">04</div>
          <p>Confidentiality is mutual and absolute. I protect your identity. You protect mine. Violation is grounds for permanent severance.</p>
        </div>
        <div class="rule-card reveal">
          <div class="rule-number">05</div>
          <p>Time is currency. Lateness, cancellation without notice, or wasting my time will result in penalty — ranging from surcharge to permanent blacklisting.</p>
        </div>
        <div class="rule-card reveal">
          <div class="rule-number">06</div>
          <p>Content redistribution is forbidden. Screenshots, recordings, and sharing of any private content will be met with immediate termination and, where applicable, legal action.</p>
        </div>
        <div class="rule-card reveal">
          <div class="rule-number">07</div>
          <p>Communication follows protocol. You will address me as instructed. Familiarity is earned, never assumed.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTRACT OF AGREEMENT -->
  <section class="section section--dark" id="contract">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title reveal">Contract of Agreement of Slaves</h2>
      </div>
      <div class="contract reveal">
        <h3 class="contract-title">CONTRACT OF AGREEMENT</h3>

        <div class="contract-section">
          <h4>I. Submission &amp; Authority</h4>
          <p>By identifying as a slave within this framework, you acknowledge that authority in all interactions rests with me. Your role is to serve, obey, and fulfil assigned tasks. This dynamic is consensual and may be revoked at any time by either party.</p>
        </div>

        <div class="contract-section">
          <h4>II. Consent &amp; Limits</h4>
          <p>All activities are negotiated before any session commences. Safewords are mandatory and will be honoured instantly. Nothing in this contract supersedes the laws of your jurisdiction or the boundaries of informed consent.</p>
        </div>

        <div class="contract-section">
          <h4>III. Conduct</h4>
          <p>You will follow instructions precisely. You will not argue terms after they have been agreed upon. Failure to comply will result in corrective measures or dismissal, at my sole discretion.</p>
        </div>

        <div class="contract-section">
          <h4>IV. Confidentiality</h4>
          <p>All communications, content, and personal information exchanged remain strictly confidential. Breach of confidentiality will result in immediate and permanent termination of the arrangement.</p>
        </div>

        <div class="contract-section">
          <h4>V. Financial Discipline</h4>
          <p>Tributes and payments are made according to the schedule and amounts I set. Late payment is unacceptable. Financial terms are non-negotiable once agreed.</p>
        </div>

        <div class="contract-section">
          <h4>VI. Termination</h4>
          <p>I reserve the right to end this arrangement at any time, for any reason. You may request release, which will be granted at my discretion. Upon termination, all content remains my intellectual property and may not be distributed.</p>
        </div>


      </div>
    </div>
  </section>

  <!-- SERVICES MENU -->
  <section class="section section--darker" id="services">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title reveal">Services</h2>
        <p class="section-subtitle reveal">What I offer. What I permit.</p>
      </div>
      <div class="services-grid">

        <div class="service-card reveal">
          <div class="service-card-header">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
            </div>
            <div class="service-price">From €30</div>
          </div>
          <h3 class="service-card-title">Custom Photo Sets</h3>
          <p class="service-card-text">Curated imagery: feet, outfits, tools, scenes. Each set crafted to specification.</p>
          <div class="service-tags">
            <span class="service-tag">FETISHIST</span>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-header">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            </div>
            <div class="service-price">From €50</div>
          </div>
          <h3 class="service-card-title">Custom Video Clips</h3>
          <p class="service-card-text">Punishment, foot worship, teasing &amp; denial. Your fantasy, my direction.</p>
          <div class="service-tags">
            <span class="service-tag">FETISHIST</span>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-header">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div class="service-price">From €75/week</div>
          </div>
          <h3 class="service-card-title">Chastity Management</h3>
          <p class="service-card-text">Keyholding and chastity oversight. Scheduled check-ins. No mercy.</p>
          <div class="service-tags">
            <span class="service-tag">SLAVE PROGRAM</span>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-header">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h6"></path><path d="M9 18h6"></path><path d="M9 10h6"></path></svg>
            </div>
            <div class="service-price">From €100/week</div>
          </div>
          <h3 class="service-card-title">Task &amp; Discipline</h3>
          <p class="service-card-text">Ongoing slave training. Structured obedience. Progress tracked and enforced.</p>
          <div class="service-tags">
            <span class="service-tag">SLAVE PROGRAM</span>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-header">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <div class="service-price">From €80/session</div>
          </div>
          <h3 class="service-card-title">Virtual Sessions</h3>
          <p class="service-card-text">Call-based control, live tasks, real-time domination. Screen required.</p>
          <div class="service-tags">
            <span class="service-tag">FETISHIST</span>
            <span class="service-tag">SLAVE PROGRAM</span>
          </div>
        </div>

        <div class="service-card reveal">
          <div class="service-card-header">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="2 16 2 22 22 22 22 16"></polygon><polygon points="2 16 6 6 12 12 18 6 22 16"></polygon></svg>
            </div>
            <div class="service-price">By consultation</div>
          </div>
          <h3 class="service-card-title">In-Person Sessions</h3>
          <p class="service-card-text">Real. Intimate. By application only. Vetting required. Location disclosed upon approval.</p>
          <div class="service-tags">
            <span class="service-tag">SLAVE PROGRAM</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-portrait">
        <div class="footer-portrait-frame">
          <!-- PHOTO PLACEHOLDER -->
        </div>
      </div>
      <div class="footer-center">
        <p class="footer-tagline">"I am the fire of any fire I fear"</p>
      </div>
      <div class="footer-socials">
        <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener">Threads</a>
        <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener">@mannel_dom19</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Queen Mannel</span>
      <span class="footer-divider">·</span>
      <span>18+ Only</span>
      <span class="footer-divider">·</span>
      <a href="rules.html">Rules & Services</a>
      <span class="footer-divider">·</span>
      <a href="terms.html">Terms & Privacy</a>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>


``n

## File: gallery.html


`$ext

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery — Queen Mannel</title>
  <meta name="description" content="Evidence of devotion. Curated imagery and content from Queen Mannel — photos, videos, outfits and tools.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <div class="age-gate" id="ageGate">
    <div class="age-gate-content">
      <div class="age-gate-logo">Queen Mannel</div>
      <p class="age-gate-text">This site contains adult content.<br>You must be 18 or older to enter.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary" id="ageEnter">E N T E R</button>
        <button class="btn btn-ghost" id="ageLeave">L E A V E</button>
      </div>
    </div>
  </div>

  <div class="cursor-ring" id="cursorRing"></div>

  <nav class="nav" id="nav">
    <a href="index.html" class="nav-brand">
      <div class="nav-logo">Queen Mannel</div>
      <div class="nav-motto">Your Eternal Addiction</div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="nav-link">H O M E</a>
      <a href="rules.html" class="nav-link">R U L E S   &   S E R V I C E S</a>
      <a href="gallery.html" class="nav-link nav-link--active">G A L L E R Y</a>
      <a href="booking.html" class="nav-link">B O O K I N G</a>
    </div>
    <div class="nav-socials">
      <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="nav-social" aria-label="Threads">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">@</text></svg>
      </a>
      <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener" class="nav-social" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- HERO -->
  <section class="hero hero--small">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Evidence of Devotion.</h1>

      <div class="hero-specialties">
        <div class="specialty-item">Verbal Humiliation</div>
        <div class="specialty-item">Psychological Control</div>
        <div class="specialty-item">Chastity</div>
        <div class="specialty-item">Foot Worship</div>
        <div class="specialty-item">Discipline &amp; Reward</div>
        <div class="specialty-item">Elite Slave Training</div>
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="section section--dark">
    <div class="section-inner">

      <div class="filter-tabs">
        <button class="filter-tab active" data-filter="all">A L L</button>
        <button class="filter-tab" data-filter="photo">P H O T O S</button>
        <button class="filter-tab" data-filter="video">V I D E O S</button>
        <button class="filter-tab" data-filter="outfit">O U T F I T S &nbsp; & &nbsp; T O O L S</button>
      </div>

      <div class="gallery-grid">

        <!-- PHOTOS 1-5 -->
        <div class="gallery-tile" data-category="photo">
          <div class="gallery-tile-placeholder">📸</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile" data-category="photo">
          <div class="gallery-tile-placeholder">📸</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile" data-category="photo">
          <div class="gallery-tile-placeholder">📸</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile" data-category="photo">
          <div class="gallery-tile-placeholder">📸</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile" data-category="photo">
          <div class="gallery-tile-placeholder">📸</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>

        <!-- VIDEOS 6-9 -->
        <div class="gallery-tile gallery-tile--video" data-category="video">
          <div class="gallery-tile-placeholder"></div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile gallery-tile--video" data-category="video">
          <div class="gallery-tile-placeholder"></div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile gallery-tile--video" data-category="video">
          <div class="gallery-tile-placeholder"></div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile gallery-tile--video" data-category="video">
          <div class="gallery-tile-placeholder"></div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>

        <!-- OUTFITS & TOOLS 10-12 -->
        <div class="gallery-tile" data-category="outfit">
          <div class="gallery-tile-placeholder">👑</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile" data-category="outfit">
          <div class="gallery-tile-placeholder">👑</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>
        <div class="gallery-tile" data-category="outfit">
          <div class="gallery-tile-placeholder">👑</div>
          <div class="gallery-tile-overlay">
            <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="gallery-tile-caption">Full content on Threads →</a>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-portrait">
        <div class="footer-portrait-frame">
          <!-- PHOTO PLACEHOLDER -->
        </div>
      </div>
      <div class="footer-center">
        <p class="footer-tagline">"I am the fire of any fire I fear"</p>
      </div>
      <div class="footer-socials">
        <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener">Threads</a>
        <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener">@mannel_dom19</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Queen Mannel</span>
      <span class="footer-divider">·</span>
      <span>18+ Only</span>
      <span class="footer-divider">·</span>
      <a href="rules.html">Rules & Services</a>
      <span class="footer-divider">·</span>
      <a href="terms.html">Terms & Privacy</a>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>


``n

## File: booking.html


`$ext

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking — Queen Mannel</title>
  <meta name="description" content="Request a session with Queen Mannel. Choose your path — slave or fetishist — accept the terms, and submit your booking inquiry.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <!-- ═══════════════════════════════════════════ AGE GATE ═══ -->
  <div class="age-gate" id="ageGate">
    <div class="age-gate-content">
      <div class="age-gate-logo">Queen Mannel</div>
      <p class="age-gate-text">This site contains adult content.<br>You must be 18 or older to enter.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary" id="ageEnter">E N T E R</button>
        <button class="btn btn-ghost" id="ageLeave">L E A V E</button>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════ CURSOR ═══ -->
  <div class="cursor-ring" id="cursorRing"></div>

  <!-- ═══════════════════════════════════════════ NAV ═══ -->
  <nav class="nav" id="nav">
    <a href="index.html" class="nav-brand">
      <div class="nav-logo">Queen Mannel</div>
      <div class="nav-motto">Your Eternal Addiction</div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="nav-link">H O M E</a>
      <a href="rules.html" class="nav-link">R U L E S   &   S E R V I C E S</a>
      <a href="gallery.html" class="nav-link">G A L L E R Y</a>
      <a href="booking.html" class="nav-link nav-link--active">B O O K I N G</a>
    </div>
    <div class="nav-socials">
      <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="nav-social" aria-label="Threads">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">@</text></svg>
      </a>
      <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener" class="nav-social" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- ═══════════════════════════════════════════ HERO ═══ -->
  <section class="hero hero--small">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Request an Audience</h1>
      <p class="hero-subtitle">Every booking begins with the Rules. There are no exceptions.</p>

      <div class="hero-specialties">
        <div class="specialty-item">Verbal Humiliation</div>
        <div class="specialty-item">Psychological Control</div>
        <div class="specialty-item">Chastity</div>
        <div class="specialty-item">Foot Worship</div>
        <div class="specialty-item">Discipline &amp; Reward</div>
        <div class="specialty-item">Elite Slave Training</div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════ MAIN ═══ -->
  <section class="section section--dark">
    <div class="section-inner">

      <!-- Persistent Note -->
      <div class="booking-note reveal">
        <p>Every booking begins with the <a href="rules.html#contract">Rules</a>. There are no exceptions.</p>
      </div>

      <!-- ─── Identity Split ─── -->
      <div class="booking-split reveal" id="bookingSplit">
        <div class="booking-card" id="cardSlave" data-path="slave">
          <div class="booking-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </div>
          <h3 class="booking-card-title">I Am Your Slave</h3>
          <p class="booking-card-text">I am already under your authority, or I am entering into ongoing submission.</p>
        </div>
        <div class="booking-card" id="cardFetishist" data-path="fetishist">
          <div class="booking-card-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
          </div>
          <h3 class="booking-card-title">I Am a Fetishist</h3>
          <p class="booking-card-text">I am booking custom content or a session. No ongoing dynamic.</p>
        </div>
      </div>

      <!-- ─── Slave Path ─── -->
      <div class="booking-path" id="pathSlave">
        <button class="booking-back" id="backSlave">← &nbsp; B A C K</button>

        <h2 class="section-title" style="font-size: clamp(1.4rem, 3vw, 2rem);">Contract of Agreement</h2>

        <div class="contract">
          <h3 class="contract-title">CONTRACT OF AGREEMENT OF SLAVES</h3>

          <div class="contract-section">
            <h4>I. Submission &amp; Authority</h4>
            <p>The slave acknowledges me as their sole dominant authority. All instructions, protocols, and decisions made by me are final and must be followed without hesitation, argument, or delay. The slave does not question, negotiate, or attempt to manipulate the terms of service. Obedience is not optional — it is the foundation of this agreement.</p>
          </div>

          <div class="contract-section">
            <h4>II. Consent &amp; Limits</h4>
            <p>All activities are conducted within the boundaries of informed, mutual consent. The slave has the right to communicate limits clearly before any session begins. A safeword system is in place and must be respected absolutely by both parties. Consent may be withdrawn at any time. Withdrawal of consent will not result in punishment or retaliation — however, repeated misuse of this right to avoid discipline may result in termination of the dynamic.</p>
          </div>

          <div class="contract-section">
            <h4>III. Conduct</h4>
            <p>The slave will conduct themselves with respect, discipline, and humility at all times — in private sessions, public interactions, and any communication with me. Disrespectful language, unsolicited demands, inappropriate familiarity, or attempts to control the dynamic from below will result in immediate disciplinary action or dismissal. The slave is expected to present themselves in a manner that reflects their devotion.</p>
          </div>

          <div class="contract-section">
            <h4>IV. Confidentiality</h4>
            <p>All personal information, session details, communication, and content exchanged between the slave and me are strictly confidential. No recordings, screenshots, or reproductions may be made without explicit written permission. Any breach of confidentiality will result in immediate and permanent termination of the relationship, and may be subject to legal action.</p>
          </div>

          <div class="contract-section">
            <h4>V. Financial Discipline</h4>
            <p>Tributes, session fees, and gifts are offered willingly and without expectation of reciprocity. The slave understands that financial service is a demonstration of devotion, not a transaction. Refund requests, chargebacks, or disputes will be treated as a violation of trust and will result in permanent blacklisting. All agreed-upon financial commitments must be honored in full and on time.</p>
          </div>

          <div class="contract-section">
            <h4>VI. Termination</h4>
            <p>Either party may terminate this agreement at any time. I reserve the right to end the dynamic without explanation. The slave may request release respectfully and in writing. Upon termination, all confidentiality obligations remain in effect indefinitely. No content, communication, or personal information may be shared, published, or disclosed after the relationship has ended.</p>
          </div>
        </div>

        <!-- Checkbox -->
        <label class="booking-checkbox">
          <input type="checkbox" id="slaveAgree">
          <span class="booking-checkbox-mark"></span>
          <span class="booking-checkbox-label">I have read the <a href="rules.html">Rules &amp; Services</a> page and I agree to the Contract of Agreement of Slaves.</span>
        </label>

        <!-- Form Container with Lock -->
        <div class="booking-form-container" id="slaveFormContainer">
          <div class="booking-form-lock" id="slaveFormLock">
            <div class="booking-form-lock-overlay">
              <span class="lock-icon">🔒</span>
              <p>Accept the Contract to proceed</p>
            </div>
            <iframe class="booking-tally" id="slaveTally" title="Slave Booking Form" data-src="https://tally.so/embed/dWVoKN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" src="about:blank"></iframe>
          </div>
        </div>
      </div>

      <!-- ─── Fetishist Path ─── -->
      <div class="booking-path" id="pathFetishist">
        <button class="booking-back" id="backFetishist">← &nbsp; B A C K</button>

        <h2 class="section-title" style="font-size: clamp(1.4rem, 3vw, 2rem);">Booking Acknowledgment</h2>

        <div class="contract contract--light">
          <h3 class="contract-title">Before You Proceed</h3>
          <div class="contract-section">
            <p>By proceeding, you confirm that you are at least 18 years of age and that you have read and understood the <a href="rules.html">Rules &amp; Services</a> page in its entirety. You acknowledge that all sessions and content are governed by the terms outlined therein, and that respectful conduct, punctual payment, and absolute confidentiality are non-negotiable requirements. Failure to adhere to these standards will result in refusal of service without notice or explanation.</p>
          </div>
        </div>

        <!-- Checkbox -->
        <label class="booking-checkbox">
          <input type="checkbox" id="fetishistAgree">
          <span class="booking-checkbox-mark"></span>
          <span class="booking-checkbox-label">I confirm I am 18+ and I have read the <a href="rules.html">Rules &amp; Services</a> page.</span>
        </label>

        <!-- Form Container with Lock -->
        <div class="booking-form-container" id="fetishistFormContainer">
          <div class="booking-form-lock" id="fetishistFormLock">
            <div class="booking-form-lock-overlay">
              <span class="lock-icon">🔒</span>
              <p>Confirm acknowledgment to proceed</p>
            </div>
            <iframe class="booking-tally" id="fetishistTally" title="Fetishist Booking Form" data-src="https://tally.so/embed/dWVoKN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" src="about:blank"></iframe>
          </div>
        </div>
      </div>

      <!-- ─── Info Section (always visible) ─── -->
      <div class="booking-info reveal">
        <h3>What Happens Next</h3>
        <p><strong>Response time:</strong> Expect a reply within 48 hours. Silence is not rejection — it is consideration.</p>
        <p><strong>Payment:</strong> Accepted methods will be communicated upon approval. No payment is processed through this form.</p>
        <p><strong>In-person sessions:</strong> Requests for real-life sessions are reviewed individually. You will be contacted only if approved. Location is disclosed at my discretion.</p>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════ FOOTER ═══ -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-portrait">
        <div class="footer-portrait-frame">
          <!-- PHOTO PLACEHOLDER -->
        </div>
      </div>
      <div class="footer-center">
        <p class="footer-tagline">"I am the fire of any fire I fear"</p>
      </div>
      <div class="footer-socials">
        <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener">Threads</a>
        <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener">@mannel_dom19</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Queen Mannel</span>
      <span class="footer-divider">·</span>
      <span>18+ Only</span>
      <span class="footer-divider">·</span>
      <a href="rules.html">Rules &amp; Services</a>
      <span class="footer-divider">·</span>
      <a href="terms.html">Terms &amp; Privacy</a>
    </div>
  </footer>

  <!-- ═══════════════════════════════════════════ SCRIPTS ═══ -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script async src="https://tally.so/widgets/embed.js"></script>
  <script src="js/main.js"></script>
  <script src="js/booking-gate.js"></script>

</body>
</html>


``n

## File: terms.html


`$ext

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terms & Privacy — Queen Mannel</title>
  <meta name="description" content="Terms of use and privacy policy for the official website of Queen Mannel. Read before proceeding.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <div class="age-gate" id="ageGate">
    <div class="age-gate-content">
      <div class="age-gate-logo">Queen Mannel</div>
      <p class="age-gate-text">This site contains adult content.<br>You must be 18 or older to enter.</p>
      <div class="age-gate-actions">
        <button class="btn btn-primary" id="ageEnter">E N T E R</button>
        <button class="btn btn-ghost" id="ageLeave">L E A V E</button>
      </div>
    </div>
  </div>

  <div class="cursor-ring" id="cursorRing"></div>

  <nav class="nav" id="nav">
    <a href="index.html" class="nav-brand">
      <div class="nav-logo">Queen Mannel</div>
      <div class="nav-motto">Your Eternal Addiction</div>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" class="nav-link">H O M E</a>
      <a href="rules.html" class="nav-link">R U L E S   &   S E R V I C E S</a>
      <a href="gallery.html" class="nav-link">G A L L E R Y</a>
      <a href="booking.html" class="nav-link">B O O K I N G</a>
    </div>
    <div class="nav-socials">
      <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener" class="nav-social" aria-label="Threads">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">@</text></svg>
      </a>
      <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener" class="nav-social" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- HERO -->
  <section class="hero hero--small" style="height: 30vh; min-height: 200px;">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Terms &amp; Privacy</h1>

      <div class="hero-specialties">
        <div class="specialty-item">Verbal Humiliation</div>
        <div class="specialty-item">Psychological Control</div>
        <div class="specialty-item">Chastity</div>
        <div class="specialty-item">Foot Worship</div>
        <div class="specialty-item">Discipline &amp; Reward</div>
        <div class="specialty-item">Elite Slave Training</div>
      </div>
    </div>
  </section>

  <!-- TERMS CONTENT -->
  <section class="section section--dark">
    <div class="section-inner">
      <div class="terms-content">

        <h2>Site Purpose</h2>
        <p>This website serves as the official online presence of Queen Mannel. It provides information about services, rules of engagement, and booking facilities. No explicit content is hosted directly on this site.</p>

        <h2>Age Requirement</h2>
        <p>This website is intended for adults aged 18 and older. By entering this site, you confirm that you meet the minimum age requirement in your jurisdiction.</p>

        <h2>Data Collection &amp; Privacy Policy</h2>
        <p>This site utilizes <strong>Tally.so</strong> for the processing of booking applications and inquiries. By submitting a form, you acknowledge that your responses will be securely collected and automatically transferred to a private <strong>Google Sheet</strong> for review and record-keeping.</p>
        <p>All data submitted—including your personal information, limits, and submission agreements—is strictly confidential and accessed exclusively by Queen Mannel. We do not sell, distribute, or expose your data to any external third parties. If your application is rejected or you are blacklisted, your data may be retained for future reference to enforce bans. No other hidden tracking, cookies, or analytics are implemented on this site.</p>

        <h2>External Links</h2>
        <p>This site contains links to third-party platforms including Threads and Instagram. These platforms have their own terms of service and privacy policies. We are not responsible for the content or practices of external sites.</p>

        <h2>Content Ownership</h2>
        <p>All content, text, design elements, and branding on this site are the intellectual property of Queen Mannel. Reproduction, distribution, or modification without explicit written consent is prohibited.</p>

        <h2>Confidentiality</h2>
        <p>All communications and personal information exchanged through this site or its booking forms are treated as confidential. Information will not be shared with third parties except as required by law.</p>

        <h2>Contact</h2>
        <p>For inquiries regarding these terms, use the booking form or reach out through the official social media channels listed on this site.</p>

        <p class="last-updated">Last updated: July 2026</p>

      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-portrait">
        <div class="footer-portrait-frame">
          <!-- PHOTO PLACEHOLDER -->
        </div>
      </div>
      <div class="footer-center">
        <p class="footer-tagline">"I am the fire of any fire I fear"</p>
      </div>
      <div class="footer-socials">
        <a href="https://www.threads.net/@mannel_dom19" target="_blank" rel="noopener">Threads</a>
        <a href="https://www.instagram.com/mannel_dom19/?hl=en" target="_blank" rel="noopener">@mannel_dom19</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Queen Mannel</span>
      <span class="footer-divider">·</span>
      <span>18+ Only</span>
      <span class="footer-divider">·</span>
      <a href="rules.html">Rules & Services</a>
      <span class="footer-divider">·</span>
      <a href="terms.html">Terms & Privacy</a>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="js/main.js"></script>
</body>
</html>


``n

## File: css\styles.css


`$ext

/* ============================================================
   QUEEN MANNEL — COMPLETE DESIGN SYSTEM
   All 5 HTML pages share this single stylesheet.
   ============================================================ */

/* ============================================================
   1. CSS RESET & CUSTOM PROPERTIES
   ============================================================ */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

:root {
  --black: #0a0a0a;
  --black-light: #111111;
  --red: #8a0303;
  --red-bright: #b3001b;
  --burgundy: #4a0011;
  --gold: #8b7355;
  --gunmetal: #2a2a2e;
  --white: #f0ece6;
  --white-dim: rgba(240, 236, 230, 0.6);
  --white-faint: rgba(240, 236, 230, 0.15);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
}

body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: var(--red);
  color: var(--white);
}

img,
video {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
}

/* ============================================================
   2. AGE GATE
   ============================================================ */

.age-gate {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s;
}

.age-gate.hidden {
  opacity: 0;
  pointer-events: none;
}

.age-gate-content {
  text-align: center;
  max-width: 500px;
  padding: 40px;
}

.age-gate-logo {
  font-family: var(--font-serif);
  font-size: 4rem;
  color: var(--gold);
  letter-spacing: 0.2em;
  margin-bottom: 40px;
}

.age-gate-text {
  font-family: var(--font-sans);
  font-size: 15px;
  color: var(--white-dim);
  text-align: center;
  line-height: 1.8;
  margin-bottom: 40px;
}

.age-gate-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* ============================================================
   3. NAVIGATION
   ============================================================ */

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: transparent;
  transition: background 0.4s;
  backdrop-filter: none;
}

.nav.nav-solid {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
}

.nav-brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 24px;
  color: var(--gold);
  letter-spacing: 0.15em;
  font-weight: 700;
  line-height: 1.2;
}

.nav-motto {
  font-family: var(--font-sans);
  font-size: 9px;
  letter-spacing: 0.3em;
  color: var(--white-dim);
  text-transform: uppercase;
}

.nav-links {
  display: none;
}

.nav-links.active {
  display: flex;
  position: fixed;
  inset: 0;
  background: var(--black);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 8999;
  gap: 30px;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--white-dim);
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover,
.nav-link--active {
  color: var(--white);
}

.nav-link--active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--red);
}

.nav-socials {
  display: flex;
  gap: 16px;
  align-items: center;
}

.nav-social {
  color: var(--white-dim);
  transition: color 0.3s;
  display: flex;
}

.nav-social:hover {
  color: var(--red);
}

.nav-hamburger {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-direction: column;
  gap: 5px;
}

.nav-hamburger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--white);
  transition: all 0.3s;
}

.nav-hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(4.5px, 4.5px);
}

.nav-hamburger.active span:nth-child(2) {
  opacity: 0;
}

.nav-hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(4.5px, -4.5px);
}

/* ============================================================
   4. BUTTON SYSTEM
   ============================================================ */

.btn {
  display: inline-block;
  padding: 14px 40px;
  font-family: var(--font-sans);
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  text-decoration: none;
  position: relative;
}

.btn-primary {
  background: transparent;
  border: 1px solid var(--red);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--red);
  color: var(--white);
}

.btn-ghost {
  background: transparent;
  border: 1px solid var(--white-faint);
  color: var(--white-dim);
}

.btn-ghost:hover {
  border-color: var(--white);
  color: var(--white);
}

.btn-large {
  padding: 20px 60px;
  font-size: 14px;
}

/* ============================================================
   5. HERO SECTION
   ============================================================ */

.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  box-sizing: border-box;
}

.hero--small {
  height: 50vh;
  min-height: 450px;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-video-placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%);
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.5) 0%,
    rgba(10, 10, 10, 0.8) 70%,
    rgba(10, 10, 10, 1) 100%
  );
  z-index: 2;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 4;
  text-align: center;
  padding: 0 20px;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 10vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  color: var(--white);
  text-shadow: 0 0 80px rgba(138, 3, 3, 0.3);
  line-height: 1.1;
}

.hero-subtitle {
  font-family: var(--font-sans);
  font-size: clamp(0.8rem, 1.5vw, 1.1rem);
  letter-spacing: 0.4em;
  color: var(--white-dim);
  margin-top: 24px;
  text-transform: uppercase;
}

.hero-cta {
  margin-top: 50px;
}

/* ============================================================
   6. SECTION SYSTEM
   ============================================================ */

.section {
  padding: 80px 0;
  position: relative;
}

.section--dark {
  background: var(--black);
}

.section--darker {
  background: var(--black-light);
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  color: var(--white);
  margin-bottom: 16px;
}

.section-subtitle {
  font-family: var(--font-sans);
  font-size: 13px;
  letter-spacing: 0.25em;
  color: var(--white-dim);
  text-transform: uppercase;
}

/* ============================================================
   7. INTRO BLOCK
   ============================================================ */

.intro-split {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.intro-image {
  width: 100%;
  max-width: 500px;
  position: relative;
}

.intro-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(138, 3, 3, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: block;
}

.intro-content {
  text-align: center;
  max-width: 600px;
}

.intro-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--white-dim);
  line-height: 2;
}

.intro-rule {
  width: 60px;
  height: 1px;
  background: var(--red);
  margin: 40px auto;
  border: none;
}

/* ============================================================
   8. FEATURE GRID
   ============================================================ */

.features {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  padding-bottom: 30px;
  margin: 0 -20px;
  padding-left: 20px;
  padding-right: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.features::-webkit-scrollbar {
  display: none;
}

.feature-card {
  min-width: 85vw;
  scroll-snap-align: center;
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  padding: 50px 30px 40px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--red), transparent);
  opacity: 0;
  transition: opacity 0.5s;
}

.feature-card:hover {
  border-color: rgba(138, 3, 3, 0.3);
  transform: translateY(-8px);
  background: linear-gradient(180deg, rgba(138, 3, 3, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(138, 3, 3, 0.1);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-number {
  font-family: var(--font-serif);
  font-size: 80px;
  color: var(--red);
  opacity: 0.15;
  line-height: 1;
  margin-bottom: 20px;
  font-style: italic;
  transition: all 0.5s;
  pointer-events: none;
}

.feature-card:hover .feature-number {
  opacity: 0.8;
  color: var(--gold);
  transform: scale(1.1) translateY(-10px);
}

.feature-title {
  font-family: var(--font-serif);
  font-size: 20px;
  color: var(--white);
  margin-bottom: 16px;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 2;
}

.feature-text {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.8;
  margin-bottom: 30px;
  flex-grow: 1;
  position: relative;
  z-index: 2;
}

.feature-link {
  font-size: 11px;
  letter-spacing: 0.25em;
  color: var(--gold);
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
  transition: color 0.3s;
  z-index: 2;
}

.feature-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--red);
  transition: all 0.4s ease;
  transform: translateX(-50%);
}

.feature-card:hover .feature-link {
  color: var(--white);
}

.feature-card:hover .feature-link::after {
  width: 100%;
}

/* ============================================================
   9. SPECIALTIES FADE
   ============================================================ */
.hero-specialties {
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.specialty-item {
  position: absolute;
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--white);
  text-align: center;
  width: 100%;
  padding: 0 20px;
  letter-spacing: 0.1em;
  opacity: 0;
  pointer-events: none;
  text-shadow: 0 10px 40px rgba(138, 3, 3, 0.4);
  white-space: nowrap;
}

/* ==============================================================
   10. TESTIMONIALS
   ============================================================ */

.testimonials {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--red);
  padding: 40px;
  position: relative;
  height: 100%;
}

.cta-grid-card {
  background: linear-gradient(180deg, rgba(138, 3, 3, 0.1) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(138, 3, 3, 0.3);
  border-left: 3px solid var(--red);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  transition: all 0.4s;
}

.cta-grid-card:hover {
  background: linear-gradient(180deg, rgba(138, 3, 3, 0.2) 0%, rgba(255, 255, 255, 0.02) 100%);
  box-shadow: 0 10px 30px rgba(138, 3, 3, 0.2);
  transform: translateY(-4px);
}

.cta-grid-card .cta-slide-title {
  font-size: 20px;
  margin-bottom: 8px;
}

.cta-grid-card .cta-slide-text {
  font-size: 13px;
  margin-bottom: 20px;
}

.testimonial-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  color: var(--white-dim);
  line-height: 1.9;
}

.testimonial-quote::before {
  content: open-quote;
  font-size: 60px;
  color: var(--red);
  opacity: 0.3;
  position: absolute;
  top: 20px;
  left: 20px;
  line-height: 1;
}

/* CAROUSEL STYLES */
.testimonials-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  width: 300%; /* 3 slides */
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  width: 33.3333%;
  flex-shrink: 0;
  padding: 0 10px; /* Small padding so shadow doesn't clip */
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
}

.carousel-btn {
  background: transparent;
  border: 1px solid var(--white-faint);
  color: var(--white-dim);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s;
}

.carousel-btn:hover {
  border-color: var(--red);
  color: var(--white);
  background: rgba(138, 3, 3, 0.2);
}

.carousel-indicators {
  display: flex;
  gap: 12px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--white-faint);
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-dot.active {
  background: var(--red);
  transform: scale(1.3);
}

.slide-cta {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-slide-card {
  width: 100%;
  max-width: 800px;
  padding: 80px 40px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.cta-slide-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--white);
  margin-bottom: 16px;
}

.cta-slide-text {
  font-size: 15px;
  color: var(--white-dim);
  margin-bottom: 40px;
}

.testimonial-quote::before {
  content: open-quote;
  font-size: 60px;
  color: var(--red);
  opacity: 0.3;
  position: absolute;
  top: 20px;
  left: 20px;
  line-height: 1;
}

.testimonial-author {
  font-family: var(--font-sans);
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
}

.testimonial-badge {
  display: inline-block;
  font-size: 9px;
  padding: 3px 10px;
  border: 1px solid var(--gold);
  color: var(--gold);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-left: 12px;
  vertical-align: middle;
}

/* ============================================================
   11. CTA BAND
   ============================================================ */

.cta-band {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 5%;
  max-width: 1600px;
  margin: 0 auto 100px auto;
}

.cta-card {
  padding: 60px 40px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.0) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(138, 3, 3, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0;
  transition: opacity 0.5s;
  z-index: 0;
}

.cta-card:hover {
  transform: translateY(-8px);
  border-color: rgba(138, 3, 3, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.cta-card:hover::before {
  opacity: 1;
}

.cta-card-label {
  font-family: var(--font-sans);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.cta-card-title {
  font-family: var(--font-serif);
  font-size: clamp(20px, 2.5vw, 28px);
  color: var(--white);
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.cta-card-title::after {
  content: '→';
  font-size: 20px;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.4s;
}

.cta-card:hover .cta-card-title::after {
  opacity: 1;
  transform: translateX(0);
}

/* ============================================================
   12. RULES PAGE
   ============================================================ */

.rules-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .rules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .rules-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.rule-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 36px;
  transition: all 0.4s;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.rule-card:hover {
  border-color: var(--red);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.rule-number {
  font-family: var(--font-serif);
  font-size: 40px;
  color: var(--red);
  line-height: 1;
}

.rule-card p {
  font-size: 15px;
  color: var(--white-dim);
  line-height: 1.7;
}

.contract {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--gold);
  padding: 60px;
  margin-top: 40px;
  position: relative;
}

.contract::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 24px;
  height: 24px;
  border-top: 2px solid var(--gold);
  border-left: 2px solid var(--gold);
}

.contract::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 24px;
  height: 24px;
  border-bottom: 2px solid var(--gold);
  border-right: 2px solid var(--gold);
}

.contract-title {
  font-family: var(--font-serif);
  font-size: 26px;
  color: var(--gold);
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 0.1em;
}

.contract-section {
  margin-bottom: 28px;
}

.contract-section h4 {
  font-family: var(--font-sans);
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 10px;
  font-weight: 500;
}

.contract-section p {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.9;
}

.contract-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid var(--white-faint);
}

.contract-checkbox input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border: 1px solid var(--gold);
  background: transparent;
  cursor: pointer;
  position: relative;
  margin-top: 2px;
  transition: all 0.3s;
}

.contract-checkbox input[type="checkbox"]:checked {
  background: var(--red);
  border-color: var(--red);
}

.contract-checkbox input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white);
  font-size: 14px;
}

.contract-checkbox label {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.6;
  cursor: pointer;
}

.contract-checkbox label a {
  color: var(--red);
}

/* ============================================================
   13. SERVICES GRID
   ============================================================ */

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.service-card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 36px;
  transition: all 0.4s;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  border-color: var(--red);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.service-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.service-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(138, 3, 3, 0.1);
  border: 1px solid rgba(138, 3, 3, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red);
  box-shadow: 0 4px 15px rgba(138, 3, 3, 0.2);
}

.service-card-title {
  font-family: var(--font-serif);
  font-size: 19px;
  color: var(--white);
  margin-bottom: 10px;
}

.service-card-text {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.7;
  margin-bottom: 14px;
}

.service-card-price {
  font-size: 13px;
  color: var(--gold);
  letter-spacing: 0.1em;
}

.service-tags {
  margin-top: auto;
}

.service-tag {
  display: inline-block;
  font-size: 9px;
  letter-spacing: 0.2em;
  padding: 4px 12px;
  border: 1px solid var(--red);
  color: var(--red);
  text-transform: uppercase;
  margin-top: 12px;
  margin-right: 6px;
}

/* ============================================================
   14. GALLERY
   ============================================================ */

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.filter-tab {
  font-family: var(--font-sans);
  font-size: 11px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  padding: 10px 24px;
  background: transparent;
  border: 1px solid var(--white-faint);
  color: var(--white-dim);
  cursor: pointer;
  transition: all 0.3s;
}

.filter-tab:hover {
  border-color: var(--white);
}

.filter-tab.active {
  background: var(--red);
  border-color: var(--red);
  color: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 4px;
}

.gallery-tile {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--gunmetal);
  cursor: pointer;
}

.gallery-tile:nth-child(3n+2) {
  aspect-ratio: 1 / 1;
}

.gallery-tile:nth-child(5n+3) {
  aspect-ratio: 4 / 3;
}

.gallery-tile-placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--gunmetal) 0%, var(--black-light) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: var(--white-faint);
}

.gallery-tile-overlay {
  position: absolute;
  inset: 0;
  background: rgba(138, 3, 3, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s;
}

.gallery-tile:hover .gallery-tile-overlay {
  opacity: 1;
}

.gallery-tile-caption {
  font-size: 12px;
  letter-spacing: 0.2em;
  color: var(--white);
  text-transform: uppercase;
}

.gallery-tile.hidden {
  display: none;
}

.gallery-tile--video .gallery-tile-placeholder::after {
  content: '▶';
  font-size: 48px;
  color: rgba(255, 255, 255, 0.2);
}

/* ============================================================
   15. BOOKING
   ============================================================ */

.booking-note {
  text-align: center;
  margin-bottom: 60px;
  font-size: 15px;
  color: var(--white-dim);
  line-height: 1.7;
}

.booking-note a {
  color: var(--red);
  text-decoration: underline;
}

.booking-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.booking-card {
  padding: 60px 40px;
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.booking-card:hover {
  border-color: var(--red);
  transform: translateY(-4px);
  box-shadow: 0 0 50px rgba(138, 3, 3, 0.15);
}

.booking-card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 20px;
  background: rgba(138, 3, 3, 0.05);
  border: 1px solid rgba(138, 3, 3, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red);
  box-shadow: 0 10px 30px rgba(138, 3, 3, 0.1);
  transition: all 0.4s;
}

.booking-card:hover .booking-card-icon {
  background: rgba(138, 3, 3, 0.15);
  border-color: rgba(138, 3, 3, 0.5);
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(138, 3, 3, 0.3);
}

.booking-card-title {
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--white);
  margin-bottom: 12px;
}

.booking-card-text {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.6;
}

.booking-path {
  display: none;
  max-width: 800px;
  margin: 40px auto 0;
}

.booking-path.active {
  display: block;
  animation: fadeInUp 0.6s ease-out;
}

.booking-back {
  background: none;
  border: none;
  color: var(--white-dim);
  font-family: var(--font-sans);
  font-size: 12px;
  letter-spacing: 0.2em;
  cursor: pointer;
  margin-bottom: 30px;
  transition: color 0.3s;
  text-transform: uppercase;
  padding: 0;
}

.booking-back:hover {
  color: var(--white);
}

.booking-form-container {
  margin-top: 40px;
}

.booking-form-lock {
  position: relative;
}

.booking-form-lock:not(.unlocked) {
  filter: blur(3px);
  pointer-events: none;
}

.booking-form-lock-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: opacity 0.4s;
}

.booking-form-lock.unlocked .booking-form-lock-overlay {
  opacity: 0;
  pointer-events: none;
}

.lock-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.booking-form-lock-overlay p {
  font-size: 14px;
  color: var(--white-dim);
  letter-spacing: 0.1em;
}

.booking-tally {
  width: 100%;
  min-height: 600px;
  border: none;
  background: transparent;
}

.booking-info {
  margin-top: 60px;
  padding: 40px;
  border: 1px solid var(--white-faint);
  background: rgba(255, 255, 255, 0.02);
}

.booking-info h3 {
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--white);
  margin-bottom: 20px;
}

.booking-info p {
  font-size: 14px;
  color: var(--white-dim);
  line-height: 1.8;
  margin-bottom: 12px;
}

.booking-info strong {
  color: var(--white);
}

/* ============================================================
   16. TERMS
   ============================================================ */

.terms-content {
  max-width: 800px;
  margin: 0 auto;
}

.terms-content h2 {
  font-family: var(--font-serif);
  font-size: 24px;
  color: var(--white);
  margin-top: 50px;
  margin-bottom: 16px;
}

.terms-content p {
  font-size: 15px;
  color: var(--white-dim);
  line-height: 1.9;
  margin-bottom: 16px;
}

.terms-content .last-updated {
  font-size: 13px;
  color: var(--gold);
  margin-top: 60px;
  letter-spacing: 0.1em;
}

/* ============================================================
   17. FOOTER
   ============================================================ */

.footer {
  background: var(--black-light);
  border-top: 1px solid var(--white-faint);
  padding: 80px 0 30px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  align-items: center;
  gap: 40px;
}

.footer-portrait-frame {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 80px rgba(138, 3, 3, 0.5), inset 0 0 40px rgba(0, 0, 0, 0.9);
  overflow: hidden;
  background-image: url('../Image1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-portrait-frame::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 70%, var(--red) 100%);
  animation: spin 4s linear infinite;
  z-index: -1;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.footer-center {
  text-align: center;
}

.footer-tagline {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(20px, 3vw, 28px);
  color: var(--white);
  letter-spacing: 0.05em;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);
}

.footer-socials {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.footer-socials a {
  font-family: var(--font-sans);
  font-size: 11px;
  letter-spacing: 0.15em;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 24px;
  border-radius: 40px;
  backdrop-filter: blur(10px);
}

.footer-socials a:hover {
  background: rgba(138, 3, 3, 0.2);
  border-color: var(--red);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(138, 3, 3, 0.2);
}

.footer-bottom {
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 40px 0;
  border-top: 1px solid var(--white-faint);
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--white-dim);
}

.footer-bottom a {
  color: var(--white-dim);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-bottom a:hover {
  color: var(--red);
}

.footer-divider {
  opacity: 0.3;
}

/* ============================================================
   18. CUSTOM CURSOR
   ============================================================ */

.cursor-ring {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 1px solid var(--red);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10001;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, opacity 0.3s;
  opacity: 0;
  top: 0;
  left: 0;
}

.cursor-ring.visible {
  opacity: 0.6;
}

.cursor-ring.hovering {
  width: 50px;
  height: 50px;
  border-color: var(--red-bright);
  opacity: 0.8;
}

@media (hover: none) {
  .cursor-ring {
    display: none;
  }
}

/* ============================================================
   19. ANIMATIONS
   ============================================================ */

.reveal {
  opacity: 0;
  transform: translateY(40px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ============================================================
   20. RESPONSIVE
   ============================================================ */

@media (min-width: 768px) {
  .intro-split {
    flex-direction: row;
    gap: 80px;
    align-items: center;
  }
  
  .intro-image, .intro-content {
    flex: 1;
  }

  .nav-links {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .nav-hamburger {
    display: none;
  }

  .features {
    display: grid;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-card {
    min-width: 0;
  }

  .testimonials {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-band {
    grid-template-columns: repeat(3, 1fr);
  }

  .booking-split {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section {
    padding: 120px 0;
  }

  .section-inner {
    padding: 0 40px;
  }



  .hero-title {
    font-size: clamp(3rem, 8vw, 7rem);
  }
}

@media (min-width: 1024px) {
  .features {
    grid-template-columns: repeat(4, 1fr);
  }

  .testimonials {
    grid-template-columns: repeat(3, 1fr);
  }
}


``n

## File: js\main.js


`$ext

/* ============================================
   QUEEN MANNEL — GLOBAL JS
   ============================================ */

/* ------------------------------------------
   1. AGE GATE
   ------------------------------------------ */
function initAgeGate() {
  const gate = document.getElementById('ageGate');
  const enter = document.getElementById('ageEnter');
  const leave = document.getElementById('ageLeave');
  if (!gate) return;

  if (localStorage.getItem('ml_age_verified')) {
    gate.classList.add('hidden');
    return;
  }

  document.body.style.overflow = 'hidden';

  enter.addEventListener('click', () => {
    localStorage.setItem('ml_age_verified', 'true');
    gate.classList.add('hidden');
    document.body.style.overflow = '';
  });

  leave.addEventListener('click', () => {
    window.location.href = 'https://google.com';
  });
}

/* ------------------------------------------
   2. NAVIGATION SCROLL BEHAVIOUR
   ------------------------------------------ */
function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  if (!nav) return;

  // Scroll: transparent → solid
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 80) {
          nav.classList.add('nav-solid');
        } else {
          nav.classList.remove('nav-solid');
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ------------------------------------------
   3. SMOOTH SCROLL FOR ANCHOR LINKS
   ------------------------------------------ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href === '#telegram-placeholder') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ------------------------------------------
   4. CUSTOM CURSOR (hover-capable only)
   ------------------------------------------ */
function initCursor() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const ring = document.getElementById('cursorRing');
  if (!ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!ring.classList.contains('visible')) {
      ring.classList.add('visible');
    }
  });

  function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  const interactiveSelectors = 'a, button, .gallery-tile, .booking-card, .feature-card, .cta-card, .filter-tab, .service-card, input[type="checkbox"]';

  document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
}

/* ------------------------------------------
   5. GSAP SCROLL ANIMATIONS
   ------------------------------------------ */
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Individual reveals
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true
        }
      }
    );
  });

  // Staggered reveals for grid children
  const grids = [
    '.features', '.testimonials', '.gallery-grid', '.services-grid'
  ];

  grids.forEach(selector => {
    const grid = document.querySelector(selector);
    if (!grid) return;
    const children = grid.children;
    if (!children.length) return;

    gsap.fromTo(children,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          once: true
        }
      }
    );
  });
}

/* ------------------------------------------
   6. GALLERY FILTER
   ------------------------------------------ */
function initGalleryFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const tiles = document.querySelectorAll('.gallery-tile');
  if (!tabs.length || !tiles.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      tiles.forEach(tile => {
        if (filter === 'all' || tile.dataset.category === filter) {
          tile.classList.remove('hidden');
        } else {
          tile.classList.add('hidden');
        }
      });
    });
  });
}

/* ------------------------------------------
   7. SPECIALTIES FADE ANIMATION
   ------------------------------------------ */
function initSpecialtiesFade() {
  const items = document.querySelectorAll('.specialty-item');
  if (items.length === 0) return;

  gsap.set(items, { opacity: 0, filter: 'blur(20px)', scale: 0.95 });

  const tl = gsap.timeline({ repeat: -1 });

  items.forEach((item, index) => {
    const startTime = index * 3.5;

    tl.to(item, {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      duration: 1.5,
      ease: 'power2.out'
    }, startTime)
    .to(item, {
      scale: 1.05,
      duration: 2,
      ease: 'none'
    }, startTime + 1.5)
    .to(item, {
      opacity: 0,
      filter: 'blur(20px)',
      duration: 1.5,
      ease: 'power2.in'
    }, startTime + 2.5);
  });
}

/* ------------------------------------------
   8. TESTIMONIAL CAROUSEL
   ------------------------------------------ */
function initTestimonialCarousel() {
  const track = document.querySelector('.carousel-track');
  const nextBtn = document.getElementById('carousel-next');
  const prevBtn = document.getElementById('carousel-prev');
  const dots = document.querySelectorAll('.carousel-dot');
  
  if (!track || !nextBtn || !prevBtn || !dots.length) return;

  let currentIndex = 0;
  const slideCount = dots.length; // 3

  function updateCarousel() {
    track.style.transform = `translateX(-${(currentIndex * 100) / slideCount}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });
}

/* ------------------------------------------
   9. INIT EVERYTHING
   ------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initNav();
  initSmoothScroll();
  initCursor();
  initScrollAnimations();
  initGalleryFilter();
  initSpecialtiesFade();
  initTestimonialCarousel();
});


``n

## File: js\hero-3d.js


`$ext

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

  const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
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

  const isMobile = window.innerWidth <= 768;
  const PARTICLE_COUNT = isMobile ? 150 : 400;

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


``n

## File: js\booking-gate.js


`$ext

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


``n

