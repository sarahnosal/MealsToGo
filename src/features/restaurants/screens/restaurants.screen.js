import React from "react";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import { colors } from "../../../utils/colors";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.result}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: colors.green,
    padding: 16,
  },
  result: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.blue,
  },
});
