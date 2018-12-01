import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IncomeLine } from "../models/income.line";
import { Observable, of } from 'rxjs';
import { RootPayObject } from "../models/pay";
import { RootAccountObject } from "../models/accounts";

@Injectable({
  providedIn: 'root'
})
export class CibcService {
  private cibcApi = "http://localhost:3000/cibc/";
  private accountUri = "accounts";
  private payUri = "pay";
  private incomeUri = "income";

  constructor(private http: HttpClient) { 

  }

  getIncome() : Observable<IncomeLine[]> {    
    return this.http.get<IncomeLine[]>(this.cibcApi + this.incomeUri);
  }

  getPay() : Observable<RootPayObject> {    
    return this.http.get<RootPayObject>(this.cibcApi + this.payUri);
  }

  getAccounts() : Observable<RootAccountObject[]> {    
    return this.http.get<RootAccountObject[]>(this.cibcApi + this.accountUri);
  }
}
