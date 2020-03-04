import { Injectable } from '@angular/core';

import { Items } from '../Models/items';
import { Observable } from 'rxjs';

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
export class ItemService {
  url:string="http://localhost:51772/api/Item/";
  constructor(private http:HttpClient) {}
public AddItem(item:Items):Observable<any>
{
  return this.http.post(this.url+'AddItem',item,Requestheaders);
}   
public GetCategories():Observable<any>
{
  return this.http.get(this.url+'GetCategory',Requestheaders);
} 
public GetSubCategories(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategory/'+cat_id,Requestheaders);
} 
public UpdateItem(item:Items):Observable<any>
{
  return this.http.put(this.url+'UpdateItem',item,Requestheaders);
}
public DeleteItem(item_id:number):Observable<any>
{
  return this.http.delete<any>(this.url+'DeleteItem/'+item_id,Requestheaders);
}
public GetItems(id:number):Observable<any>
{
  return this.http.get(this.url+'GetItem/'+id,Requestheaders);
}
public ViewItems(sid:number,subcat_id:number):Observable<any>
{
  return this.http.get(this.url+'ViewItems/'+sid+"/"+subcat_id,Requestheaders);
} 
public GetIdByName(name:string):Observable<any>
{
  return this.http.get(this.url+'GetIdByName/'+name,Requestheaders);
}
public GetCategoryById(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetCategoryById/'+cat_id,Requestheaders);
}
public GetSubCategoryById(subcat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategoryById/'+subcat_id,Requestheaders);
}
}
