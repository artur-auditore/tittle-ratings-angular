import { Injectable } from '@angular/core';
import { Title } from '../model/Title'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitlesServiceService {

  titlesUrl = "http://localhost:8000/titles"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  listar(){
    return this.http.get<any[]>(this.titlesUrl);
  }

  getTitle(pk: number){
    const url = `${this.titlesUrl}/${pk}`;
    return this.http.get<Title>(url).pipe(
      catchError(this.handleError<Title>(`getTitle id=${pk}`))
    );
  }

  newTitle(title: Title){
    return this.http.post<Title>(this.titlesUrl, title, this.httpOptions).pipe(
      catchError(this.handleError<Title>(`newStarring`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
