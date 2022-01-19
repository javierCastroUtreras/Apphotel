import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( 
    public _apiService: ApiService
  ) {}

  destino;
  llegada;
  salida;
  habitaciones;
  adultos;
  kids;
  imagen;

  selectedFile(event){
    this.imagen = event.target.files[0];
    console.log(this.imagen);

  }
 
 addReserva(){
   let data = {
       destino: this.destino,
       llegada: this.llegada,
       salida: this.salida,
       habitaciones: this.habitaciones,
       adultos: this.adultos,
       kids: this.kids
     }

  /*   var data2= new FormData();
    data2.append("destino", this.destino);
     data2.append("llegada", this.llegada);
     data2.append("salida", this.salida);
     data2.append("habitaciones", this.habitaciones);
     data2.append("adultos", this.adultos);
     data2.append("kids", this.kids);
     data2.append("imagen", this.imagen);*/

      

     console.log("destino: "+this.destino);

     this._apiService.addReserva(data).subscribe((response) => {
        console.log(response);
    });
 //  console.log(data.destino, data.llegada, data.salida, data.habitaciones, data.adultos, data.kids );
     
   }
 
  


   
}
