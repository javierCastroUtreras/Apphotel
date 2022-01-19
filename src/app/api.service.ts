import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
     public http: HttpClient
    ) { }

    addReserva(data){
      return this.http.post('http://localhost/ionic/insert.php', data);
    }
  

    readReservas(){
      return this.http.get('http://localhost/ionic/listar.php');
    }

    deleteReserva(id){
      return this.http.delete('http://localhost/ionic/delete.php?id='+id);
    }

    getReserva(id){
      return this.http.get('http://localhost/ionic/unaReserva.php?id='+id);
    }

    updateReserva(id,data){
      return this.http.put('http://localhost/ionic/update.php?id='+id,data);
    }
}
