var app = angular.module('app',[]);

app.controller('customerController', function($scope, $http){
  $scope.data;
  $http.get('http://www.w3schools.com/angular/customers.php').then(function(data){
    $scope.data = data.data.records;
  });

  L.mapbox.accessToken = 'pk.eyJ1IjoibGVvamF2aWVyIiwiYSI6ImNpcXNoeHkxeTAyd2Vmbm5uMGt4emoxemUifQ.hjEVKqGrpC8rj2D1QWWhNw';

  var geojson = [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-77.03238901390978,38.913188059745586]
      },
      "properties": {
        "title": "Mapbox DC",
        "description": "1714 14th St NW, Washington DC",
        "marker-color": "#fc4353",
        "marker-size": "large",
        "marker-symbol": "monument"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-122.414, 37.776]
      },
      "properties": {
        "title": "Mapbox SF",
        "description": "155 9th St, San Francisco",
        "marker-color": "#fc4353",
        "marker-size": "large",
        "marker-symbol": "harbor"
      }
    }
  ];
  
  L.mapbox.map('map', 'mapbox.streets')
    .setView([37.8, -96], 4)
    .featureLayer.setGeoJSON(geojson);

});
