import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../Models/category';
import { Observable } from 'rxjs';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders(
{
  'Content-Type':'application/json'
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
  return this.http.post(this.url+'AddCategory',cat);
}   
public AddSubCategories(subCat:SubCategory):Observable<any>
{
  return this.http.post(this.url+'AddSubCategory',subCat);
}   
public GetCategories():Observable<any>
{
  return this.http.get(this.url+'GetCategory');
} 
public GetSubCategories(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategory/'+cat_id);
}  
public DeleteCategory(cat_id:number):Observable<Category>
{
  return this.http.delete<Category>(this.url+'DeleteCategory/'+cat_id);
}
public DeleteSubcategory(subCat_id:number):Observable<any>
{
  return this.http.delete(this.url+'DeleteSubCategory/'+subCat_id);
}
public GetSeller():Observable<any>
{
  return this.http.get(this.url+'GetSeller');
}
public GetBuyer():Observable<any>
{
  return this.http.get(this.url+'GetBuyer');
}
public GetCategoryById(cat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetCategoryById/'+cat_id);
}
public GetSubCategoryById(subcat_id:number):Observable<any>
{
  return this.http.get(this.url+'GetSubCategoryById/'+subcat_id);
}
public UpdateCategory(cat:Category):Observable<any>
{
  return this.http.put(this.url+'UpdateCategory',cat);
}
public UpdateSubCategory(subcat:SubCategory):Observable<any>
{
  return this.http.put(this.url+'UpdateSubCategory',subcat);
}

}
