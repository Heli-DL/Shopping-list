import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearData = () => {
    setData('');
  }
   
  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      </View>
      <View style={styles.buttons}> 
        <Button onPress={buttonPressed} title="ADD" />
        <Button onPress={clearData} title="CLEAR" />
      </View>
      <View style={styles.listbox}>
        <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 16}}>Shopping list</Text>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =><Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 20
  },
  listbox: {
    flex: 2,
    justifyContent: 'flex-start',
  }
});
