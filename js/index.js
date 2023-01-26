console.log("Your index.js file is loaded correctly!");

function scrollToAnchor(aid){
    const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '.aboutLink', function(){
    scrollToAnchor('aboutScroll');
  })

  function scrollToAnchor(aid){
    const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '.skillsLink', function(){
    scrollToAnchor('skillsScroll');
  })

  function scrollToAnchor(aid){
    const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '.workLink', function(){
    scrollToAnchor('workScroll');
  })

  function scrollToAnchor(aid){
    const destination = $("a[name='"+ aid +"']");
      $('html,body').animate({
        scrollTop: destination.offset().top
      },'slow');
  }
  
  $(document).on('click', '.contactLink', function(){
    scrollToAnchor('contactScroll');
  })