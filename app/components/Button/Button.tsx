import {View, Pressable, ActivityIndicator, Text} from 'react-native';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {ButtonProps} from './types';
import {ButtonSize, ButtonVariant} from './constants';
import {useButtonStyles} from '../../hooks';
import {ButtonStyles} from './styles';

const Button: React.FC<ButtonProps> = ({
  colorScheme = 'victoriaBlue',
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.REGULAR,
  isLoading,
  isDisabled = false,
  onPress,
  style,
  children,
  ...props
}) => {
  const {
    childrenColor,
    childrenPressedColor,
    bgStyle,
    pressedBgStyle,
    sizeStyle,
    textStyle,
  } = useButtonStyles(variant, size, colorScheme, isDisabled);

  const [isPressed, setIsPressed] = useState(false);

  const onPressIn = useCallback(() => {
    onPress && setIsPressed(true);
  }, [onPress]);

  const onPressOut = useCallback(() => {
    onPress && setIsPressed(false);
  }, [onPress]);

  const Children = useMemo(() => {
    if (typeof children === 'string') {
      return <Text style={textStyle}>{children}</Text>;
    }

    return children;
  }, [
    children,
    childrenColor,
    childrenPressedColor,
    isLoading,
    isPressed,
    textStyle,
  ]);

  return (
    <View
      style={[
        ButtonStyles.wrapper,
        bgStyle,
        (isPressed || isLoading) && pressedBgStyle,
        style,
      ]}
      {...props}>
      <Pressable
        disabled={isDisabled}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[ButtonStyles.container, sizeStyle]}>
        {isLoading ? (
          <ActivityIndicator
            size={size == ButtonSize.SMALL ? 'small' : undefined}
          />
        ) : (
          Children
        )}
      </Pressable>
    </View>
  );
};

Button.displayName = 'Button';

export default memo(Button);
