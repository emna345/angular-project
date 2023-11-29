import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilannutritonelService {

  constructor(private http:HttpClient) { }
  public getAllBilannutritionel(){
    return this.http.get('')
  }
}
