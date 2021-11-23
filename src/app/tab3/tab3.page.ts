import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario = 'Ruffles';
  seguidores = 200000;
  publicaciones = 12;
  siguiendo = 32;
  descripcion = 'hola, mundo';
  nombre = 'ruffles';


  constructor() {}


}
