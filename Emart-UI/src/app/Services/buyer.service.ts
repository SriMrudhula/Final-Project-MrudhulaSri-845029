import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Purchase } from '../Models/purchase';
import { Cart } from '../Models/cart';
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
  public SearchItem(item:string):Observable<any>
  {
    return this.http.get(this.url+'SearchItems/'+item,Requestheaders);
  }
public BuyItem(purch:Purchase):Observable<any>
{
  return this.http.post(this.url+'BuyItem',purch,Requestheaders);
}
public AddToCart(cart:Cart):Observable<any>
{
  return this.http.post(this.url+'AddToCart',cart,Requestheaders);
}
public ViewCart(buyerId:number):Observable<any>
{
  return this.http.get(this.url+'ViewCart/'+buyerId,Requestheaders);
}
public RemoveFromCart(cartid:number):Observable<any>
{
  return this.http.delete(this.url+'RemoveFromCart/'+cartid,Requestheaders);
}
public GetItem(itemid:number):Observable<any>
{
  return this.http.get(this.url+'GetItem/'+itemid,Requestheaders);
}
public PurchaseHistory(buyerid:number):Observable<any>
{
  return this.http.get(this.url+'PurchaseHistory/'+buyerid,Requestheaders);
}
}
