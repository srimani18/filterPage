import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = 'http://localhost:6420';
  constructor(private http:HttpClient) { }

 getBooks(): Observable<any> {
  return this.http.get(`${this.apiUrl}/book`);
  }
  getBook(_id:any) : Observable<any>{
      return this.http.get(`${this.apiUrl}/book/${_id}`);
  }

  getAllChaptersByBookID(id:any): Observable<any>{
      return this.http.get(`${this.apiUrl}/book/${id}/chapter`);
  }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`);
  }

  getCharacterById(_id:any): Observable<any>{
      return this.http.get(`${this.apiUrl}/character/${_id}`);
  }

  getAllMovieQuotesByCharacterId(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/character/${id}/quote`);
}

getMovies(): Observable<any>{
  return this.http.get(`${this.apiUrl}/movie`);
}

getMovieById(id:any): Observable<any>{
  return this.http.get(`${this.apiUrl}/movie/${id}`);
}

getAllQuotesByMovieId(id:any): Observable<any>{
  return this.http.get(`${this.apiUrl}/movie/${id}/quote`);
}

getQuotes(): Observable<any>{
  return this.http.get(`${this.apiUrl}/quote`);
}

getQuoteById(id:any): Observable<any>{
  return this.http.get(`${this.apiUrl}/quote/${id}`);
}


}