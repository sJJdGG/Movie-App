import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Movies from "./screens/Movies";
import TVs from "./screens/TVs";
import MoviesList from "./screens/MoviesList";
import MovieDetail from "./screens/MovieDetail";

const moviesStack = createStackNavigator({
  Home: Movies,
  List: MoviesList,
  Detail: MovieDetail
});

const tvsStack = createStackNavigator({
  Home: TVs
});

const Draw = createDrawerNavigator({
  Movies: {
    screen: moviesStack
  },
  TVs: {
    screen: tvsStack
  }
});

export default createAppContainer(Draw);
