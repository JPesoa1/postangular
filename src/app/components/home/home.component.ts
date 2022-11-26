import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/ApiService/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public objeto!: Array<any>
  constructor(private _service:ApiServiceService) { }

  ngOnInit(): void {
    this._service.getPersonajes().then(res=>{
      this.objeto=res;
    })
  }

}
