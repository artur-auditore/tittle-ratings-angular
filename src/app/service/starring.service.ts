import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Starring } from '../model/Starring';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarringService {

  starringsUrl = "http://localhost:8000/starrings";

  headers = new HttpHeaders()
   .append('Content-Type' , 'application/json');
  showMenu = new EventEmitter<boolean>()

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

  newStarring(starring: Starring){
    return this.http.post<Starring>(this.starringsUrl, starring, {headers: this.headers}).pipe(
      catchError(this.handleError<Starring>(`newStarring`))
    );
  }

  updateStarring (starring: Starring): Observable<any> {
    return this.http.put(this.starringsUrl + `/${starring.pk}`, Starring, {headers: this.headers}).pipe(
      catchError(this.handleError<any>('updateStarring'))
    );
  }

  delete(starring: Starring| number){
    const pk = typeof starring === 'number' ? starring : starring.pk;
    const url = `${this.starringsUrl}/${pk}`;

    return this.http.delete<Starring>(url, this.httpOptions).pipe(
      catchError(this.handleError<Starring>('deletestarring'))
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
