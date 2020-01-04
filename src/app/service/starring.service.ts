import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starring } from '../model/Starring';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarringService {

  starringsUrl = "http://localhost:8000/starrings";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.starringsUrl)
    .pipe(
      catchError(this.handleError<Starring[]>(''))
    )
  }

  getStarring(pk: number){
    const url = `${this.starringsUrl}/${pk}`;
    return this.http.get<Starring>(url).pipe(
      catchError(this.handleError<Starring>(`getStarring id=${pk}`))
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
