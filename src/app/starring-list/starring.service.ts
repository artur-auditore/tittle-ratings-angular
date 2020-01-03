import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarringService {

  starringsUrl = "http://localhost:8000/starrings";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.starringsUrl);
  }
}
