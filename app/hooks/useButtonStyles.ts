import {useMemo} from 'react';
import {ButtonSize, ButtonVariant} from '../components/Button/constants';
import {ButtonStyles} from '../components/Button/styles';
import {Colors, IColorSchemes, IColors} from '../lib';
import {TextStyle, ViewStyle} from 'react-native';

export const useButtonStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
  colorScheme: IColorSchemes,
  isDisabled: boolean,
) => {
  // curColorScheme
  const curColorScheme = useMemo<IColorSchemes>(() => {
    return isDisabled ? 'gray' : colorScheme;
  }, [isDisabled, colorScheme]);

  // children, childrenPressed from scheme
  const [childrenColor, childrenPressedColor] = useMemo<
    [IColors, IColors]
  >(() => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return [curColorScheme, `${curColorScheme}Plus1`];
      case ButtonVariant.TERTIARY:
        return [`${curColorScheme}Plus1`, `${curColorScheme}Plus2`];
      case ButtonVariant.PRIMARY:
      default:
        return ['neutralWhite', 'neutralWhite'];
    }
  }, [curColorScheme, variant]);

  // pick scheme gradients
  const [mainColor, plus1Color, min2Color, min3Color] = useMemo<
    [string, string, string, string]
  >(() => {
    return [
      Colors[curColorScheme],
      Colors[`${curColorScheme}Plus1`],
      Colors[`${curColorScheme}Min1`],
      Colors[`${curColorScheme}Min2`],
    ];
  }, [curColorScheme]);

  // size, text styles
  const [sizeStyle, textStyle] = useMemo<[ViewStyle, TextStyle]>(() => {
    switch (size) {
      case ButtonSize.SMALL:
        return [ButtonStyles.sizeSmall, ButtonStyles.textSmall];
      case ButtonSize.XSMALL:
        return [ButtonStyles.sizeXSmall, ButtonStyles.textSmall];
      case ButtonSize.TINY:
        return [ButtonStyles.sizeTiny, ButtonStyles.textTiny];
      case ButtonSize.REGULAR:
      default:
        return [ButtonStyles.sizeRegular, ButtonStyles.textRegular];
    }
  }, [size]);

  // bg bgPressed styles
  const [bgStyle, pressedBgStyle] = useMemo<[ViewStyle, ViewStyle]>(() => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return [
          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: mainColor,
          },
          {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: plus1Color,
          },
        ];
      case ButtonVariant.TERTIARY:
        return [
          {
            backgroundColor: min3Color,
          },
          {
            backgroundColor: min2Color,
          },
        ];
      case ButtonVariant.PRIMARY:
      default:
        return [
          {
            backgroundColor: mainColor,
          },
          {
            backgroundColor: plus1Color,
          },
        ];
    }
  }, [mainColor, min2Color, min3Color, plus1Color, variant]);

  return {
    childrenColor,
    childrenPressedColor,
    bgStyle,
    pressedBgStyle,
    sizeStyle,
    textStyle,
  };
};
