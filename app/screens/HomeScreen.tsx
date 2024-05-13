import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ActivityIndicator,
  Text,
  Alert,
  TextInput,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import containerStyles from './containerStyles';
import {
  Button,
  ButtonSize,
  ButtonVariant,
  FormDropDown,
  FormInput,
  KeyboardView,
  PrimaryHeader,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isIOS} from '../lib/methods';
import {useSupervisorSubscription} from '../lib/hooks';

const top = useSafeAreaInsets()['top'];

const HomeScreen = () => {
  const fName = useRef('');
  const fNameRef = useRef<TextInput>(null);

  const lName = useRef('');
  const lNameRef = useRef<TextInput>(null);

  const email = useRef('');
  const emailRef = useRef<TextInput>(null);

  const phone = useRef('');
  const phoneRef = useRef<TextInput>(null);

  const supId = useRef('');
  const [value, setValue] = useState(null);

  const handleClear = useCallback(() => {
    fName.current = '';
    lName.current = '';
    email.current = '';
    phone.current = '';
    supId.current = '';

    fNameRef.current?.clear();
    lNameRef.current?.clear();
    emailRef.current?.clear();
    phoneRef.current?.clear();
    setValue(null);
    Alert.alert('Success', 'You are subscribed!', [{text: 'OK'}]);
  }, [
    fName,
    fNameRef,
    lName,
    lNameRef,
    email,
    emailRef,
    phone,
    phoneRef,
    supId,
  ]);

  const {isError, isLoading, data, formResult, refresh, submit} =
    useSupervisorSubscription(handleClear);

  return (
    <KeyboardView
      style={[containerStyles.container, {paddingTop: isIOS ? top : 12}]}>
      <StatusBar barStyle="dark-content" />
      {!isError && isLoading && (
        <View style={containerStyles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {!isLoading && isError && (
        <View style={[containerStyles.loadingContainer]}>
          <Text style={containerStyles.errorText}>Something went wrong</Text>
          <Button
            variant={ButtonVariant.TERTIARY}
            size={ButtonSize.SMALL}
            onPress={refresh}>
            Retry
          </Button>
        </View>
      )}
      {!isLoading && !isError && (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={containerStyles.innerContainer}>
            <PrimaryHeader header="Home" />
            <FormInput
              inputRef={fNameRef}
              label="First Name"
              errorMsg=""
              onChange={val => {
                fName.current = val;
              }}
              {...(formResult !== undefined &&
                formResult.FIRST_NAME && {errorMsg: formResult.FIRST_NAME})}
            />
            <FormInput
              inputRef={lNameRef}
              label="Last Name"
              errorMsg=""
              onChange={val => {
                lName.current = val;
              }}
              {...(formResult !== undefined &&
                formResult.LAST_NAME && {errorMsg: formResult.LAST_NAME})}
            />
            <FormInput
              inputRef={emailRef}
              label="Email"
              errorMsg=""
              email
              onChange={val => {
                email.current = val;
              }}
              {...(formResult !== undefined &&
                formResult.EMAIL && {errorMsg: formResult.EMAIL})}
            />
            <FormInput
              inputRef={phoneRef}
              label="Phone Number"
              errorMsg=""
              phone
              onChange={val => {
                phone.current = val;
              }}
              {...(formResult !== undefined &&
                formResult.PHONE && {errorMsg: formResult.PHONE})}
            />
            <FormDropDown
              value={value}
              setValue={setValue}
              errorMsg=""
              header="Supervisor"
              items={data}
              onChange={val => {
                supId.current = val;
              }}
              {...(formResult !== undefined &&
                formResult.SUPERVISOR && {errorMsg: formResult.SUPERVISOR})}
            />
            <Button
              onPress={() => {
                submit(
                  fName.current,
                  lName.current,
                  supId.current,
                  phone.current,
                  email.current,
                );
              }}
              style={{marginTop: 4}}
              variant={ButtonVariant.TERTIARY}
              size={ButtonSize.SMALL}>
              SUBMIT
            </Button>
          </View>
        </TouchableWithoutFeedback>
      )}
    </KeyboardView>
  );
};

export default HomeScreen;
