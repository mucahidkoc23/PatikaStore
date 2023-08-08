import React from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import data from './src/data/patikaData.json';
import Products from './src/components/products/products';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.inputView}>
            <Text style={styles.header_text}>PATİKASTORE</Text>
            <TextInput style={styles.input} placeholder="Ara..." />
          </View>
        }
        data={data}
        horizontal={false}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => <Products product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header_text: {
    color: 'purple',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 50,
    width: Dimensions.get('window').width / 1.05,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: '#D1D1D1',
  },
  inputView: {
    flex: 0.2,
    marginLeft: 10,
  },
});

export default App;
