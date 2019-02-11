
      var map;
      function initMap() {
        loc = {lat: 41.879398, lng: -87.632317};
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 14
        });
        const marker = new google.maps.Marker({position: loc, map: map});
      }
