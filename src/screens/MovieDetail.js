import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import GenresIcon from "../components/GenresIcon";

import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
class MovieDetail extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    data: [
      { key: "A", hello: "hi" },
      { key: "f", bye: "goodbye" },
      { key: "e", bye: "goodbye" },
      { key: "d", bye: "goodbye" }
    ]
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={this.props.itemPress}>
      <View style={styles.renderContainer}>
        <View style={styles.renderItem}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg`
            }}
            style={styles.renderImage}
          />
          <View style={styles.renderTextContainer}>
            <Text style={styles.renderTextName}>Robert Downey Jr.</Text>
            <Text style={styles.renderTextChar}>Tony Stark / Iron Man</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Icon
            name="ios-arrow-dropleft"
            size={40}
            style={styles.backButton}
            onPress={() => this.props.navigation.goBack()}
          />
          <ImageBackground
            style={styles.backImg}
            imageStyle={{
              borderBottomLeftRadius: 43,
              borderBottomRightRadius: 43
            }}
            source={{
              uri: `https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg`
            }}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Avengers Endgame</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.basicInfoContainer}>
            <View style={styles.basicInfoSesion}>
              <Text style={styles.basicInfoText}>8.2/10</Text>
              <Text> 123123</Text>
            </View>
            <View style={styles.basicInfoSesion}>
              <Text style={styles.basicInfoText}>182min</Text>
              <Text>runtime</Text>
            </View>
            <View style={styles.basicInfoSesion}>
              <Text style={styles.basicInfoText}>en</Text>
              <Text>language</Text>
            </View>
          </View>
          <View style={styles.genreIcon}>
            <GenresIcon genre="Action" />
            <GenresIcon genre="Drama" />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoSesionContainer}>
              <View style={styles.infoSesion}>
                <Text style={styles.infoTitleText}>Director:</Text>
                <Text style={styles.infoDetailText}>Joe Russo</Text>
              </View>
              <View style={styles.infoSesion}>
                <Text style={styles.infoTitleText}>Writer:</Text>
                <Text style={styles.infoDetailText}>
                  Christopher Markus,Stephen McFeely
                </Text>
              </View>
              <View style={styles.infoSesion}>
                <Text style={styles.infoTitleText}>Bugget:</Text>
                <Text style={styles.infoDetailText}>213000000$</Text>
              </View>
              <View style={styles.infoSesion}>
                <Text style={styles.infoTitleText}>Realeas Date:</Text>
                <Text style={styles.infoDetailText}>2019-04-24</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: `https://image.tmdb.org/t/p/w185/or06FN3Dka5tukK1e9sl16pB3iy.jpg`
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.storylineContainer}>
          <Text style={styles.storylineTitle}>Storyline</Text>
          <Text style={styles.storylineDetail}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </Text>
        </View>
        <View style={styles.castContainer}>
          <Text style={styles.castTitleText}>Casts</Text>
          <View style={styles.listContainer}>
            <FlatList
              style={{ flex: 1 }}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              data={this.state.data}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.4,
    borderBottomRightRadius: 43,
    borderBottomLeftRadius: 43,
    borderBottomWidth: 0.1,
    elevation: 10,
    borderColor: "#fff"
  },
  backImg: {
    width: "100%",
    height: "100%"
  },
  container: {
    backgroundColor: "#E0DFDE"
  },
  backButton: {
    position: "absolute",
    top: 5,
    bottom: 0,
    left: 10,
    right: 0,
    zIndex: 2,
    color: "#fff",
    height: 40,
    width: 40
  },
  titleContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.37)",
    justifyContent: "flex-end",
    paddingBottom: 25,
    paddingLeft: 15
  },
  titleText: {
    fontSize: 25,
    fontWeight: "900",
    color: "#fff",
    width: width * 0.7
  },
  detailContainer: {
    marginTop: 5,
    paddingHorizontal: 10
  },
  genreIcon: {
    flexDirection: "row",
    marginTop: 5
  },
  basicInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  basicInfoSesion: {
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  basicInfoText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center"
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between"
  },
  imageContainer: {
    width: width * 0.4,
    height: height * 0.4
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  infoSesionContainer: {
    width: width * 0.4,
    height: height * 0.4
  },
  infoSesion: {
    flexDirection: "row",
    marginVertical: 5
  },
  infoTitleText: {
    fontSize: 14,
    fontWeight: "100",
    marginHorizontal: 10,
    textAlignVertical: "top"
  },
  infoDetailText: {
    fontSize: 14,
    fontWeight: "700",
    textAlignVertical: "top"
  },
  storylineContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5
  },
  storylineTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5
  },
  storylineDetail: {
    fontSize: 14,
    paddingHorizontal: 10
  },
  castContainer: {
    flex: 1,
    margin: 10
  },
  castTitleText: {
    fontSize: 20,
    fontWeight: "500"
  },
  listContainer: {
    flex: 1,
    marginVertical: 10
  },
  renderContainer: {
    flex: 1,
    height: 190,
    paddingBottom: 10
  },
  renderItem: {
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
    height: 180,
    borderRadius: 5,
    padding: 5
  },
  renderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 10
  },
  renderTextContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center"
  },
  renderTextName: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400"
  },
  renderTextChar: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "300"
  }
});

export default MovieDetail;
