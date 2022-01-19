import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  slides: {img: string, titulo: string, desc: string}[]=[
    {
      img:'/assets/img/hotel.svg',
      titulo: 'El mejor hotel',
      desc:'Para ti y los tuyos'
    }, {
      img:'/assets/img/clock.svg',
      titulo: 'Reserva con rapidez',
      desc:'Reservas en menos de un minuto!'
    }, {
      img:'/assets/img/bills.svg',
      titulo: 'Ahorra dinero',
      desc:'Los mejores precios garantizado!!'
    }
  ]

  constructor() {}

}
