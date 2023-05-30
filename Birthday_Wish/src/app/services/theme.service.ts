import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Theme } from '../class/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private baseUrl = "http://localhost:8080/admin/addTheme";
  private baseUrl2 = "http://localhost:8080/admin/editTheme";
  private baseUrl3 = "http://localhost:8080/admin/getTheme";
  private baseUrl4 = "http://localhost:8080/admin/deleteTheme";

  constructor(private httpclient : HttpClient) { }

  getAllTheme(): Observable<Theme[]>{
    return this.httpclient.get<Theme[]>(`${this.baseUrl3}`);
  }

  storeTheme(theme : Theme): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`,theme);
  }

  getThemebyId(themeId: number):Observable<Theme>{
    return this.httpclient.get<Theme>(`${this.baseUrl3}/${themeId}`);
  }

  updateTheme(themeId: number,theme : Theme):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl2}/${themeId}`,theme);
  }

  deleteTheme(themeId: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl4}/${themeId}`);
  }
}
