var vid = document.querySelector('video');
var unu = document.querySelectorAll('.titrare span');
var acum = vid.currentTime;
$('video').mediaelementplayer({
  stretching: 'fill',
  features: ['playpause', 'volume', 'progress', 'fullscreen'],
  videoVolume: 'horizontal',
  startVolume: 0.1,
  startLanguage: '',
})
vid.addEventListener('timeupdate', (e) => {
  for (var i = 0; i < unu.length; i++){
      var timp = vid.currentTime;
      var start = unu[i].getAttribute('data-start');
      var end = unu[i].getAttribute('data-end');
    if(timp >= start && timp <= end) {
        unu[i].style.color = 'orange';
      }
    else{
        unu[i].style.color = 'black';
      }
  }
});
