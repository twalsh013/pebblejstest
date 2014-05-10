var count = parseInt(localStorage.getItem('count')) || 0;
var word = localStorage.getItem('word') || 'red';
var levelcount = parseInt(localStorage.getItem("level")) || 0;



simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    ++count;
  } else if (e.button === 'up'){
      ++levelcount;
      if(levelcount > 255){
        levelcount = 255;
      }
      simply.body(levelcount);
  } else if (e.button === 'down'){
      --levelcount;
      if(levelcount < 0){
        levelcount = 0;
      }
      simply.body(levelcount);
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
