import {View, Text, TextInput} from 'react-native';
import React, {useRef} from 'react';
import {FormInputProps} from './types';
import styles from './styles';
import {SearchBar} from '../Searchbar';

const FormInput: React.FC<FormInputProps> = ({
  label,
  errorMsg,
  phone = false,
  email = false,
  onChange,
  inputRef,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <SearchBar
        inputRef={inputRef}
        onChange={onChange}
        onSubmitText={() => {}}
        {...(phone && {phone: true})}
        {...(email && {email: true})}
      />
      {errorMsg && errorMsg.length > 0 && (
        <Text style={styles.error}>{errorMsg}</Text>
      )}
    </View>
  );
};

export default FormInput;
