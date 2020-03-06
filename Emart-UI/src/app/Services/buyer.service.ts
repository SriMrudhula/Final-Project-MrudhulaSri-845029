import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Purchase } from '../Models/purchase';
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
  public SearchItem(item:string):Observable<any>
  {
    return this.http.get(this.url+'SearchItems/'+item,Requestheaders);
  }
  public GetSubCategoryByName(item:string):Observable<any>
  {
    return this.http.get(this.url+'GetSubCategoryByName/'+item,Requestheaders);
  }
  public GetCategoryByName(item:string):Observable<any>
  {
    return this.http.get(this.url+'GetCategoryByName/'+item,Requestheaders);
  }
public BuyItem(purch:Purchase):Observable<any>
{
  return this.http.post(this.url+'BuyItem',purch,Requestheaders);
}
public ItemSearch(id:number):Observable<any>
{
  return this.http.post(this.url+'ItemSearch/'+id,Requestheaders);
}
}
