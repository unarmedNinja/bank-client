import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/summary']);
  } 

  next() {
    this.router.navigate(['/approve']);
  }
}
