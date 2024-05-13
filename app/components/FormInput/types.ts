import {TextInput} from 'react-native';

export interface FormInputProps {
  label: string;
  errorMsg: string;
  phone?: boolean;
  email?: boolean;
  onChange: (text: string) => void;
  inputRef?: React.RefObject<TextInput>;
}
