import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'http-client'
  constructor(public json: JsonService) {
    this.json.getJson('http://localhost/ionic/listar.php').subscribe((res: any)=>{
     console.log(res);
    });
  }
}
