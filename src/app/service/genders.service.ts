import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../model/Gender';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class GendersService {

  gendersUrl = "http://localhost:8000/genders"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.gendersUrl);
  }

  search(term: string): Observable<Gender[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Gender[]>(`${this.gendersUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Gender[]>('search', []))
    )
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
