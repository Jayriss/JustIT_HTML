var map = new GMaps({
  div: '#map',
  lat: 51.5132989,
  lng: -0.0771099
});

map.addMarker({
  lat: 51.5132989,
  lng: -0.0771099,
  title: 'JustIT',
  click: function(e) {
    alert('<p>Just IT Main Office');
  }
});

new WOW().init();
