import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useProducts} from '../App/AppState';
import Paginator from '../components/Paginator';
import {AirbnbRating} from 'react-native-ratings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProductDetailItemChip from '../components/ProductDetailItemChip';
import ErrorComponent from '../components/ErrorComponent';
import {Skeleton} from 'moti/skeleton';
import {skeletonCommonProps} from '../utils/Constants';
import ProductDetialPlaceholder from '../components/ProductDetialPlaceholder';

const lisItemtWidth = Dimensions.get('window').width;

const ProductDetail = ({route}: any) => {
  const {productId} = route.params;
  const {product, error, fetchProduct, resetProduct} = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  useEffect(() => {
    fetchProduct(productId);
    return resetProduct;
  }, []);

  type props = {
    url: string;
  };

  const Item = ({url}: props) => {
    return (
      <View style={{backgroundColor: 'white', padding: 4}}>
        <Image
          source={{uri: url}}
          resizeMode="contain"
          style={{aspectRatio: 1.7, width: lisItemtWidth}}
        />
      </View>
    );
  };

  const viewableItemChanged = useRef(({viewableItem}: any) => {
    if (viewableItem?.length > 0) {
      setCurrentIndex(viewableItem[0].index);
    }
  }).current;

  if (error)
    return <ErrorComponent err={'Failed to load the product detials.'} />;

  if (product == null) {
    return <ProductDetialPlaceholder />;
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          ref={slideRef}
          data={product?.images}
          horizontal
          renderItem={({item, index}) => <Item url={item} />}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          scrollEventThrottle={32}
          keyExtractor={(item, index) => index.toString()}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 70}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />

        {/* Dot Paginator */}
        <Paginator images={product?.images} scrollx={scrollX} />

        {/* Details View */}
        <View style={styles.subContainer}>
          <Text style={styles.title}>{product?.title}</Text>

          {/* Star View */}
          <View style={{marginTop: 4}}>
            <View style={styles.starContainer}>
              <AirbnbRating
                count={5}
                defaultRating={product?.rating}
                size={16}
                isDisabled
                showRating={false}
              />
              <Text style={{color: '#000000'}}>
                ({product?.rating.toFixed(1)})
              </Text>
            </View>
          </View>

          {/* Price & Disount */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              {'$'}
              {product?.price}
            </Text>
            <Text style={styles.discounttext}>
              {product?.discountPercentage}
              {'%'} off
            </Text>
          </View>

          {product && (
            <Text style={styles.description}>{product?.description}</Text>
          )}

          {/* Chips */}
          {product && (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 12,
                  marginVertical: 4,
                }}>
                <ProductDetailItemChip
                  children={
                    <MaterialIcons
                      name="info-outline"
                      size={28}
                      color="#3D3D3D"
                      style={{marginHorizontal: 4}}
                    />
                  }
                  text={product?.brand}
                />

                <ProductDetailItemChip
                  children={
                    <FontAwesome5
                      name={'boxes'}
                      solid
                      size={20}
                      color="#3D3D3D"
                      style={{marginHorizontal: 4}}
                    />
                  }
                  text={`Stock: ${product?.stock}`}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 12,
                  marginVertical: 10,
                }}>
                <ProductDetailItemChip
                  children={
                    <MaterialIcons
                      style={{marginHorizontal: 4}}
                      name="category"
                      size={24}
                      color="#3D3D3D"
                    />
                  }
                  text={product?.category}
                />
              </View>
            </>
          )}
        </View>
        
      </View>
    );
  }
};

export default ProductDetail;

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
