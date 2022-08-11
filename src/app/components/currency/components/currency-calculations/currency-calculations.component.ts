import { LocalServiceService } from './../../../../services/local-service.service';
import { CurrencyServiceService } from './../../../../services/currency-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { debounceTime, map, observable, Observable } from 'rxjs';


@Component({
  selector: 'app-currency-calculations',
  templateUrl: './currency-calculations.component.html',
  styleUrls: ['./currency-calculations.component.css']
})
export class CurrencyCalculationsComponent implements OnInit {
  public value = '';

  constructor(private CurrencyServiceService: CurrencyServiceService, private localStore: LocalServiceService) { }

  ngOnInit() {

  }

  calculate(){

  }
}
