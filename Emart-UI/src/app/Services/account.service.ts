import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';
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
export class AccountService {
  url:String='http://localhost:51772/api/Account/'
  constructor(private http:HttpClient) { }
  public BuyerRegister(buyer:Buyer):Observable<any>
  {
      return this.http.post(this.url+'BuyerRegister',buyer,Requestheaders); 
  }
  public SellerRegister(seller:Seller):Observable<any>
  {
    return this.http.post(this.url+'SellerRegister',seller,Requestheaders);
  }
  public Login(username:string,pwd:string,user:string):Observable<any>
  {
    return this.http.get(this.url+'Login/'+username+"/"+pwd+"/"+user,Requestheaders);
  }
  
}
