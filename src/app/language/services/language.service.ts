import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languageData;
  private baseUrl2 = 'https://fxlangpoc.azurewebsites.net/api/AddLanguage/';
  private baseUrl1 = 'https://fxlangpoc.azurewebsites.net/api/GetLanguageList/';
  constructor(private http: HttpClient) { }

  saveLanguage(langData: Object):Observable<Object>{
    this.languageData=langData;
    return this.http.post(`${this.baseUrl2}`,langData);
  }

  getLanguageData(): Observable<any>{
		return this.http.get(`${this.baseUrl1}`);
    }
}
