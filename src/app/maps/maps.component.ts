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
                        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                        {
                          featureType: 'administrative.locality',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#d59563'}]
                        },
                        {
                          featureType: 'poi',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#d59563'}]
                        },
                        {
                          featureType: 'poi.park',
                          elementType: 'geometry',
                          stylers: [{color: '#263c3f'}]
                        },
                        {
                          featureType: 'poi.park',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#6b9a76'}]
                        },
                        {
                          featureType: 'road',
                          elementType: 'geometry',
                          stylers: [{color: '#38414e'}]
                        },
                        {
                          featureType: 'road',
                          elementType: 'geometry.stroke',
                          stylers: [{color: '#212a37'}]
                        },
                        {
                          featureType: 'road',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#9ca5b3'}]
                        },
                        {
                          featureType: 'road.highway',
                          elementType: 'geometry',
                          stylers: [{color: '#746855'}]
                        },
                        {
                          featureType: 'road.highway',
                          elementType: 'geometry.stroke',
                          stylers: [{color: '#1f2835'}]
                        },
                        {
                          featureType: 'road.highway',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#f3d19c'}]
                        },
                        {
                          featureType: 'transit',
                          elementType: 'geometry',
                          stylers: [{color: '#2f3948'}]
                        },
                        {
                          featureType: 'transit.station',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#d59563'}]
                        },
                        {
                          featureType: 'water',
                          elementType: 'geometry',
                          stylers: [{color: '#17263c'}]
                        },
                        {
                          featureType: 'water',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#515c6d'}]
                        },
                        {
                          featureType: 'water',
                          elementType: 'labels.text.stroke',
                          stylers: [{color: '#17263c'}]
                        }
            ];
            this.getPoints();
      }

}
