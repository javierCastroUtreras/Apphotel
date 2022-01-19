import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  Hoteles: any = [];

  constructor(
    public _apiService: ApiService
  ) {

    this.getHoteles();
  }

  /*Hoteles =  [{"nombre": "Hotel W",
  "llegada": "19/04/2022",
  "salida": "22/04/2022",
  "img": "w.jpg",
  "habitaciones": 1,
  "adultos": 2,
  "niños": 0
},{"nombre": "Hotel Picasso",
"llegada": "17/08/2022",
"salida": "21/08/2022",
"img": "picasso.jpg",
"habitaciones": 2,
"adultos": 4,
"niños": 2
}];
*/
getHoteles(){
  this._apiService.readReservas().subscribe((response) => {
      console.log(response);
      this.Hoteles = response;
  });
}

  ngOnInit() {
  }
  
  deleteReserva(id){
    //this.Hoteles.splice(i,1);
    this._apiService.deleteReserva(id).subscribe((res:any) =>{
      console.log("succes");
      this.getHoteles();
    },(err:any)=> {
      console.log("error")
    })
  }
 

}
