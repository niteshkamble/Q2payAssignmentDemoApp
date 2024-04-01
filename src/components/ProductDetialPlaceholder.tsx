import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Skeleton} from 'moti/skeleton';
import {skeletonCommonProps} from '../utils/Constants';
const lisItemtWidth = Dimensions.get('window').width;

const ProductDetialPlaceholder = () => {
  return (
    <View style={styles.container}>
      {/* image list */}
      <Skeleton
        width={lisItemtWidth}
        height={250}
        {...skeletonCommonProps}></Skeleton>

      {/* dot navigator */}
      <View style={{height: 20}} />

      {/* details */}
      <View style={styles.subContainer}>
        <Skeleton width={'85%'} height={30} {...skeletonCommonProps}></Skeleton>

        {/* Star View */}
        <View style={{marginTop: 4}}>
          <Skeleton
            width={'65%'}
            height={20}
            {...skeletonCommonProps}></Skeleton>
        </View>

        {/* Price & Disount */}
        <Skeleton width={'50%'} height={30} {...skeletonCommonProps}></Skeleton>

        {/* decription */}
        <View>
          <View style={{marginVertical: 2}}>
            <Skeleton
              height={18}
              width={'100%'}
              {...skeletonCommonProps}></Skeleton>
          </View>

          <View style={{marginVertical: 2}}>
            <Skeleton
              height={18}
              width={'100%'}
              {...skeletonCommonProps}></Skeleton>
          </View>
          <View style={{marginVertical: 2}}>
            <Skeleton
              height={18}
              width={'100%'}
              {...skeletonCommonProps}></Skeleton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetialPlaceholder;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 18,
  },
  subContainer: {backgroundColor: 'white', width: '100%', padding: 8},
  title: {fontSize: 22, fontWeight: '500', marginVertical: 6, color: '#000000'},
  description: {
    fontSize: 17,
    marginTop: 5,
    marginVertical: 10,
    color: '#333333',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
  },
  priceText: {fontSize: 22, fontWeight: '500', color: '#000'},
  discounttext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginHorizontal: 8,
  },
});
