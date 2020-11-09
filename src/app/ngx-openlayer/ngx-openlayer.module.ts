import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxOpenlayerComponent } from './ngx-openlayer.component';

import { HttpClientModule } from '@angular/common/http';
import { GeojsonService } from '../geojson.service';
import { RouterModule } from '@angular/router';
import { AngularOpenlayersModule } from 'ngx-openlayers';

@NgModule({
  imports: [
    CommonModule,
    AngularOpenlayersModule,
    RouterModule.forChild([
      { path: '', component: NgxOpenlayerComponent },
    ]),
    HttpClientModule,
  ],
  declarations: [NgxOpenlayerComponent],
  providers: [GeojsonService]
})
export class NgxOpenlayerModule { }