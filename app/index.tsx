import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeStack} from './stacks';
import {NavigationContainer} from '@react-navigation/native';

class Root extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {}
  componentWillUnmount(): void {}

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default Root;
