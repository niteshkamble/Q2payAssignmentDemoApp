import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetailItemChip = ({
  children,
  text,
}: {
  children: any;
  text: string | undefined;
}) => {
  return (
    <View style={styles.constainer}>
      {children}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ProductDetailItemChip;

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 4,
    color: '#333333',
    fontSize: 15,
    fontWeight: '500',
  },
});
