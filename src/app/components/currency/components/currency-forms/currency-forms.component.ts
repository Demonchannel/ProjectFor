import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged, EMPTY,
  filter,
  fromEvent,
  mergeMap,
  Observable, Subscription,
  switchMap,
  tap
} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ajax} from "rxjs/ajax";
import {CurrencyServiceService} from "../../../../services/currency-service.service";
import {currencyObject} from "../../../../models/currency";
import {LocalServiceService} from "../../../../services/local-service.service";

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-currency-forms',
  templateUrl: './currency-forms.component.html',
  styleUrls: ['./currency-forms.component.css']
})
export class CurrencyFormsComponent implements OnInit{
  // private subs: Subscription;
  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;
  states: State[] = [];
  curDate: any

  constructor( private CurrencyServiceService: CurrencyServiceService, private localStore: LocalServiceService) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );
  }

  ngOnInit(){
    this.CurrencyServiceService.getCurrencyList()
    this.curDate = this.CurrencyServiceService.data
    console.log(this.curDate)
    }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }


}
