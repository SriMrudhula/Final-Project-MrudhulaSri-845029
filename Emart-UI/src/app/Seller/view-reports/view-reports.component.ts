import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
user:string;
  constructor() { 
    this.user=localStorage.getItem('Username')
  }

  ngOnInit(): void {
  }

}
