import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {currencyList, currencyObject} from "../models/currency";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  public API_BASIC_URL = 'https://api.getgeoapi.com/v2/currency';
  public urlCurrencyList = 'https://api.getgeoapi.com/v2/currency/list';
 public apiKeyCurrency = 'a61465b8fac7c585763e97c6c5e868bf67c4159d';
 public urlFlags = 'https://countryflagsapi.com/svg/';
  public data:any
  private ISO:any
  constructor(private http:  HttpClient) { }

  getCurrencyList(){
    this.http.get(this.urlCurrencyList + `?api_key=${this.apiKeyCurrency}` + '&format=json').subscribe((res)=>{
      this.data = Object.entries(res)[0][1]
      this.ISO = Object.keys(Object.entries(res)[0][1])
      console.log(this.data)
      console.log(this.ISO)
    })
  }

  getFlag(flag:string){
    this.http.get(this.urlFlags + flag).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  getCurrencyConvert(from:string, to:string, amount:number){
    this.http.get(this.API_BASIC_URL + '/convert' + `?api_key=${this.apiKeyCurrency}` + `&from=${from} &to=${to}
     &amount=${amount}` + '&format=json').subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  getCurrencyHistorical(){
    this.http.get(this.API_BASIC_URL + '/historical/').subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

  getCurrencyDate(){

  }

}
