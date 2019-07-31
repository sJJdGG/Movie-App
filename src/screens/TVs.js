import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { height } = Dimensions.get("window");

export default class TVs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation: { openDrawer } }) => ({
    title: "TV Show",
    headerLeft: (
      <TouchableOpacity onPress={openDrawer}>
        <Icon
          name="md-menu"
          size={24}
          color="#E0DFDE"
          style={{ paddingLeft: 10 }}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <Icon
        name="ios-search"
        size={24}
        color="#E0DFDE"
        style={{ paddingRight: 10 }}
      />
    ),
    headerTitleStyle: {
      textAlign: "center",
      fontWeight: "900",
      color: "#E0DFDE",
      fontSize: 36,
      flex: 1
    },
    headerStyle: {
      elevation: 0,
      height: height * 0.1,
      backgroundColor: "#070707"
    }
  });

  render() {
    return (
      <View>
        <Text> TVs </Text>
      </View>
    );
  }
}
