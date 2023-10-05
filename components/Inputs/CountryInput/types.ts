export type CountryOption = {
    code: string;
    name: string;
    flag: string;
  }
  
  export type ICountryInput =  {
    options: CountryOption[];
    onSelect: (option: CountryOption) => void;
    title: string;
    confirmed: (isConfirmed: boolean) => void;
}