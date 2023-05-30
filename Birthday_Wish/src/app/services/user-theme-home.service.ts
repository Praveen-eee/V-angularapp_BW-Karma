import { Injectable } from '@angular/core';
import { Theme } from '../class/theme';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserThemeHomeService {

  private baseUrl1 = "http://localhost:8080/user/getAllThemes";
  
  constructor(private httpclient : HttpClient) { }

  getAllThemes(): Observable<Theme[]>{
    return this.httpclient.get<Theme[]>(`${this.baseUrl1}`);
  }
}
