import { Component, OnInit } from '@angular/core';

export interface Publicaciones{
  imagen;
  id;
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}


     // eslint-disable-next-line @typescript-eslint/member-ordering
     publicacionesArreglo: Publicaciones[] = [
      {
        imagen: '../../assets/images/Post 1.jpg',
        id: 1
      },
      {
        imagen: '../../assets/images/Post 2.png',
        id: 2
      },
      {
        imagen: '../../assets/images/Post 3.png',
        id: 3
      },
      {
        imagen: '../../assets/images/Post 4.png',
        id: 4
      }
    ];
}
