import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languageData;
  private baseUrl2 = 'http://localhost:8080/Language/language';
  constructor(private http: HttpClient) { }

  saveLanguage(langData: Object):Observable<Object>{
    this.languageData=langData;
    return this.http.post(`${this.baseUrl2}`,langData);
  }

  getLanguageData(): Observable<any>{
		return this.http.get(`${this.baseUrl2}`);
    }
}
