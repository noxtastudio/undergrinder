/* contact.js — submission form behaviour
   No backend: composes a mailto: and opens the visitor's mail client.
   To receive submissions in-app instead, point the form at a Cloudflare
   Pages Function or Formspree and POST it. */
(function(){
  'use strict';
  var form = document.getElementById('submForm');
  if(!form) return;

  var EMAIL = 'contact@undergrinder.studio';   // ← the label's address
  var sent  = document.getElementById('submSent');
  var REQUIRED = ['project','email','message'];

  function f(name){ return form.elements[name]; }
  function wrap(el){ return el.closest('.field'); }
  function emailOk(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true;

    REQUIRED.forEach(function(n){
      var el = f(n), bad = !el.value.trim();
      wrap(el).classList.toggle('invalid', bad);
      if(bad) ok = false;
    });
    var em = f('email');
    if(em.value.trim() && !emailOk(em.value.trim())){ wrap(em).classList.add('invalid'); ok = false; }

    if(!ok){
      var first = form.querySelector('.field.invalid input, .field.invalid textarea');
      if(first) first.focus();
      return;
    }

    var project = f('project').value.trim();
    var genre   = f('genre').value;
    var links   = f('links').value.trim();
    var message = f('message').value.trim();

    var subject = '[submission] ' + project + (genre ? ' — ' + genre : '');
    var body =
      'project / artist: ' + project + '\n' +
      'email: ' + em.value.trim() + '\n' +
      'genre: ' + (genre || '—') + '\n' +
      'links: ' + (links || '—') + '\n\n' +
      message + '\n';

    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body='   + encodeURIComponent(body);

    sent.classList.add('show');
  });

  // clear the invalid flag as soon as a field is touched
  form.addEventListener('input', function(e){
    var w = e.target.closest('.field');
    if(w) w.classList.remove('invalid');
  });
})();
