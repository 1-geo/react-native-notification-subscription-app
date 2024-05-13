import {View, TextInput, Text} from 'react-native';
import React, {memo, useRef} from 'react';
import {styles} from './styles';
import {Colors} from '../../lib';

const SearchBar: React.FC<{
  onChange: (text: string) => void;
  onSubmitText?: () => void;
  phone?: boolean;
  email?: boolean;
  inputRef?: React.RefObject<TextInput>;
}> = ({onChange, onSubmitText, phone = false, email = false, inputRef}) => {
  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        {...(phone && {keyboardType: 'phone-pad'})}
        {...(email && {keyboardType: 'email-address'})}
        style={styles.textInput}
        onChangeText={onChange}
        onSubmitEditing={onSubmitText}
        placeholderTextColor={Colors.neutralWhite}
      />
    </View>
  );
};

export default memo(SearchBar);
