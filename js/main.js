/* ============================================
   Daniel Hanke – Business Coach Website
   Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Navigation: Scroll effect ---
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile Menu Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  let mobileMenuOpen = false;

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      mobileMenuOpen = !mobileMenuOpen;
      navMobile.classList.toggle('open', mobileMenuOpen);

      // Animate hamburger
      const spans = navToggle.querySelectorAll('span');
      if (mobileMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
        document.body.style.overflow = 'hidden';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
        document.body.style.overflow = '';
      }
    });

    // Close mobile menu on link click
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenuOpen = false;
        navMobile.classList.remove('open');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll Animations (Intersection Observer) ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: show all elements
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Cookie Banner ---
  const cookieBanner = document.getElementById('cookieBanner');

  function showCookieBanner() {
    if (!cookieBanner) return;
    var consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      cookieBanner.classList.add('show');
    }
  }

  window.acceptCookies = function () {
    localStorage.setItem('cookieConsent', 'accepted');
    if (cookieBanner) cookieBanner.classList.remove('show');
    // Enable analytics here if needed
    enableAnalytics();
  };

  window.declineCookies = function () {
    localStorage.setItem('cookieConsent', 'declined');
    if (cookieBanner) cookieBanner.classList.remove('show');
  };

  function enableAnalytics() {
    // Placeholder: Initialize Google Analytics and LinkedIn Pixel here
    // Example:
    // if (typeof gtag === 'function') {
    //   gtag('consent', 'update', { analytics_storage: 'granted' });
    // }
  }

  // Show banner after a short delay for better UX
  setTimeout(showCookieBanner, 1000);

  // --- Contact Form Handler ---
  window.handleContactSubmit = function (e) {
    e.preventDefault();

    var form = e.target;
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    // In production, replace this with your actual form submission endpoint
    // Options: Formspree, Netlify Forms, custom API, etc.
    //
    // Example with Formspree:
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   body: formData,
    //   headers: { 'Accept': 'application/json' }
    // }).then(response => { ... })

    // For now, show a success message
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.innerHTML;
    btn.innerHTML = 'Nachricht gesendet &#10003;';
    btn.style.background = '#7a8b6f';
    btn.disabled = true;

    setTimeout(function () {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);

    console.log('Form submission data:', data);
    console.log(
      'NOTE: Connect this form to a backend service (Formspree, Netlify Forms, etc.) for actual email delivery.'
    );
  };

  // --- Newsletter / Lead Magnet Form Handler ---
  window.handleNewsletterSubmit = function (e) {
    e.preventDefault();

    var form = e.target;
    var email = form.querySelector('input[type="email"]').value;

    // In production, connect to your email marketing service
    // Options: Mailchimp, ConvertKit, Sendinblue, etc.
    //
    // Example with ConvertKit:
    // fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ api_key: 'YOUR_KEY', email: email })
    // }).then(response => { ... })

    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.innerHTML;
    btn.innerHTML = 'Gesendet &#10003;';
    btn.style.background = '#7a8b6f';
    btn.disabled = true;

    setTimeout(function () {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);

    console.log('Newsletter signup:', email);
    console.log(
      'NOTE: Connect this to your email marketing platform (ConvertKit, Mailchimp, etc.).'
    );
  };

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
})();
