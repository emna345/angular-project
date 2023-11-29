import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaningannuelService {

  constructor(private http:HttpClient) { }
  public getAllPlaningannuel(){
    return this.http.get('')
  }
}
