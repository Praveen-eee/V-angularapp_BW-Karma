import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/class/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus: boolean = false;
  constructor(private httpclient :HttpClient) { }

  checkUserRolebyEmail(email:String):Observable<any>{
    console.log(email);
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpclient.get<any>(`http://localhost:8080/login/checkUserRole/`+email,requestOptions);
  }

  //login to Admin/User page
  isUserPresent(login: Login):Observable<Boolean>{

    return this.httpclient.post<Boolean>('http://localhost:8080/user/login', login);
  }

  isAdminPresent(login: Login):Observable<Boolean>{

    return this.httpclient.post<Boolean>('http://localhost:8080/admin/login', login);
  }
}
