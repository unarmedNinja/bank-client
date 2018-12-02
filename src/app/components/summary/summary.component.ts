import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {
  doShowMortgage: boolean;
  constructor(private router: Router) { 
    this.doShowMortgage = false;
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/cibc']);
  } 

  next() {
    this.router.navigate(['/review']);
  }
  
  showMortgage() {
    this.doShowMortgage = true;
  }
}
