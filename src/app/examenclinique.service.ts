import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamencliniqueService {

  constructor(private http:HttpClient) { }
  public getAllExamenclinique(){
    return this.http.get('')
  }
}
