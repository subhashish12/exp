import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Http } from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class UserService extends CommonService  {

  constructor(public http: Http) {
    super(http);
   }

   getlogin(){
     console.log('here is ')
    return super.getValue('');
   }

   signup(data){
    return super.postValue('signup',data);
   }

}
