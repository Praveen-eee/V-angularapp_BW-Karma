import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  // private baseUrl1="http://localhost:8080/user/signup";

  constructor(private httpclient :HttpClient) { }

  checkEmail(email:String):Observable<Boolean>{
    console.log(email);
    return this.httpclient.get<Boolean>(`http://localhost:8080/user/signup/`+email);
    // return this.httpclient.get<Boolean>(`http://localhost:8080/user/signup/{email}`);
  }

  storeUser(newUser: User):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpclient.post('http://localhost:8080/user/signup', newUser, requestOptions);
  }

  storeAdmin(newUser: User):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpclient.post('http://localhost:8080/admin/signup', newUser, requestOptions);
  }


  
}
