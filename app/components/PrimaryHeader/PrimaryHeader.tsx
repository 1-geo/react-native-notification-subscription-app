import {View, Text} from 'react-native';
import React, { memo } from 'react';
import styles from './styles';
import {Colors, IColors} from '../../lib';

type PrimaryHeaderProps = {
  header: string;
  color?: IColors;
};

const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({
  header,
  color = 'neutralWhite',
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.header, {color: Colors[color]}]}>{header}</Text>
    </View>
  );
};

export default memo(PrimaryHeader);
