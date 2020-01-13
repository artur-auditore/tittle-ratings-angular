import { Rating } from '../model/Rating';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  ratingsUrl = "http://localhost:8000/ratings";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  listar(){
    return this.http.get<any[]>(this.ratingsUrl);
  }

  getRating(pk: number){
    const url = `${this.ratingsUrl}/${pk}`;
    return this.http.get<Rating>(url).pipe(
      catchError(this.handleError<Rating>(`getRating id=${pk}`))
    );
  }

  newRating(rating: Rating){
    return this.http.post<Rating>(this.ratingsUrl, rating, this.httpOptions).pipe(
      catchError(this.handleError<Rating>(`newRating`)
    ));
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
