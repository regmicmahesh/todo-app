import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "row" , marginBottom: 10 }}>
        <Text style={{ marginVertical: 5, fontSize: 20, flex: 1 }}>{item}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => deleteTodo(item)}
        >
          <Text style={{color: "white"}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onTextChange = () => {
    setTodos([...todos, text]);
    setText("");
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter(el => el !== todo))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Todo List </Text>

      <View style={styles.add}>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <TouchableOpacity
          style={styles.addButton}
          onPress={onTextChange}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
    borderTopColor: "black",
    paddingLeft: 10, 
    flex: 1,
  },
  addButton: {
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "coral",
  },
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderColor: "#a1a1a1",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 5,
    flex: 1,
    borderWidth: 1,
  },
  add: {
    marginVertical: 5,
    justifyContent: "center",
    flexDirection: "row",
  },
});
