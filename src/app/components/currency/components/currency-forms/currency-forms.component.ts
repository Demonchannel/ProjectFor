import {distinctUntilChanged, observable, Observable} from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';
import {CurrencyServiceService} from "../../../../services/currency-service.service";
import {LocalServiceService} from "../../../../services/local-service.service";
import { debounceTime, fromEvent, map } from 'rxjs';
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

  constructor( private CurrencyServiceService: CurrencyServiceService, private localStore: LocalServiceService) {

  }

  ngOnInit(){
    this.getServiceList()
    this.calculation()
  }

  getServiceList(){
    this.CurrencyServiceService.getCurrencyList().subscribe((res)=>{
      let inspect = JSON.stringify(res);
      this.str = JSON.parse(inspect);
      for (let key in this.str.currencies){
        this.keys.push({key:key, value: this.str.currencies[key]});
      }
      //Можно по другому, но пока хорошо
      console.log(this.keys);
      return this.keys;
    })
      }

    calculation(){
      const calculation$ =
      // fromEvent(document.getElementById('firstInput'),'input')
       new Observable<Event>(observable=> {
        //Переделал хорошо
        const firstInput: HTMLElement | null = document.getElementById('firstInput')
        const secondInput: HTMLElement | null = document.getElementById('secondInput')
        firstInput?.addEventListener('input', event => {
          observable.next(event)
        })
        secondInput?.addEventListener('input', event => {
          observable.next(event)
        })
      }
        )
        calculation$.pipe(
          map(event=>{
            return (event.target as HTMLInputElement).value
          }),
          debounceTime(1000),
          distinctUntilChanged()).subscribe(
            value => console.log(value)
          )
          // Здесь value хорошо, но проще сделать и от него прыгать
          // Сделай в сервисе дополнительный метод, для convert. Чтобы он принимал значение из компонента и одновременно в 2 инпута
    }

    // calculation$.pipe(
    //   map(event=>{
    //     return (event.target as HTMLInputElement).value
    //   }),
    //   debounceTime(1000)).subscribe


  getFlag(key: string){
    this.CurrencyServiceService.getFlag(key.slice(0, -1))
  }
  //Зачем тут splice? Попробуй по другому
}
