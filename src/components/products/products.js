import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const products = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: props.product.imgURL}} />
      <Text style={styles.TextStyle}>{props.product.title}</Text>
      <Text style={styles.PriceStyle}>{props.product.price}</Text>
      <Text style={styles.stock}>
        {props.product.inStock ? '' : 'STOKTA YOK'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1',
    width: Dimensions.get('window').width / 2.2,
    padding: 12,
    borderRadius: 10,
    margin: 10,
  },
  imageStyle: {
    height: Dimensions.get('window').height / 4,
    marginBottom: 5,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  TextStyle: {
    width: Dimensions.get('window').width / 2.5,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  PriceStyle: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  stock: {
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default products;
