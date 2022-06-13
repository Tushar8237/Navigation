import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PaymentPage = () => {
  return (
    <View style={styles.container}>
      <Text>PaymentPage</Text>
    </View>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
