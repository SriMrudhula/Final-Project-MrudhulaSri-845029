import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../Models/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string="http://localhost:51772/api/Seller/";
  constructor(private http:HttpClient) {}
public EditProfile(seller:Seller):Observable<any>
{
  return this.http.put(this.url+'EditProfile',seller);
}   
public GetSeller(sid:number):Observable<any>
{
  return this.http.get(this.url+'GetSeller/'+sid);
}
}
