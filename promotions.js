/* promotions.js — the gate for undergrinder · promotion
   NOTE: client-side gating is for UX only — it is NOT real security.
   For production on Cloudflare Pages, protect this route with Cloudflare
   Access (or a Worker) so the channel HTML is never served to outsiders.
   The check below just gates the reveal on the front end. */
(function(){
  'use strict';

  // demo password — swap for server-side auth before launch
  var PASSWORD = 'promo';
  var KEY = 'ug_promo_unlocked';

  var body = document.body;
  var form = document.getElementById('gateForm');
  if(!form) return;
  var input = document.getElementById('gateInput');
  var card  = document.querySelector('.gate-card');
  var msg   = document.getElementById('gateMsg');

  function unlock(skipFocus){
    body.classList.remove('locked');
    body.classList.add('unlocked');
    try{ sessionStorage.setItem(KEY,'1'); }catch(e){}
    if(!skipFocus){
      var h = document.querySelector('.phero h1');
      if(h){ h.setAttribute('tabindex','-1'); h.focus({preventScroll:true}); }
      window.scrollTo(0,0);
    }
  }
  function relock(){
    try{ sessionStorage.removeItem(KEY); }catch(e){}
    body.classList.remove('unlocked');
    body.classList.add('locked');
    if(input){ input.value=''; setTimeout(function(){ input.focus(); },120); }
    window.scrollTo(0,0);
  }

  // already unlocked this session?
  var was = false;
  try{ was = sessionStorage.getItem(KEY)==='1'; }catch(e){}
  if(was){ unlock(true); }
  else { body.classList.add('locked'); setTimeout(function(){ if(input) input.focus(); },350); }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var val = (input.value||'').trim().toLowerCase();
    if(val === PASSWORD){
      msg.textContent = '…access granted…';
      msg.classList.add('show');
      setTimeout(unlock, 260);
    } else {
      msg.textContent = '…denied… try again…';
      msg.classList.add('show');
      card.classList.remove('deny'); void card.offsetWidth; card.classList.add('deny');
      input.select();
    }
  });

  document.querySelectorAll('[data-relock]').forEach(function(b){
    b.addEventListener('click', relock);
  });
})();
