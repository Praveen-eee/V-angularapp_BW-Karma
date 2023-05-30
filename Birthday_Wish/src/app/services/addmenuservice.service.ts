import { Injectable } from '@angular/core';
import { Addmenu } from '../class/addmenu';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddmenuserviceService {

  private baseUrl = "http://localhost:8080/admin/addMenu";
  private baseUrl2 = "http://localhost:8080/admin/editMenu";
  private baseUrl3 = "http://localhost:8080/admin/getMenu";
  private baseUrl4 = "http://localhost:8080/admin/deleteMenu";

  constructor(private httpclient : HttpClient) { }

  getAddMenu(): Observable<Addmenu[]>{
    return this.httpclient.get<Addmenu[]>(`${this.baseUrl3}`);
  }

  addAddMenu(addmenu : Addmenu): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`,addmenu);
  }

  getAddmenuById(foodMenuID: number):Observable<Addmenu>{
    return this.httpclient.get<Addmenu>(`${this.baseUrl3}/${foodMenuID}`);
  }

  updateAddmenu(foodMenuID: number,addmenu : Addmenu):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl2}/${foodMenuID}`,addmenu);
  }

  deleteAddMenu(foodMenuID: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl4}/${foodMenuID}`);
  }

}
