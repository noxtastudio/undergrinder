/* undergrinder.studio — homepage behaviour
   nav state · off-canvas drawer · lazy video · custom audio player · scroll reveal */
(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---- 18+ age gate (site-wide; the head flash-guard sets .age-locked) ----
     UX gate only, not security. Remembers consent ~30 days in localStorage. */
  if(document.documentElement.classList.contains('age-locked')){
    var AGE_KEY = 'ug_age_verified', AGE_MS = 30*24*60*60*1000;
    var gate = document.createElement('div');
    gate.className = 'agegate';
    gate.setAttribute('role','dialog');
    gate.setAttribute('aria-modal','true');
    gate.setAttribute('aria-labelledby','ageTitle');
    gate.innerHTML =
      '<div class="gatedrip" aria-hidden="true"><span class="gtrickle"></span><span class="drop"></span><span class="drop d2"></span></div>' +
      '<span class="fdrop" style="left:9%;width:8px;height:8px;animation-delay:.1s;animation-duration:2s"></span>' +
      '<span class="fdrop" style="left:24%;animation-delay:.9s;animation-duration:1.7s"></span>' +
      '<span class="fdrop" style="left:38%;width:7px;height:7px;animation-delay:.45s;animation-duration:2.3s"></span>' +
      '<span class="fdrop" style="left:61%;width:11px;height:11px;animation-delay:1.25s;animation-duration:1.8s"></span>' +
      '<span class="fdrop" style="left:73%;animation-delay:.3s;animation-duration:2.1s"></span>' +
      '<span class="fdrop" style="left:84%;width:8px;height:8px;animation-delay:1.6s;animation-duration:1.6s"></span>' +
      '<span class="fdrop" style="left:95%;width:6px;height:6px;animation-delay:.7s;animation-duration:2.4s"></span>' +
      '<div class="agegate-inner">' +
        '<div class="age-mark" aria-hidden="true">☣</div>' +
        '<div class="kicker center">caution · adults only</div>' +
        '<h1 class="black" id="ageTitle">…you must be of age…</h1>' +
        '<p>undergrinder.studio is the home of an extreme underground music / noise label — gorenoise, harsh noise, power electronics, pornogrind. expect graphic artwork, extreme volume, and themes of violence, death and decay. nothing here is cleaned up or softened.</p>' +
        '<p class="age-q">…are you 18 or older?…</p>' +
        '<div class="age-cta">' +
          '<button class="btn blood" id="ageEnter" type="button">i am 18+ — enter <span class="arr">▸</span></button>' +
          '<a class="btn" id="ageLeave" href="https://www.google.com">take me out</a>' +
        '</div>' +
        '<p class="age-fine">by entering you confirm you are of legal age in your jurisdiction. …disgusting as always…</p>' +
      '</div>';
    document.body.appendChild(gate);
    requestAnimationFrame(function(){ gate.classList.add('show'); });
    gate.querySelector('#ageEnter').addEventListener('click', function(){
      try{ localStorage.setItem(AGE_KEY, String(Date.now()+AGE_MS)); }catch(e){}
      document.documentElement.classList.remove('age-locked');
      gate.classList.remove('show');
      setTimeout(function(){ if(gate.parentNode) gate.parentNode.removeChild(gate); }, 420);
      startMusic();
    });
    gate.querySelector('#ageLeave').addEventListener('click', function(e){
      e.preventDefault(); window.location.href = 'https://www.google.com';
    });
  }

  /* ---- background music (homepage) — starts on age-gate enter; button toggles play/pause ---- */
  var musicBtn = document.getElementById('musicToggle');
  var bgAudio = null;
  var M_PLAY = '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8z"/></svg>';
  var M_PAUSE = '<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  function paintMusic(){
    if(!musicBtn) return;
    var playing = bgAudio && !bgAudio.paused;
    musicBtn.classList.toggle('playing', !!playing);
    musicBtn.innerHTML = playing ? M_PAUSE : M_PLAY;
    musicBtn.setAttribute('aria-label', playing ? 'pause music' : 'play music');
    musicBtn.setAttribute('aria-pressed', String(!!playing));
  }
  function startMusic(){
    if(!musicBtn) return;
    if(!bgAudio){
      bgAudio = new Audio('audio/noxious-stimuli.mp3');
      bgAudio.loop = true; bgAudio.preload = 'none';
      bgAudio.addEventListener('play', paintMusic);
      bgAudio.addEventListener('pause', paintMusic);
    }
    var pr = bgAudio.play();
    if(pr && pr.catch) pr.catch(function(){ paintMusic(); });
  }
  if(musicBtn){
    paintMusic();
    musicBtn.addEventListener('click', function(){
      if(!bgAudio || bgAudio.paused) startMusic(); else bgAudio.pause();
    });
  }

  /* ---- preloader (homepage only) — counter + bar + blood trickle ---- */
  var loader = document.getElementById('loader');
  if(loader){
    var lnum = document.getElementById('loaderNum');
    var lbar = document.getElementById('loaderBar');
    var ltrk = document.getElementById('loaderTrickle');
    var pad3 = function(n){ return ('00'+n).slice(-3); };
    var dismiss = function(){
      loader.classList.add('done');
      setTimeout(function(){ loader.style.display = 'none'; }, 950);
    };
    if(reduce){
      if(lnum) lnum.textContent = '100';
      if(lbar) lbar.style.transform = 'scaleX(1)';
      if(ltrk) ltrk.style.transform = 'scaleY(1)';
      setTimeout(dismiss, 320);
    } else {
      var lstart = null, LDUR = 1600;
      var lstep = function(ts){
        if(lstart === null) lstart = ts;
        var p = Math.min((ts-lstart)/LDUR, 1);
        var e = 1 - Math.pow(1-p, 3); // easeOutCubic
        if(lnum) lnum.textContent = pad3(Math.round(e*100));
        if(lbar) lbar.style.transform = 'scaleX('+e+')';
        if(ltrk) ltrk.style.transform = 'scaleY('+e+')';
        if(p < 1) requestAnimationFrame(lstep); else setTimeout(dismiss, 180);
      };
      requestAnimationFrame(lstep);
    }
  }

  /* ---- catalogue-wall background (homepage) — densify + parallax drift ---- */
  var wallEl = document.querySelector('.bgwall .wall');
  var moveWall = function(){};
  if(wallEl){
    // clone the cover set until the wall is ~2.4× the viewport — dense, and
    // tall enough to give the parallax drift room to move
    var orig = [], i;
    for(i=0;i<wallEl.children.length;i++) orig.push(wallEl.children[i]);
    var target = window.innerHeight * 2.4, guard = 0;
    while(wallEl.offsetHeight < target && guard < 14){
      var frag = document.createDocumentFragment();
      for(i=0;i<orig.length;i++) frag.appendChild(orig[i].cloneNode(true));
      wallEl.appendChild(frag);
      guard++;
    }
    if(!reduce){
      moveWall = function(){
        var max = wallEl.offsetHeight - window.innerHeight;
        var shift = Math.min(window.scrollY * 0.14, max > 0 ? max : 0);
        wallEl.style.transform = 'translateX(-50%) translateY(' + (-shift).toFixed(1) + 'px)';
      };
      var wTick = false;
      window.addEventListener('scroll', function(){
        if(!wTick){ wTick = true; requestAnimationFrame(function(){ moveWall(); wTick = false; }); }
      }, {passive:true});
      window.addEventListener('resize', moveWall, {passive:true});
      moveWall();
    }
  }

  /* ---- background-imagery toggle (remembers choice) ---- */
  var wallToggle = document.getElementById('wallToggle');
  if(wallToggle){
    try{ if(localStorage.getItem('ug_wall')==='0') document.documentElement.classList.remove('wall'); }catch(e){}
    var syncWall = function(){
      var on = document.documentElement.classList.contains('wall');
      wallToggle.setAttribute('aria-pressed', String(on));
      wallToggle.textContent = on ? '⊞ bg · on' : '⊞ bg · off';
    };
    syncWall();
    wallToggle.addEventListener('click', function(){
      var on = document.documentElement.classList.toggle('wall');
      try{ localStorage.setItem('ug_wall', on ? '1' : '0'); }catch(e){}
      syncWall();
      if(on) moveWall();
    });
  }

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
