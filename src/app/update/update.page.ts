import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
id: any;
destino: any;
llegada: any;
salida: any;
habitaciones: any;
adultos: any;
kids: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {
    this.route.params.subscribe((param:any)=> {
      this.id = param.id;
      console.log("id= ",this.id);
      this.getReserva(this.id);
    })
   }

  ngOnInit() {

  }

  getReserva(id){
    console.log(id);
    this._apiService.getReserva(id).subscribe((res:any)=>{
      console.log("succes getReserva",res);
      let reserva = res[0];
      this.destino = reserva.destino;
      this.llegada = reserva.llegada;
      this.salida = reserva.salida;
      this.habitaciones = reserva.habitaciones;
      this.adultos = reserva.adultos;
      this.kids = reserva.kids;
    },(err:any)=>{
      console.log("error getReserva",err)
    })
  }

  updateReserva(){
    let data={
     destino: this.destino,
     llegada: this.llegada,
     salida: this.salida,
     habitaciones: this.habitaciones,
     adultos: this.adultos,
     kids: this.kids
    }

    this._apiService.updateReserva(this.id,data).subscribe((res:any)=>{
      console.log("succes Update",res);
      this.router.navigateByUrl('tabs/tab3')
    },(err:any)=>{
      console.log("error Update",err)
    })
  }

}
