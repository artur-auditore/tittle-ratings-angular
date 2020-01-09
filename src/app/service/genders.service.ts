import { FormGroup } from '@angular/forms';
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

  listar(): Observable<Gender[]>{
    return this.http.get<Gender[]>(this.gendersUrl);
  }
}
