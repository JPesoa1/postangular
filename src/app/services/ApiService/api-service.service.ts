import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  getPersonajes():Promise<any>{
    return new Promise(function(resolve){
      var request="/character"
      var url=environment.urlRickMorty+request;
      axios.get(url).then(res=>{
          resolve(res.data.results);
      })
    }) 
  }
 
}
