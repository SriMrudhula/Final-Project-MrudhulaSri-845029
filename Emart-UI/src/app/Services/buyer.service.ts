import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string="http://localhost:51772/api/Buyer/";
  constructor(private http:HttpClient) {}
  public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.put(this.url+'EditProfile',buyer);
  }   
  public GetProfile(bid:number):Observable<any>
  {
    return this.http.get(this.url+'GetProfile/'+bid);
  } 

}
