import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gender } from '../model/Gender';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class GendersService {

  gendersUrl = "http://localhost:8000/genders"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  listar(): Observable<Gender[]>{
    return this.http.get<Gender[]>(this.gendersUrl);
  }

  newGender(gender: Gender){
    return this.http.post<Gender>(this.gendersUrl, gender, this.httpOptions).pipe(
      catchError(this.handleError<Gender>(`newGender`))
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
