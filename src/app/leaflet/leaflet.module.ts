import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from './leaflet.component';
import { HttpClientModule } from '@angular/common/http';
import { GeojsonService } from '../geojson.service';

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild([
      { path: '', component: LeafletComponent },
    ]),
    HttpClientModule,
  ],
  declarations: [LeafletComponent],
  providers: [GeojsonService]
})
export class LeafletModule { }