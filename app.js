/* =========================================================================
   Portfolio — interactivity
   ========================================================================= */
(function () {
  'use strict';

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var saved = localStorage.getItem('habtamu-theme');
  if (saved) root.setAttribute('data-theme', saved);
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') !== 'light';
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('habtamu-theme', next);
    });
  }

  /* ---------- mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () { navLinks.classList.toggle('open'); });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* ---------- gutter line numbers for skills ---------- */
  var code = document.getElementById('skillCode');
  var gutter = document.getElementById('skillGutter');
  if (code && gutter) {
    var n = code.querySelectorAll('.ln').length;
    var g = '';
    for (var i = 1; i <= n; i++) g += i + '\n';
    gutter.textContent = g;
  }

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  // safety: never leave a section hidden if the observer doesn't fire
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 200) el.classList.add('in');
    });
  }, 1400);

  /* ---------- active nav on scroll ---------- */
  var sections = ['about', 'skills', 'experience', 'projects', 'contact']
    .map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var navMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
    navMap[a.getAttribute('href').slice(1)] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        Object.values(navMap).forEach(function (a) { a.classList.remove('active'); });
        if (navMap[e.target.id]) navMap[e.target.id].classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(function (s) { spy.observe(s); });

  /* ===================== HERO TERMINAL ===================== */
  var termBody = document.getElementById('termBody');
  var inputRow = document.getElementById('termInputRow');
  var input = document.getElementById('termInput');

  function el(cls, html) { var d = document.createElement('div'); d.className = cls; d.innerHTML = html; return d; }
  function scrollDown() { termBody.scrollTop = termBody.scrollHeight; }

  // intro sequence: typed commands + outputs
  var boot = [
    { cmd: 'whoami' },
    { out: '<span class="ok">Habtamu Asefa</span> — Full-Stack AI Engineer, Addis Ababa' },
    { cmd: 'cat role.txt' },
    { out: 'Full-Stack AI Engineer · AI Product Engineer · ships end-to-end' },
    { cmd: './summary --short' },
    { out: 'Building <span class="acc">AI-native products</span> end-to-end:\n  <span class="key">agents</span>, <span class="key">RAG</span>, <span class="key">retrieval</span>, mobile, backend, infra.' },
    { out: 'Founder of <span class="acc">PrepX</span> (1,000+ users, 250 MAU) and <span class="acc">Temaribet</span> (4,000+ tutors).' },
    { out: 'Author of <span class="acc">react-native-ajora</span> — 6,100+ npm downloads, 19★.' },
    { cmd: 'help' },
    { out: 'available: <span class="acc">about</span> · <span class="acc">skills</span> · <span class="acc">experience</span> · <span class="acc">projects</span> · <span class="acc">contact</span> · <span class="acc">resume</span> · <span class="acc">clear</span>' }
  ];

  var TYPE = 34, LINE_PAUSE = 240;

  function typeCmd(text, done) {
    var row = el('line cmd', '<span class="prompt">❯</span><span class="t"></span><span class="cursor"></span>');
    termBody.appendChild(row);
    var t = row.querySelector('.t');
    var cur = row.querySelector('.cursor');
    var i = 0;
    (function tick() {
      if (i <= text.length) {
        t.textContent = text.slice(0, i);
        i++;
        scrollDown();
        setTimeout(tick, TYPE);
      } else {
        if (cur) cur.remove();
        done && done();
      }
    })();
  }

  function printOut(html, done) {
    var row = el('line out', html.replace(/\n/g, '<br>'));
    termBody.appendChild(row);
    scrollDown();
    setTimeout(done, LINE_PAUSE);
  }

  function runBoot(idx) {
    if (idx >= boot.length) { enableInput(); return; }
    var step = boot[idx];
    if (step.cmd != null) {
      typeCmd(step.cmd, function () { setTimeout(function () { runBoot(idx + 1); }, 160); });
    } else {
      printOut(step.out, function () { runBoot(idx + 1); });
    }
  }

  /* ---------- interactive commands ---------- */
  var responses = {
    help: 'commands: <span class="acc">about</span> · <span class="acc">skills</span> · <span class="acc">experience</span> · <span class="acc">projects</span> · <span class="acc">contact</span> · <span class="acc">resume</span> · <span class="acc">clear</span>',
    about: 'Full-Stack AI Engineer building AI-native products end-to-end — RAG, agents, retrieval, mobile, backend, and deployment.',
    skills: 'ai: <span class="key">agents, RAG, tool-calling, evals</span> · search: <span class="key">Qdrant, Typesense (hybrid)</span> · stack: <span class="key">React Native, NestJS, FastAPI, PostgreSQL</span>',
    experience: 'PrepX (founder, 2024–) · Freelance for US&amp;EU startups (2023–) · Temaribet (founder, 2019–2025, 4,000+ tutors)',
    projects: 'PrepX AI tutoring app · react-native-ajora (6,100+ npm downloads) · UlcerGuard thesis — full case studies at <a href="projects.html">/projects</a>',
    contact: 'email: <a href="mailto:nazrihabtish@gmail.com">nazrihabtish@gmail.com</a> · github: <a href="https://github.com/habasefa">habasefa</a> · <a href="https://www.linkedin.com/in/habtamu-asefa-4b5459195/">linkedin</a>',
    resume: 'opening résumé… <a href="Resume.html">Resume.html</a>'
  };
  var scrollTargets = { about: 'about', skills: 'skills', experience: 'experience', projects: 'projects', contact: 'contact' };

  function enableInput() {
    inputRow.style.display = 'flex';
    input.focus();
    input.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      var raw = input.value.trim();
      var v = raw.toLowerCase();
      input.value = '';
      if (!raw) return;
      // echo
      var echo = el('line cmd', '<span class="prompt">❯</span>' + escapeHtml(raw));
      termBody.appendChild(echo);

      if (v === 'clear' || v === 'cls') { termBody.innerHTML = ''; return; }
      var out = responses[v];
      if (out) {
        termBody.appendChild(el('line out', out));
        if (v === 'resume') setTimeout(function () { window.location.href = 'Resume.html'; }, 650);
        if (scrollTargets[v]) {
          var tgt = document.getElementById(scrollTargets[v]);
          if (tgt) setTimeout(function () { tgt.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 350);
        }
      } else {
        termBody.appendChild(el('line out', 'command not found: <span class="acc">' + escapeHtml(raw) + '</span> — try <span class="acc">help</span>'));
      }
      scrollDown();
    });
  }

  function escapeHtml(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  // focus terminal input on body tap within terminal
  var term = document.getElementById('term');
  if (term) term.addEventListener('click', function () { if (inputRow.style.display !== 'none') input.focus(); });

  // kick off after a short beat
  if (termBody) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // render instantly
      boot.forEach(function (s) {
        if (s.cmd != null) termBody.appendChild(el('line cmd', '<span class="prompt">❯</span>' + s.cmd));
        else termBody.appendChild(el('line out', s.out.replace(/\n/g, '<br>')));
      });
      enableInput();
    } else {
      setTimeout(function () { runBoot(0); }, 450);
    }
  }

})();
