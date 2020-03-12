import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  constructor(private route:Router) { 
    if(!localStorage.getItem('buyerId'))
       this.route.navigateByUrl("/Home/Login");
  }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.removeItem('buyerId');
  }
}

