import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Product} from '../App/Interfaces';
import {AirbnbRating} from 'react-native-ratings';

const ProductItem = ({
  item,
  handleClick,
}: {
  item: Product;
  handleClick: any;
}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (item != null) handleClick(item?.id);
      }}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{item.title}</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <AirbnbRating
            count={5}
            defaultRating={item.rating}
            size={16}
            isDisabled
            showRating={false}
          />
          <Text style={{color: '#000000'}}>({item.rating.toFixed(1)})</Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 4}}>
          <Text style={styles.textPrice}>
            {'$'}
            {item.price}
          </Text>
          <Text style={styles.textDiscount}>
            {item.discountPercentage}
            {'%'} off
          </Text>
        </View>

        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 0.8,
    borderBottomColor: '#388e3c',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 6,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  textPrice: {fontSize: 18, fontWeight: '500', color: '#000'},
  textDiscount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginHorizontal: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#333333',
  },
});
