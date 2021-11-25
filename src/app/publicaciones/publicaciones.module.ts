import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PublicacionesComponent } from './publicaciones.component';
import { RouterModule } from '@angular/router';
import { PublicacionRoutingModule } from '../publicacion/publicacion-routing.module';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,  RouterModule, PublicacionRoutingModule ],
  declarations: [PublicacionesComponent],
  exports: [PublicacionesComponent]
})

export class PublicacionesComponentModule {
  constructor(){}
}
