import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const Requestheaders={headers:new HttpHeaders(
  {
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('token')
  }
  )}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string="http://localhost:51772/api/Buyer/";
  constructor(private http:HttpClient) {}
  public EditProfile(buyer:Buyer):Observable<any>
  {
    return this.http.put(this.url+'EditProfile',buyer,Requestheaders);
  }   
  public GetProfile(bid:number):Observable<any>
  {
    return this.http.get(this.url+'GetProfile/'+bid,Requestheaders);
  } 
  public ViewCart():Observable<any>
  {
    return this.http.get(this.url+'ViewCart',Requestheaders);
  }

}
