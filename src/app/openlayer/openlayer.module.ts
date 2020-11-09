import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OpenlayerComponent } from './openlayer.component';
import { GeojsonService } from '../geojson.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: OpenlayerComponent },
    ]),
    HttpClientModule
  ],
  declarations: [OpenlayerComponent],
  providers: [GeojsonService]
})
export class OpenlayerModule { }