import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: Http) { }
  postValue(value, page) {
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));  
    return this.http.post(`https://order-auth.herokuapp.com/${page}`, value, { headers: headers })
      .map(res => res.json())
      // .catch((err) => {
      //   return err;
      // })
  }
 
  getValue(page) {
    console.log('inside common service')
    let headers = new Headers();
    headers.append('Authorization', localStorage.getItem('token'));  
    return this.http.get(`https://order-auth.herokuapp.com/${page}`, { headers: headers })
      .map(res => res.json())
      // .catch((err) => {
      //   return err;
      // })
  }
 
}








