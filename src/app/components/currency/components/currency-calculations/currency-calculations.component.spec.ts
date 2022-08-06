import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCalculationsComponent } from './currency-calculations.component';

describe('CurrencyCalculationsComponent', () => {
  let component: CurrencyCalculationsComponent;
  let fixture: ComponentFixture<CurrencyCalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyCalculationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
