import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {
uname:string;
  constructor() { }

  ngOnInit(): void {
    this.uname=localStorage.getItem('uname');
  }
  logout()
  {
    console.log("logged out");
    localStorage.removeItem('sellerId');
  }

}
