import React from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={{ marginTop: 50, fontWeight: "bold" }}>Search</Text>
        {/* <TextInput
          placeholder="City"
          style={{
            width: "98%",
            backgroundColor: "white",
            borderWidth: 1,
            textAlign: "left",
            borderRadius: 8,
            padding: 2,
          }}
        /> */}
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data.description);
          }}
          query={{
            key: "AIzaSyCzCcQ55LcgZzZyy63hNJrCr7VTE47QeUI",
            language: "en",
          }}
          styles={{
            textInput: {
              backgroundColor: "#e6e6e6",
              borderRadius: 10,
              fontWeight: "700",
              marginTop: 7,
            },
            textInputContainer: {
              flexDirection: "row",
              alignItems: "center",
              width: "99%",
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
