import { Component, OnInit } from '@angular/core';
import { GeojsonService } from '../geojson.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {
  map: L.Map;

  constructor(private service: GeojsonService) {}

  ngOnInit() {
    this.map = L.map('map').setView([46.6, 2.43], 5);

    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);

    this.service.getHeavyGeoJson().subscribe(geojson => {
      L.geoJSON(geojson, {
          style: {
            color: "#000000",
            weight: 1,
            fillColor: "#0000FF",
            fillOpacity: 0.1,
        }
      }).addTo(this.map);
    });
  }

}