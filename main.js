/* =====================================================================
   inteliSentry — interaction layer (vanilla JS, progressive enhancement)
   ===================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile navigation ---- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    var setNav = function (open) {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) {
        mobileNav.hidden = false;
      } else {
        mobileNav.hidden = true;
      }
    };
    navToggle.addEventListener("click", function () {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });
    // Close when a link is tapped
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        setNav(false);
        navToggle.focus();
      }
    });
    // Reset when resizing up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) setNav(false);
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Stat count-up ---- */
  var stats = Array.prototype.slice.call(document.querySelectorAll(".stat__num[data-count]"));
  var runCount = function (el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced || isNaN(target)) { return; }
    var start = null;
    var duration = 1100;
    var step = function (ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };
  if (!prefersReduced && "IntersectionObserver" in window && stats.length) {
    var statIO = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { runCount(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    stats.forEach(function (el) { statIO.observe(el); });
  }

  /* ---- FAQ accordion ---- */
  var triggers = Array.prototype.slice.call(document.querySelectorAll(".accordion__trigger"));
  triggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var item = btn.closest(".accordion__item");
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.classList.toggle("is-open", !expanded);
      if (item) item.classList.toggle("is-open", !expanded);
    });
  });

  /* ---- Booking form (demo only) ---- */
  var form = document.getElementById("bookForm");
  if (form) {
    var success = document.getElementById("bookSuccess");
    var resetBtn = document.getElementById("bookReset");

    var showError = function (input, message) {
      var field = input.closest(".field");
      if (field) field.classList.add("has-error");
      var msg = form.querySelector('[data-error-for="' + input.id + '"]');
      if (msg) msg.textContent = message;
      input.setAttribute("aria-invalid", "true");
    };
    var clearError = function (input) {
      var field = input.closest(".field");
      if (field) field.classList.remove("has-error");
      var msg = form.querySelector('[data-error-for="' + input.id + '"]');
      if (msg) msg.textContent = "";
      input.removeAttribute("aria-invalid");
    };

    var validators = {
      "bf-name": function (v) { return v.trim().length >= 2 ? "" : "Please enter your name."; },
      "bf-email": function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email."; },
      "bf-phone": function (v) { return v.replace(/[^0-9]/g, "").length >= 7 ? "" : "Please enter a valid phone number."; },
      "bf-reason": function (v) { return v ? "" : "Please choose a reason."; }
    };

    Object.keys(validators).forEach(function (id) {
      var input = document.getElementById(id);
      if (input) input.addEventListener("input", function () { if (input.getAttribute("aria-invalid")) clearError(input); });
      if (input) input.addEventListener("change", function () { if (input.getAttribute("aria-invalid")) clearError(input); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Object.keys(validators).forEach(function (id) {
        var input = document.getElementById(id);
        if (!input) return;
        var error = validators[id](input.value);
        if (error) { showError(input, error); if (!firstInvalid) firstInvalid = input; }
        else clearError(input);
      });
      if (firstInvalid) { firstInvalid.focus(); return; }
      if (success) { success.hidden = false; }
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        if (success) success.hidden = true;
        var nameField = document.getElementById("bf-name");
        if (nameField) nameField.focus();
      });
    }
  }
})();
