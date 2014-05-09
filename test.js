var count = parseInt(localStorage.getItem('count')) || 0;
var word = localStorage.getItem('word') || 'red';
simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    ++count;
  }
  if (count > 3){
    count = 0;
  } 
  if (count === 3 ){
    word = 'brightness';
  } else if (count === 2 ){
    word = 'blue';
  } else if (count === 1 ){
    word = 'green';
  } else if (count === 0 ){
    word = 'red';
  }
  simply.subtitle(word);
  localStorage.setItem('count', count);
  localStorage.setItem('word', word);
});

simply.text({ title: 'RGB Control', subtitle: word });
