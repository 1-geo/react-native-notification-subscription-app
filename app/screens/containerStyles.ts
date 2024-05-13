import {StyleSheet} from 'react-native';
import {Colors} from '../lib';

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    backgroundColor: Colors.victoriaBluePlus2,
  },
  innerContainer: {flex: 1, gap: 8},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 44,
  },
  errorText: {
    fontSize: 22,
    color: Colors.neutralWhite,
  },
});

export default containerStyles;
