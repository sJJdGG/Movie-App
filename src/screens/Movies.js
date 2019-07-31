import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ListRender from "../components/ListRender.js";
import Button from "../components/Button.js";

import {
  fetchPopular,
  fetchTrending,
  fetchNowPlaying
} from "../redux/actions/moviesActions";
import { connect } from "react-redux";
import TVs from "./TVs.js";

const { height } = Dimensions.get("window");
class Movies extends Component {
  static navigationOptions = ({ navigation: { openDrawer } }) => ({
    title: "Movies",
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

  state = {
    dataSource: []
  };

  componentDidMount() {
    this.props.fetchPopular();
    this.props.fetchTrending();
    this.props.fetchNowPlaying();
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#070707" }}>
        <View style={styles.container}>
          <ListRender
            data={this.props.movies.popular.results}
            title="Popular"
            press={() => this.props.navigation.navigate("List")}
            itemPress={() => this.props.navigation.navigate("Detail")}
          />
          <ListRender
            data={this.props.movies.trending.results}
            title="Trending"
            press={() => this.props.navigation.navigate("List")}
            itemPress={() => this.props.navigation.navigate("Detail")}
          />
          <ListRender
            data={this.props.movies.nowplaying.results}
            title="Now Playing"
            press={() => this.props.navigation.navigate("List")}
            itemPress={() => this.props.navigation.navigate("Detail")}
          />
          <View style={styles.footer}>
            <Button
              title="Top Rating"
              press={() => this.props.navigation.navigate("List")}
            />
            <Button
              title="Up Coming"
              press={() => this.props.navigation.navigate("List")}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 15
  }
});

const mapStatesToProps = state => {
  return {
    movies: state
  };
};
export default connect(
  mapStatesToProps,
  { fetchPopular, fetchTrending, fetchNowPlaying }
)(Movies);
