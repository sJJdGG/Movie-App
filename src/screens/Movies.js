/* eslint-disable import/no-unresolved */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-useless-escape */
import React, { Component } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
// eslint-disable-next-line import/no-unresolved
import Icon from "react-native-vector-icons/Ionicons";
import popdata from "../json/popdata.js";
import trendingdata from "../json/trendingdata";
import nowdata from "../json/nowdata";
import ListRender from "../components/ListRender.js";
import Button from "../components/Button.js";

import {
  fetchPopular,
  fetchTrending,
  fetchNowPlaying
} from "../redux/actions/moviesActions";
import { connect } from "react-redux";

const { height } = Dimensions.get("window");
class Movies extends Component {
  static navigationOptions = {
    title: "Movies",
    headerLeft: (
      // eslint-disable-next-line react-native/no-inline-styles
      <Icon
        name="md-menu"
        size={24}
        color="#E0DFDE"
        style={{ paddingLeft: 10 }}
      />
    ),
    headerRight: (
      // eslint-disable-next-line react-native/no-inline-styles
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
  };

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
          />
          <ListRender
            data={this.props.movies.trending.results}
            title="Trending"
          />
          <ListRender
            data={this.props.movies.nowplaying.results}
            title="Now Playing"
          />
          <View style={styles.footer}>
            <Button title="Top Rating" />
            <Button title="Up Coming" />
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
