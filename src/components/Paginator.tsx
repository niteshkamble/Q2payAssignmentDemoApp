import {
  Animated,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

type propsType = {
  images: string[] | undefined;
  scrollx: any;
};

const Paginator = ({images, scrollx}: propsType) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {images &&
        images.map((d, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollx.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });
          const opacity = scrollx.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[styles.dot, {width: dotWidth, opacity}]}
              key={i.toString()}></Animated.View>
          );
        })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    alignItems: 'center',
    marginVertical: 4,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333333',
    marginHorizontal: 4,
  },
});
