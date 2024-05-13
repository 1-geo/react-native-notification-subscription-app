import {Dispatch} from 'react';
import {ValueType} from 'react-native-dropdown-picker';

type SetStateCallback<S> = (prevState: S) => S;

export type FormDropDownItem<T extends ValueType> = {
  label: string;
  value: T;
};

export interface FormDropDownProps<T extends ValueType> {
  items: FormDropDownItem<T>[];
  header: string;
  errorMsg: string;
  onChange: (text: T) => void;
  setValue: Dispatch<SetStateCallback<T | null | any>>;
  value: T | null;
}
