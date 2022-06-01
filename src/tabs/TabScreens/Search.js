import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
