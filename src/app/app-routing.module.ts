import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'openlayer',
    loadChildren: './openlayer/openlayer.module#OpenlayerModule',
  },
  {
    path: 'leaflet',
    loadChildren: './leaflet/leaflet.module#LeafletModule',
  },
  {
    path: 'ngx-openlayer',
    loadChildren: './ngx-openlayer/ngx-openlayer.module#NgxOpenlayerModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
