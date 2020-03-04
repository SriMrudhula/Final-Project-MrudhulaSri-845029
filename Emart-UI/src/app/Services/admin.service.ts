import { Injectable } from '@angular/core';

import { Category } from '../Models/category';
import { Observable } from 'rxjs';
import { SubCategory } from '../Models/sub-category';
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
export class AdminService {
url:string="http://localhost:51772/api/Admin/";
  constructor(private http:HttpClient) {}
public AddCategories(cat:Category):Observable<any>
{
  return this.http.post(this.url+'AddCategory',cat,Requestheaders);
}   
public AddSubCategories(subCat:SubCategory):Observable<any>
{
  return this.http.post(this.url+'AddSubCategory',subCat,Requestheaders);
}   
public GetCategories():Observable<any>
{
  return this.http.get(this.url+'GetCategory',Requestheaders);
} 
public GetSubCategories(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategory/'+cat_id,Requestheaders);
}  
public DeleteCategory(cat_id:number):Observable<Category>
{
  return this.http.delete<Category>(this.url+'DeleteCategory/'+cat_id,Requestheaders);
}
public DeleteSubcategory(subCat_id:number):Observable<any>
{
  return this.http.delete(this.url+'DeleteSubCategory/'+subCat_id,Requestheaders);
}
public GetSeller():Observable<any>
{
  return this.http.get(this.url+'GetSeller',Requestheaders);
}
public GetBuyer():Observable<any>
{
  return this.http.get(this.url+'GetBuyer',Requestheaders);
}
public GetCategoryById(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetCategoryById/'+cat_id,Requestheaders);
}
public GetSubCategoryById(subcat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategoryById/'+subcat_id,Requestheaders);
}
public UpdateCategory(cat:Category):Observable<any>
{
  return this.http.put(this.url+'UpdateCategory',cat,Requestheaders);
}
public UpdateSubCategory(subcat:SubCategory):Observable<any>
{
  return this.http.put(this.url+'UpdateSubCategory',subcat,Requestheaders);
}

}
