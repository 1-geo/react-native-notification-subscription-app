import {StyleSheet} from 'react-native';
import {Colors} from '../../lib';

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontSize: 20,
    color: Colors.neutralWhite,
  },
  error: {
    fontSize: 14,
    color: Colors.citrusYellow,
  },
  dropdown: {
    backgroundColor: Colors.victoriaBluePlus1,
    borderWidth: 1,
    borderColor: Colors.victoriaBlue,
    borderRadius: 16,
  },
  dropwdownText: {
    marginHorizontal: 8,
    color: Colors.neutralWhite,
    fontSize: 18,
  },
  dropwdownLabel: {
    color: Colors.neutralWhite,
    fontSize: 18,
  },
  dropdownContainer: {
    backgroundColor: Colors.victoriaBluePlus1,
    borderWidth: 1,
    borderColor: Colors.victoriaBlue,
    borderRadius: 16,
  },
});

export default styles;
