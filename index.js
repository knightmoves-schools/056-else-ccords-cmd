function calculateAward(points) {
  if (points > 99) {
    return document.getElementById('result').innerHTML = 'First Place';
  } else{ If(points>49 && points<100) {
    document.getElementById('result').innerHTML = 'Second Place';
  } else{ if(points < 49) {
    document.getElementById('result').innerHTML = 'Participation Award';
  }}};
};
