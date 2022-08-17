import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {currencyObject} from "../models/currency";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  public API_BASIC_URL = 'https://api.getgeoapi.com/v2/currency';
  public urlCurrencyList = 'https://api.getgeoapi.com/v2/currency/list';
  public apiKeyCurrency = 'bf523fb044a11114964daa3d15169f601afc4eca';
  public urlFlags = 'https://countryflagsapi.com/svg/';
  public data: any
  private ISO: any

  constructor(private http: HttpClient) {
  }

  getCurrencyList() {
    return this.http.get(this.urlCurrencyList + `?api_key=${this.apiKeyCurrency}` + '&format=json')
    // Хорошо, переписал
  }

  // getFlag(flag: string) {
  //   return this.http.get(this.urlFlags + flag)
  // }

    getCurrencyConvert(from: string, to: string, amount: string) {
    return this.http.get(this.API_BASIC_URL + '/convert' + `?api_key=${this.apiKeyCurrency}` + `&from=${from} &to=${to}
     &amount=${amount}` + '&format=json')
// Можешь сделать только через конверт, но данные вытащить проще с list.
  }

  getCurrencyHistorical(from: string | undefined, to: string | undefined, amount: string | undefined, date: string) {
    return this.http.get(this.API_BASIC_URL + '/convert' + `?api_key=${this.apiKeyCurrency}` + `&from=${from} &to=${to}
     &amount=${amount}` + '&format=json' + '/historical/' + date)
  // Для этого используешь 2-ой пустой компонент
  }



  getCurrencyDate() {}}
