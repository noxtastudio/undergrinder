/* undergrinder.studio — homepage behaviour
   nav state · off-canvas drawer · lazy video · custom audio player · scroll reveal */
(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---- nav scrolled state ---- */
  var nav = document.querySelector('.nav');
  var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 12); };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* ---- off-canvas drawer ---- */
  var drawer = document.querySelector('.drawer');
  var openBtn = document.querySelector('.burger');
  var closeEls = drawer.querySelectorAll('[data-close]');
  function setDrawer(open){
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    openBtn.setAttribute('aria-expanded', String(open));
  }
  openBtn.addEventListener('click', function(){ setDrawer(true); });
  closeEls.forEach(function(el){ el.addEventListener('click', function(){ setDrawer(false); }); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') setDrawer(false); });

  /* ---- lazy YouTube video cards ---- */
  document.querySelectorAll('.vcard').forEach(function(card){
    card.addEventListener('click', function(){
      if(card.classList.contains('playing')) return;
      var id = card.getAttribute('data-yt');
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1';
      f.allow = 'autoplay; encrypted-media; fullscreen';
      f.setAttribute('allowfullscreen','');
      f.title = card.getAttribute('data-title') || 'video';
      card.appendChild(f);
      card.classList.add('playing');
    });
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); card.click(); } });
  });

  /* ---- custom audio player ---- */
  document.querySelectorAll('.player').forEach(function(p){
    var src = p.getAttribute('data-src');
    var audio = new Audio();
    audio.preload = 'none';
    if(src) audio.src = src;
    var pp = p.querySelector('.pp');
    var fill = p.querySelector('.fill');
    var seek = p.querySelector('.seek');
    var tEl = p.querySelector('.time');
    var playing = false, ready = false;
    var ICON_PLAY = '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>';
    var ICON_PAUSE = '<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';

    function fmt(s){ if(!isFinite(s)) return '0:00'; s=Math.max(0,Math.floor(s)); return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2); }
    function paint(){
      var d = audio.duration||0, c = audio.currentTime||0;
      fill.style.width = d ? (c/d*100)+'%' : '0%';
      tEl.textContent = fmt(c)+' / '+(d?fmt(d):'--:--');
    }
    audio.addEventListener('loadedmetadata', function(){ ready=true; paint(); });
    audio.addEventListener('timeupdate', paint);
    audio.addEventListener('ended', function(){ playing=false; pp.innerHTML=ICON_PLAY; });
    audio.addEventListener('error', function(){ tEl.textContent='preview offline'; });

    pp.innerHTML = ICON_PLAY;
    pp.addEventListener('click', function(){
      if(playing){ audio.pause(); playing=false; pp.innerHTML=ICON_PLAY; return; }
      var pr = audio.play();
      if(pr && pr.then){ pr.then(function(){ playing=true; pp.innerHTML=ICON_PAUSE; })
        .catch(function(){ tEl.textContent='preview offline'; }); }
      else { playing=true; pp.innerHTML=ICON_PAUSE; }
    });
    seek.addEventListener('click', function(e){
      if(!audio.duration) return;
      var r = seek.getBoundingClientRect();
      audio.currentTime = ((e.clientX-r.left)/r.width)*audio.duration;
      paint();
    });
  });

  /* ---- scroll direction tracking ---- */
  var lastY = window.scrollY, dir = 1; // 1 = down, -1 = up
  function trackDir(){
    var y = window.scrollY;
    if(y > lastY) dir = 1; else if(y < lastY) dir = -1;
    lastY = y;
  }

  /* ---- background parallax (scroll-linked) ---- */
  var pEls = [].slice.call(document.querySelectorAll('[data-parallax]'));
  var vh = window.innerHeight, ticking = false;
  function applyParallax(){
    for(var i=0;i<pEls.length;i++){
      var el = pEls[i], host = el.parentElement, r = host.getBoundingClientRect();
      if(r.bottom < -240 || r.top > vh + 240) continue;        // skip offscreen
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
      var centerOffset = (r.top + r.height/2) - vh/2;            // 0 when centered
      el.style.translate = '0 ' + (-centerOffset * speed).toFixed(1) + 'px';
    }
  }

  /* ---- direction-aware reveals (replay both ways) ---- */
  var rvs = document.querySelectorAll('.rv');
  if(reduce || !('IntersectionObserver' in window)){
    rvs.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.style.setProperty('--rvy', (dir > 0 ? 30 : -30) + 'px'); // enter toward scroll dir
          en.target.classList.add('in');
        } else {
          en.target.classList.remove('in');
          en.target.style.setProperty('--rvy', (dir > 0 ? -30 : 30) + 'px'); // exit with scroll dir
        }
      });
    }, {threshold:0.14, rootMargin:'-6% 0px -6% 0px'});
    rvs.forEach(function(el){ io.observe(el); });
  }

  /* ---- one rAF-throttled scroll handler for direction + parallax ---- */
  if(!reduce){
    window.addEventListener('scroll', function(){
      trackDir();
      if(!ticking){ ticking = true; requestAnimationFrame(function(){ applyParallax(); ticking = false; }); }
    }, {passive:true});
    window.addEventListener('resize', function(){ vh = window.innerHeight; applyParallax(); }, {passive:true});
    applyParallax();
  }
})();
