import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyComponent } from './currency.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyFormsComponent } from './components/currency-forms/currency-forms.component';
import { CurrencyCalculationsComponent } from './components/currency-calculations/currency-calculations.component';
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CurrencyServiceService} from "../../services/currency-service.service";
import {LocalServiceService} from "../../services/local-service.service";


@NgModule({
  declarations: [
    CurrencyComponent,
    CurrencyFormsComponent,
    CurrencyCalculationsComponent
  ],
  exports: [
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule
  ],
  providers : [
    CurrencyServiceService, LocalServiceService
  ]
})
export class CurrencyModule { }
