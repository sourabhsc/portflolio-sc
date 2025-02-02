$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "sourabhsc.ai -h <br/>" + 
      "><span class='caret'>$</span> Skills: Machine learning: NLP, Computer Vision, Knowledge Graphs:SPARQL, RAG <br/> ^100" +
      /*"><span class='caret'>$</span> job: android auto at <a href='http://www.google.com/'>Google Munich</a><br/> ^100" +*/
      "><span class='caret'>$</span> Hobbies: Badminton, Travel, gardening<br/> ^300" +
      "><span class='caret'>$</span> Alias: sourabhsc <br/>" +
      "><span class='caret'>$</span> Highlights:  <a href='https://sourabhsc.github.io/NULIRG'>Image segmentation on HST ULIRGs</a>, <a href='http://dharavicovid.onrender.com/'>A JHU covid challenge solution</a><br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
