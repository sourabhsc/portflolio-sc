$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "sourabhsc.ai -h <br/>" + 
      "><span class='caret'>$</span> Skills: Data Engineering, Knowledge Graph, Machine learning, Computer Vision, ETL, NLP, RAG <br/></br> ^100" +
      "><span class='caret'>$</span> Highlights:  <a href='https://sourabhsc.github.io/NULIRG'>Image segmentation on HST ULIRGs</a>, <a href='http://dharavicovid.onrender.com/'>A JHU covid challenge solution</a><br/><br/>" +
      "><span class='caret'>$</span> Conferences contributions:  <a href='https://www.kmworld.com/Articles/News/News/Squirro-and-Semantic-Web-Company-collaborate-to-create-a-Composite-AI-solution-156110.aspx'>KM World 2022 </a>, <a href='https://www.taxonomybootcamp.com/2024/Laura-Rodriguez.aspx'>KM World 2024, <a href='https://www.linkedin.com/posts/sourabh-singh-chauhan_etw2025-iaea-nuclearsafety-activity-7290863035924058115-glKw?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgpL94BCkz83qc56N9JkclZRU7_URJRNN4'>IAEA conference presentation 2025</a>, <a href='https://www.linkedin.com/posts/helmutnagy_knowledgemanagement-knowledgesummitdublin-activity-7346256954538823681-XeZ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgpL94BCkz83qc56N9JkclZRU7_URJRNN4'> KM Summit Dublin 2025</a><br/><br/>" +
      "><span class='caret'>$</span> Hobbies: Badminton, Gardening, Travel<br/><br/> ^300" +
      "><span class='caret'>$</span> Alias: sourabhsc <br/><br/><br/>" 
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
