import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

      lat: number = 55.751716;
      lng: number = 48.74731;
      points: any[];
      selectedPoint: any;
      styles: any[];
      iconUrl: string="../assets.idea1.jpg";

      constructor(private dataService: DataService) { }

      onSelect(point: any): void {
            this.selectedPoint = point;
      }

      getPoints(): void {
            this.dataService.getPoints()
                  .subscribe(points => {
                        this.points = points;
                  });
      }

      getSrc(photo: string): string {
            return "assets/"+photo+".jpg";
      }

      getLat(coordinates: any): number {
            return coordinates[1];
      }


      getLon(coordinates: any): number {
            return coordinates[0];
      }

      getIcon(id: number): string {
            if (id == 1)
                  return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
            else
                  return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      }

      ngOnInit() {
            this.styles = [
{
"stylers": [
{
 "visibility": "on"
}
]
},
{
"elementType": "geometry",
"stylers": [
{
 "color": "#212121"
}
]
},
{
"elementType": "labels.icon",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#757575"
}
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
{
 "color": "#212121"
}
]
},
{
"featureType": "administrative",
"stylers": [
{
 "visibility": "on"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry",
"stylers": [
{
 "color": "#757575"
}
]
},
{
"featureType": "administrative.country",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#9e9e9e"
}
]
},
{
"featureType": "administrative.land_parcel",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#bdbdbd"
}
]
},
{
"featureType": "landscape",
"stylers": [
{
 "visibility": "on"
}
]
},
{
"featureType": "poi",
"stylers": [
{
 "visibility": "on"
}
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#757575"
}
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
{
 "color": "#181818"
}
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#616161"
}
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.stroke",
"stylers": [
{
 "color": "#1b1b1b"
}
]
},
{
"featureType": "road",
"stylers": [
{
 "visibility": "on"
}
]
},
{
"featureType": "road",
"elementType": "geometry.fill",
"stylers": [
{
 "color": "#2c2c2c"
}
]
},
{
"featureType": "road",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#8a8a8a"
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
{
 "color": "#373737"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
{
 "color": "#3c3c3c"
}
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [
{
 "color": "#4e4e4e"
}
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#616161"
}
]
},
{
"featureType": "transit",
"stylers": [
{
 "visibility": "on"
}
]
},
{
"featureType": "transit",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#757575"
}
]
},
{
"featureType": "water",
"stylers": [
{
 "visibility": "on"
}
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
{
 "color": "#000000"
}
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#3d3d3d"
}
]
}
            ];
            this.getPoints();
      }

}
