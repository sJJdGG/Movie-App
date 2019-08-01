import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class GenresIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.testStyle}> {this.props.genre} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderColor: "#5B5B5B",
    borderRadius: 10,
    borderWidth: 1,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  },
  testStyle: {
    color: "#5B5B5B",
    fontWeight: "300",
    textAlign: "center"
  }
});
export default GenresIcon;
