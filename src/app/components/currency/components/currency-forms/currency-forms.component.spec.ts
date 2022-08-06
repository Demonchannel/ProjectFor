import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFormsComponent } from './currency-forms.component';

describe('CurrencyFormsComponent', () => {
  let component: CurrencyFormsComponent;
  let fixture: ComponentFixture<CurrencyFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
