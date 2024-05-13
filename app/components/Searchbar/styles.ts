import {StyleSheet} from 'react-native';
import {Colors} from '../../lib/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.victoriaBluePlus1,
    borderWidth: 1,
    borderColor: Colors.victoriaBlue,
    borderRadius: 16,
    paddingHorizontal: 4,
    paddingVertical: 4,
    justifyContent: 'center',
    height: 48,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 8,
    color: Colors.neutralWhite,
    fontSize: 18,
  },
});
