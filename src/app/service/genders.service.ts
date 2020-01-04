import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GendersService {

  gendersUrl = "http://localhost:8000/genders"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.gendersUrl);
  }
}
