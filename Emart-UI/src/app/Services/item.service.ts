import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../Models/items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string="http://localhost:51772/api/Item/";
  constructor(private http:HttpClient) {}
public AddItem(item:Items):Observable<any>
{
  return this.http.post(this.url+'AddItem',item);
}   
public GetCategories():Observable<any>
{
  return this.http.get(this.url+'GetCategory');
} 
public GetSubCategories(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategory/'+cat_id);
} 
public UpdateItem(item:Items):Observable<any>
{
  return this.http.put(this.url+'UpdateItem',item);
}
public DeleteItem(item_id:number):Observable<any>
{
  return this.http.delete<any>(this.url+'DeleteItem/'+item_id);
}
public GetItems(id:number):Observable<any>
{
  return this.http.get(this.url+'GetItem/'+id);
}
public ViewItems(sid:number,subcat_id:number):Observable<any>
{
  console.log("hai");
  return this.http.get(this.url+'ViewItems/'+1+"/"+subcat_id);
} 
public GetIdByName(name:string):Observable<any>
{
  return this.http.get(this.url+'GetIdByName/'+name);
}
public GetCategoryById(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetCategoryById/'+cat_id);
}
public GetSubCategoryById(subcat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategoryById/'+subcat_id);
}
}
