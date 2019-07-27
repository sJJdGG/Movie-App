import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const { height } = Dimensions.get('window');

class Movies extends Component {
    static navigationOptions = {
        title: 'Movies',
        headerLeft: (
            <Icon name='md-menu' size={24} color='#000' style={{ paddingLeft : 10 }}  />),
            headerRight: (
                <Icon name='ios-search' size={24} color='#000' style={{ paddingRight : 10 }}  />),
        headerTitleStyle:{
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 30,
            flex:1
        },
        headerStyle :{
            elevation: 0,
            height: height * 0.1
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Lets Start our App</Text>
            </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Movies;