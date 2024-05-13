import {View, Text} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {FormDropDownProps} from './types';
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker';
import {Colors} from '../../lib';
import styles from './styles';

const FormDropDown = <T extends ValueType>({
  header,
  items,
  errorMsg,
  onChange,
  value,
  setValue,
}: FormDropDownProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{header}</Text>
      <DropDownPicker
        maxHeight={400}
        listMode="SCROLLVIEW"
        arrowIconStyle={{tintColor: Colors.neutralWhite} as any}
        style={styles.dropdown}
        textStyle={styles.dropwdownText}
        labelStyle={styles.dropwdownLabel}
        dropDownContainerStyle={styles.dropdownContainer}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={value => {
          onChange(value as T);
        }}
        placeholder={'Select...'}
        theme="DARK"
      />
      {errorMsg && errorMsg.length > 0 && (
        <Text style={styles.error}>{errorMsg}</Text>
      )}
    </View>
  );
};

export default memo(FormDropDown);
