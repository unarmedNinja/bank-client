import { Component, OnInit } from '@angular/core';
import { CibcService } from "../../services/cibc.service";
import { ActivatedRoute } from '@angular/router';
import { RootPayObject } from "../../models/pay";
import { RootAccountObject } from "../../models/accounts";
import { IncomeLine } from "../../models/income.line";
 

@Component({
  selector: 'app-cibc',
  templateUrl: './cibc.component.html',
  styleUrls: ['./cibc.component.sass']
})
export class CibcComponent implements OnInit {
  private accounts;
  private pay;
  private income;

  constructor(private route: ActivatedRoute, private cibcService: CibcService) { 
    this.pay = {};
    this.accounts = [];
    this.income = [];
  }

  ngOnInit() {
    this.getAccounts();
    this.getIncome();
    this.getPay();
  }

  getAccounts() : void {
    this.cibcService.getAccounts().subscribe(accounts => this.accounts = accounts);
  }

  getPay() : void {
    this.cibcService.getPay().subscribe(pay => this.pay = pay);
  }

  getIncome() : void {
    this.cibcService.getIncome().subscribe(income => this.income = income);
  }
}
