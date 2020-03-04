import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from '../Models/seller';

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
export class SellerService {
  url:string="http://localhost:51772/api/Seller/";
  constructor(private http:HttpClient) {}
public EditProfile(seller:Seller):Observable<any>
{
  console.log("hello service");
  return this.http.put(this.url+'EditProfile',seller,Requestheaders);
}   
public GetSeller(sid:number):Observable<any>
{
  return this.http.get(this.url+'GetSeller/'+sid,Requestheaders);
}
}
