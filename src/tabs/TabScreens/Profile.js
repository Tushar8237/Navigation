import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../../login/Button";
import firebase from "firebase/app";
import "firebase/auth";

const Profile = () => {
  return (
    <View style={styles.view}>
      <Button title="Log Out" onClick={() => firebase.auth().signOut()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
