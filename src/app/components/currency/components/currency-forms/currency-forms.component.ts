import {distinctUntilChanged, observable, Observable, switchMap} from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';
import {CurrencyServiceService} from "../../../../services/currency-service.service";
import {LocalServiceService} from "../../../../services/local-service.service";
import { debounceTime, fromEvent, map } from 'rxjs';
import {ajax} from "rxjs/ajax";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
@Component({
  selector: 'app-currency-forms',
  templateUrl: 'currency-forms.component.html',
  styleUrls: ['./currency-forms.component.css']
})
export class CurrencyFormsComponent implements OnInit{
  curDate: any;
  curObjects:any = [];
  curArrayObj:any;
  trs: any;
  str: any;
  keys: Array<any> = [];
  currencyFirst : string | undefined;
  currencySecond: string | undefined;
  currencyInpSlcFirst: string | undefined
  currencyInpSlcSecond : string | undefined
  firstOpt : string | undefined;
  secondOpt : string | undefined;
  dateInp: HTMLElement | null = document.getElementById('datePicker')
  events: string[] = [];
  date = new Date()
  newDate: any


  constructor( private CurrencyServiceService: CurrencyServiceService, private localStore: LocalServiceService) {

  }

  ngOnInit(){
    this.localStore.clearData()
    this.getServiceList()
    this.dateToday()
    const convertation$ = this.CurrencyServiceService.getCurrencyHistorical( this.firstOpt,this.secondOpt ,this.currencyFirst  ,this.newDate )
  }

  dateToday(){
    this.newDate = `${this.date.getMonth() + 1}-${this.date.getDate()}-${this.date.getFullYear()}`
    return this.newDate
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value}`);
    this.date = new Date(this.events[this.events.length - 1])
    this.newDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`
    console.log(`this is new date :  ${this.newDate}`)
    return this.newDate
  }
  getDateApi(){

  }



  getServiceList(){
   this.CurrencyServiceService.getCurrencyList().pipe(
      distinctUntilChanged(),
    ).subscribe((res)=>{
      let inspect = JSON.stringify(res);
      this.str = JSON.parse(inspect);
      for (let key in this.str.currencies){
        this.keys.push({key:key, value: this.str.currencies[key]});
      }
      return this.keys;
    })
      }


      IflSkey(){
     localStorage.length != 0
      }

    calculation(firstEl:any ,secondEl:any, amount:any ){
    // fromEvent(this.firstInp, 'input')
    this.CurrencyServiceService.getCurrencyConvert(firstEl,secondEl,amount)
    }

  getFlag(key: string){
      key =  key.slice(0, -1)
    return this.CurrencyServiceService.urlFlags + key
  }

  ngDoCheck(){
console.log('nononononoono')
  }

  localStoreDo(key:string, value:string,tF:boolean){
    this.localStore.saveData(key , value)
    if(tF){
      this.currencyInpSlcFirst = key
    } else {
      this.currencyInpSlcSecond = key
    }
  }


  ngOnDestroy(){
    this.localStore.clearData()
  }
}

