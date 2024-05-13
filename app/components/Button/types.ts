import {PressableProps, ViewProps} from 'react-native';
import {ButtonSize, ButtonVariant} from './constants';
import {IColorSchemes} from '../../lib';

export interface ButtonProps extends ViewProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  colorScheme?: IColorSchemes;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: PressableProps['onPress'];
}
