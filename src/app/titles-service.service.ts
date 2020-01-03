import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitlesServiceService {

  titlesUrl = "http://localhost:8000/titles"

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.titlesUrl);
  }
}
