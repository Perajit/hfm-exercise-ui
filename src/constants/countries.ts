import { BaseSelectOption } from '@/components/_base/BaseSelect/BaseSelect';

type Country = {
  name: string;
  phoneCode: string;
};

export const countries: Record<string, Country> = {
  CYP: { name: 'Cyprus',  phoneCode: '357' },
  DEU: { name: 'Germany',  phoneCode: '49' },
  THA: { name: 'Thailand',  phoneCode: '66' },
  GBR: { name: 'United Kingdom',  phoneCode: '44' },
  USA: { name: 'United States',  phoneCode: '1' },
};

export const countrySelectionOptions: BaseSelectOption[] = Object.entries(countries).map((entry) => ({
  value: entry[0],
  label: entry[1].name,
}));
