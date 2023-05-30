import { Injectable } from '@angular/core';
import { addon } from '../class/addon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddonserviceService {

  private baseUrl = "http://localhost:8080/admin/addAddon";
  private baseUrl2 = "http://localhost:8080/admin/editAddon";
  private baseUrl3 = "http://localhost:8080/admin/getAddon";
  private baseUrl4 = "http://localhost:8080/admin/deleteAddon";
  

  constructor(private httpclient : HttpClient) { }

    getList(): Observable<addon[]>{
      return this.httpclient.get<addon[]>(`${this.baseUrl3}`);
    }

    addAddon(add : addon): Observable<object>{
      return this.httpclient.post(`${this.baseUrl}`,add);
    }

    getAddonId(addOnid : number): Observable<addon>
{
  return this.httpclient.get<addon>(`${this.baseUrl3}/${addOnid}`);
}    

  updateAddon(addOnid : number, ad : addon): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl2}/${addOnid}`, ad);
  }

  deleteaddon(addOnid : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl4}/${addOnid}`);
  }
}
