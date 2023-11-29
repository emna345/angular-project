import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenphysiqueService {

  constructor(private http:HttpClient) { }
  public getAllExamenphysique(){
    return this.http.get('')
  }
}
