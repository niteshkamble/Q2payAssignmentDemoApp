import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {Product} from '../App/Interfaces';
import {useProducts} from '../App/AppState';
import PlaceHolderListItem from '../components/PlaceHolderListItem';
import ProductItem from '../components/ProductItem';
import ErrorComponent from '../components/ErrorComponent';

const Home = ({navigation}: any) => {
  const {products, error, fetchProducts} = useProducts();

  const handleClick = (id: number) => {
    navigation.navigate('Product Details', {
      productId: id,
    });
  };

  const placeHolderList = useMemo(()=>{
    return Array.from({ length: 10 }).map((_, index) => null);
  },[])
  

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <ErrorComponent err={error} />;

  const renderItem = ({item}: {item: Product | null}) => {
    if (item) {
      return <ProductItem item={item} handleClick={handleClick} />;
    } else {
      return <PlaceHolderListItem />;
    }
  };

  // const renderItem = ({ item }:{item: Product | null}) => <ProductRenderItem item={item} />;

  return (
    <SafeAreaView style={{flex:1}}>
    <View >
      <FlatList
        data={products??placeHolderList}
        renderItem={item => renderItem(item)}
        keyExtractor={(item, index) =>
          item ? item.id.toString() : index.toString()
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
