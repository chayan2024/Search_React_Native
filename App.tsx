import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState([
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    { id: '3', name: 'Product 3' },
    { id: '3', name: 'Product 4' },
    { id: '3', name: 'Product 5' },
    { id: '3', name: 'Product 6' },
    { id: '3', name: 'Product 7' },
    { id: '3', name: 'Product 8' },

    // Add more products as needed
  ]);

  const [search, setSearch] = useState('');

  const filteredData = data.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search products"
        onChangeText={text => setSearch(text)}
        value={search}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default App;
