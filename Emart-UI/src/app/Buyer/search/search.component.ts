import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
buyerForm:FormGroup;
load:number=0;
items:Items[];
itemname:string;
cat:Category[];
subcat:SubCategory[];
  constructor(private builder:FormBuilder,private route:Router,private service:BuyerService) { }

  ngOnInit(): void {
    this.buyerForm=this.builder.group({
      itemName:[''],
    })
  }

  SearchItem()
  {
    let name=this.buyerForm.value['itemName'];
    console.log(name);
    this.service.SearchItem(name).subscribe(res=>{
    this.items=res;
    console.log(this.items);
    
    if((this.items).length!=0){
      this.load=1;
      console.log("true");
    }

    })
   

    // else{
    //  alert("Item Not Found");
    //  this.load=0;
    //  console.log("false");
    // }
  }
  BuyProduct(item:Items)
  {
    localStorage.setItem('item',JSON.stringify(item));
this.route.navigateByUrl("/Buyer/Buy-Product");
  }
AddToCart(item:Items)
{

}

}
