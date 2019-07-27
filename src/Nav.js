import { createStackNavigator, createAppContainer } from 'react-navigation';
import Movies from './screens/Movies';


const Nav = createStackNavigator({
    Home: {
        screen: Movies,
    },
});

export default createAppContainer(Nav);

