import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GeojsonService } from '../geojson.service';

import { Map, View, Feature } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { XYZ, Vector as VectorSource } from 'ol/source';
import { Style, Fill, Stroke, Circle } from 'ol/style';
import { GeoJSON } from 'ol/format';
import { Point } from 'ol/geom';
import { click, singleClick } from 'ol/events/condition';
import Select from 'ol/interaction/Select';

@Component({
  selector: 'app-openlayer',
  templateUrl: './openlayer.component.html',
  styleUrls: ['./openlayer.component.scss']
})
export class OpenlayerComponent implements OnInit {
  map: Map;
  vectorSource: VectorSource = new VectorSource();
  constructor(private service: GeojsonService) {}

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.osm.org/{z}/{x}/{y}.png'
          })
        }),
        new VectorLayer({
          source: this.vectorSource,
          style: new Style({
            stroke: new Stroke({
              color: 'black',
              width: 1
            }),
            fill: new Fill({
              color: 'rgba(0, 0, 255, 0.1)'
            })
          })
        })
      ],
      view: new View({
        center: [288626, 5885039],
        zoom: 5
      })
    });

    this.service.getHeavyGeoJson().subscribe(geojson => {
      this.vectorSource.addFeatures((new GeoJSON()).readFeatures(geojson, {
        dataProjection : 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      }));
    });
  }
}