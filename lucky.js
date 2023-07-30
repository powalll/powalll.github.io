$('#search_btns button').hover(function() {
    btnTimeID = setTimeout(function() {
      
      // We are using the math object to randomly pick a number between 1 - 11, and then applying the formula (5n-3)5 to this number, which leaves us with a randomly selected number that is applied to the <ul> (i.e. -185) and corresponds to the position of a word (or <li> element, i.e. "I'm Feeling Curious").
      var pos = -((Math.floor((Math.random() * 11) + 1)) * 5 - 3) * 5
      
      if (pos === -135) {
        console.log("position didn't change, let's force change")
        pos = -35;
      }
      
      $('#search_btns button ul').animate({'bottom':pos + 'px'}, 300);
      console.log(pos)
      // Change the width of the button to fit the currently selected word.
      if (pos === -10 || pos === -60 || pos === -160) {
        $('#search_btns button').css('width', '149px');
      } else if (pos === -85) {
        $('#search_btns button').css('width', '171px');
      } else if (pos === -210) {
        $('#search_btns button').css('width', '168px');
      } else if (pos === -35 || pos === -185 || pos == -235){
        $('#search_btns button').css('width', '153px');
      } else if(pos === -110){
          $('#search_btns button').css('width', '143px');
      } else {
        $('#search_btns button').css('width', '135px'); 
      }
    },200);
  }, function() {
    
    clearTimeout(btnTimeID);
    
    setTimeout(function() {
      console.log('setTimeout function');
      $('#search_btns button ul').css('bottom', '-135px'); // this is the original position
      $('#search_btns button').css('width', '144px'); // reset the original width of the button
    },200);
  });
