import {ViewProps, KeyboardAvoidingView, ScrollView} from 'react-native';
import React from 'react';
import {isIOS} from '../../lib/methods';

/**
 * Note:
 * if screen has navigation header, then need to add `keyboardVerticalOffset` to KeyboardAvoidingView
 * if screen has scrollview, then need to add `contentContainerStyle: { flex: 1 }` to ScrollView to all nested scroll.
 */

const KeyboardView: React.FC<ViewProps> = ({children, style}) => {
  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 18}}
        style={style}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardView;
