export type TFormType =
  | 'FIRST_NAME'
  | 'LAST_NAME'
  | 'EMAIL'
  | 'PHONE'
  | 'EMAIL'
  | 'SUPERVISOR'
  | 'SUCCESS';

export type TFormResult = Record<TFormType, string>;
