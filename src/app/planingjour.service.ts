import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaningjourService {

  constructor(private http:HttpClient) { }
  public getAllPlaningjour(){
    return this.http.get('')
  }
}
