import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeojsonService {

  readonly url  = 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/cantons.geojson';

// cantons.geojson
// communes.geojson

  constructor(private http: HttpClient) { }

  getHeavyGeoJson() {
    return this.http.get(this.url);
  }
}