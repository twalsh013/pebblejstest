var count = parseInt(localStorage.getItem('count')) || 0;
var word = localStorage.getItem('word') || 'red';
var redcount = parseInt(localStorage.getItem("rcount")) || 0;
var greencount = parseInt(localStorage.getItem("gcount")) || 0;
var bluecount = parseInt(localStorage.getItem("bcount")) || 0;
var brightcount = parseInt(localStorage.getItem("brightcount")) || 0;



simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    ++count;
  } else if (e.button === 'up'){
    if ( word === 'red' ){
      ++redcount;
      if(redcount > 255){
        redcount = 255;
      }
      simply.body(redcount);
    } else if ( word === 'blue' ){
      ++bluecount;
      if(bluecount > 255){
        bluecount = 255;
      }
      simply.body(bluecount);
    } else if ( word === 'green' ){
      ++greencount;
      if(greencount > 255){
        greencount = 255;
      }
      simply.body(greencount);
    } else if ( word === 'brightness' ){
      ++brightcount;
      if(brightcount > 255){
        brightcount = 255;
      }
      simply.body(brightcount);
    } 
  } else if (e.button === 'down'){
    if ( word === 'red' ){
      --redcount;
      if(redcount < 0){
        redcount = 0;
      }
      simply.body(redcount);
    } else if ( word === 'blue' ){
      --bluecount;
      if(bluecount < 0){
        bluecount = 0;
      }
      simply.body(bluecount);
    } else if ( word === 'green' ){
      --greencount;
      if(greencount < 0){
        greencount = 0;
      }
      simply.body(greencount);
    } else if ( word === 'brightness' ){
      --brightcount;
      if(brightcount < 0){
        brightcount = 0;
      }
      simply.body(brightcount);
    } 
  }
  if (count > 3){
    count = 0;
  } 
  if (count === 3 ){
    word = 'brightness';
    //simply.body(brightcount);
  } else if (count === 2 ){
    word = 'blue';
    //simply.body(bluecount);
  } else if (count === 1 ){
    word = 'green';
    //simply.body(greencount);
  } else if (count === 0 ){
    word = 'red';
    //simply.body(redcount);
  }
  simply.subtitle(word);
  localStorage.setItem('count', count);
  localStorage.setItem('word', word);
  localStorage.setItem('rcount', redcount);
  localStorage.setItem('gcount', greencount);
  localStorage.setItem('bcount', bluecount);
  localStorage.setItem('brightcount', brightcount);
});

simply.text({ title: 'RGB Control', subtitle: word });
