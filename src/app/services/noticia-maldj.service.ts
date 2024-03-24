import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaMaldjService {

  constructor(private http : HttpClient ) { }

  getNoticias (parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    + parametros.pais +  '&category=' + parametros.categoria + '&apiKey=8165aab256f24c41b4483783bc2898c8'

    return this.http.get(URL);
  }
}
