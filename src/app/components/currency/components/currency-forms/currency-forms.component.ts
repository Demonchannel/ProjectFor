import {distinctUntilChanged, observable, Observable, switchMap} from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';
import {CurrencyServiceService} from "../../../../services/currency-service.service";
import {LocalServiceService} from "../../../../services/local-service.service";
import { debounceTime, fromEvent, map } from 'rxjs';
import {ajax} from "rxjs/ajax";
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
  firstInp = document.getElementById('firstInput')
  secondInp = document.getElementById('secondInput')

  constructor( private CurrencyServiceService: CurrencyServiceService, private localStore: LocalServiceService) {

  }

  ngOnInit(){
    this.getServiceList()
    // this.calculation()
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

      consoleF(key:any, key2:any){
      console.log(key,typeof (key),key2, typeof (key2))
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
    console.log('fucking shit')
  }
  // getFlagOpt(key:string){
  //  let img =document.createElement("img")
  //   let src = this.getFlag(key)
  //   img.setAttribute('src', `${{ src }}`)
  //   console.log(img,typeof (img))
  //   return img
  // }

  caclConvert(from: string, to: string, amount: string){
    this.CurrencyServiceService.getCurrencyConvert(from,to,amount)
  }

  localStoreDo(key:string, value:string){
    this.localStore.saveData(key , value)
  }

  klass(){
    console.log('wtf')
  }

  ngOnDestroy(){
    this.localStore.clearData()
  }
}
//    calculeate()
// const calculationFirst$ = new Observable<Event>(observable=> {
//     const firstInput: HTMLElement | null = document.getElementById('firstInput')
//     firstInput?.addEventListener('input', event => {
//       observable.next(event)
//     })
//   }
// )
// calculationFirst$.pipe(
//   map(event=>{
//     return (event.target as HTMLInputElement).value
//   }),
//   debounceTime(1000),
//   distinctUntilChanged()).subscribe(
//   value => console.log(value)
// )
// const calculationSecond$ = new Observable<Event>(observable=> {
//     const secondInput: HTMLElement | null = document.getElementById('secondInput')
//     secondInput?.addEventListener('input', event => {
//       observable.next(event)
//     })
//   }
// )
// calculationSecond$.pipe(
//   map(event=>{
//     return (event.target as HTMLInputElement).value
//   }),
//   debounceTime(1000),
//   distinctUntilChanged()).subscribe(
//   value =>{
//     // this.CurrencyServiceService.getCurrencyConvert(document.getElementById('selectOne'), document.getElementById('selectTwo'), value)
//   })
