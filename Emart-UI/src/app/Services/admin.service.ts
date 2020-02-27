import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/category';
import { Observable } from 'rxjs';
import { SubCategory } from '../Models/sub-category';

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
}
