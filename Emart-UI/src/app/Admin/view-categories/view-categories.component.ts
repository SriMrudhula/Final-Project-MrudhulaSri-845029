import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import { AdminLandingPageComponent } from '../admin-landing-page/admin-landing-page.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
  providers:[AdminService]
})
export class ViewCategoriesComponent implements OnInit {
  list:Category[];

  constructor(private service:AdminService){}

    ngOnInit(): void {
      this.Get();
    }
    Get()
    {
      this.service.GetCategories().subscribe(res=>{
        this.list=res;
        console.log(this.list);
        })
   }    
}
