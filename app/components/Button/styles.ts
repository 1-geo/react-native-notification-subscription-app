import {StyleSheet} from 'react-native';
import {Radii} from '../../lib/constants';

export const ButtonStyles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: Radii.large,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radii.large,
  },
  // size styles
  sizeRegular: {
    minHeight: 56,
    paddingHorizontal: 16,
  },
  sizeSmall: {
    minHeight: 44,
    paddingHorizontal: 16,
  },
  sizeXSmall: {
    minHeight: 34,
    paddingHorizontal: 16,
  },
  sizeTiny: {
    minHeight: 34,
    paddingHorizontal: 16,
  },

  // text styles
  textRegular: {
    alignSelf: 'center', // same as align-items but applies to just self not child.
    textAlign: 'center',
    fontSize: 24,
  },
  textSmall: {
    alignSelf: 'center', // same as align-items but applies to just self not child.
    textAlign: 'center',
    fontSize: 18,
  },
  textTiny: {
    alignSelf: 'center', // same as align-items but applies to just self not child.
    textAlign: 'center',
    fontSize: 14,
  },
});
