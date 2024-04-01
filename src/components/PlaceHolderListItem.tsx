import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {skeletonCommonProps} from '../utils/Constants';
import {Skeleton} from 'moti/skeleton';
import {AirbnbRating} from 'react-native-ratings';

const PlaceHolderListItem = () => {
  return (
    <View style={styles.item}>
      <Skeleton.Group show={true}>
        <Skeleton height={80} width={80} {...skeletonCommonProps}>
          <View style={styles.image} />
        </Skeleton>

        <View style={styles.details}>
          <Skeleton height={18} width={'80%'} {...skeletonCommonProps}>
            <Text style={styles.name}> </Text>
          </Skeleton>
          <Skeleton height={18} width={'60%'} {...skeletonCommonProps}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <AirbnbRating
                count={0}
                defaultRating={0}
                size={16}
                isDisabled
                showRating={false}
              />
              <Text>""</Text>
            </View>
          </Skeleton>

          <View style={{marginTop: 2}}>
            <Skeleton height={18} width={'60%'} {...skeletonCommonProps}>
              <View style={{flexDirection: 'row', marginVertical: 4}}>
                <Text style={{fontSize: 18, fontWeight: '500'}}>{''}</Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'green',
                    marginHorizontal: 8,
                  }}>
                  {''}
                </Text>
              </View>
            </Skeleton>
          </View>

          <View style={{marginTop:-4}}>
            <View>
              <Skeleton
                height={14}
                width={'100%'}
                {...skeletonCommonProps}></Skeleton>
            </View>

            <View style={{marginTop: 2}}>
              <Skeleton
                height={14}
                width={'100%'}
                {...skeletonCommonProps}></Skeleton>
            </View>
            <View style={{marginTop: 2}}>
              <Skeleton
                height={14}
                width={'100%'}
                {...skeletonCommonProps}></Skeleton>
            </View>
          </View>
        </View>
      </Skeleton.Group>
    </View>
  );
};

export default PlaceHolderListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});
