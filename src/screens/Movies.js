/* eslint-disable import/no-unresolved */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions,ScrollView } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/Ionicons';
import popdata from '../json/popdata.js';
import trendingdata from '../json/trendingdata';
import nowdata from '../json/nowdata';
import ListRender from '../components/ListRender.js';
import Button from '../components/Button.js';


const { height } = Dimensions.get('window');
class Movies extends Component {

    // eslint-disable-next-line react/sort-comp
    static navigationOptions = {
        title: 'Movies',
        headerLeft: (
            // eslint-disable-next-line react-native/no-inline-styles
            <Icon name='md-menu' size={24} color='#E0DFDE' style={{ paddingLeft : 10 }}  />),
            headerRight: (
                // eslint-disable-next-line react-native/no-inline-styles
                <Icon name='ios-search' size={24} color='#E0DFDE' style={{ paddingRight : 10 }}  />),
                headerTitleStyle:{
                    textAlign: 'center',
                    fontWeight: '900',
                    color:'#E0DFDE',
                    fontSize: 36,
                    flex:1
                },
                headerStyle :{
            elevation: 0,
            height: height * 0.1,
            backgroundColor: '#070707'
        },
    };

    render() {
        return (
            <ScrollView style={{backgroundColor: '#070707',}}>
            <View style={styles.container}>
                <ListRender data={popdata} title="Popular" />
                <ListRender data={trendingdata} title="Trending" />
                <ListRender data={nowdata} title="Now Playing" />
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
        justifyContent: 'center',
    },
    footer:{
        flex:1,
        flexDirection:'row',
        marginVertical:15
    }
})

export default Movies;