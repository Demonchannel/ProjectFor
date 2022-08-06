export interface currencyList{
  status: string;
  currencies: object;
}

export interface getCurrencyConvert{
  status: string;
  updated_date: any;
  base_currency_code: string;
  amount: number;
  base_currency_name: string;
  rates: object;
}

export interface currencyObject{
  flag: any;
  base_currency_code: string;
  base_currency_name: string;
}

export interface postCurrencyConvert{

}
