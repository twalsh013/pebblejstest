var count = parseInt(localStorage.getItem('count')) || 0;

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    ++count;
  }
  if (count > 3){
    count = 0;
  } 
  if (count === 3 ){
    simply.subtitle('brightness');
  } else if (count === 2 ){
    simply.subtitle('blue');
  } else if (count === 1 ){
    simply.subtitle('green');
  } else if (count === 0 ){
    simply.subtitle('red');
  }
  localStorage.setItem('count', count);
});

simply.text({ title: 'RGB Control', subtitle: count });
