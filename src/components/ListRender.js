/* eslint-disable import/no-unresolved */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

export default class ListRender extends Component {
  renderItem = ({ item }) => (
    <TouchableOpacity onPress={this.props.itemPress}>
      <View style={styles.renderitem}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`
          }}
          style={styles.renderImage}
        />
        <View style={styles.renderTextContainer}>
          <Text style={styles.renderText}>{item.title}</Text>
          <Text style={styles.renderVoteText}>
            <Icon name="md-star" size={22} color="#D4AF37" />{" "}
            {item.vote_average}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { title, data } = this.props;
    return (
      <View>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                paddingLeft: 10,
                color: "#E0DFDE"
              }}
            >
              {title}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.press}
          >
            <Text style={styles.buttonTextStyle}>See More</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 5 }}>
          <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 5,
    paddingTop: 15,
    width
  },
  renderImage: {
    borderColor: "#E7E7E8",
    borderRadius: 20,
    borderWidth: 0.5,
    height: width - 100,
    width: width - 100
  },
  renderText: {
    color: "#070707",
    flex: 3,
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
    textAlign: "left",
    width: width - 180
  },
  renderTextContainer: {
    alignContent: "space-around",
    flex: 1,
    flexDirection: "row",
    paddingRight: 0,
    width: width - 130
  },
  renderVoteText: {
    color: "#070707",
    flex: 1,
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
    textAlign: "left"
  },
  renderitem: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#E7E7E8",
    borderBottomWidth: 0,
    borderRadius: 22,
    flex: 1,
    height: height * 0.53,
    marginHorizontal: 10,
    paddingBottom: 5,
    paddingHorizontal: 0
  },
  buttonStyle: {
    borderColor: "#B5A89E",
    borderRadius: 10,
    borderWidth: 0.5,
    height: 20,
    width: 60,
    marginTop: 8,
    paddingBottom: 2
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: "400",
    color: "#B5A89E",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
