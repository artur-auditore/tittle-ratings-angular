import { Profile } from './../model/Profile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  profilesUrl = "http://localhost:8000/profiles"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.profilesUrl)
    .pipe(
      catchError(this.handleError<Profile[]>(''))
    )
  }

  getProfiles(pk: number){
    const url = `${this.profilesUrl}/${pk}`;
    return this.http.get<Profile>(url).pipe(
      catchError(this.handleError<Profile>(`getProfile id=${pk}`))
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
