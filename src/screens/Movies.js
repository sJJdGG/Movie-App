/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/Ionicons'
import data from '../json/data.json';

const { width, height } = Dimensions.get('window');

class Movies extends Component {
    
    
    
    // eslint-disable-next-line react/sort-comp
    static navigationOptions = {
        title: 'Movies',
        headerLeft: (
            // eslint-disable-next-line react-native/no-inline-styles
            <Icon name='md-menu' size={24} color='#000' style={{ paddingLeft : 10 }}  />),
            headerRight: (
                // eslint-disable-next-line react-native/no-inline-styles
                <Icon name='ios-search' size={24} color='#000' style={{ paddingRight : 10 }}  />),
                headerTitleStyle:{
                    textAlign: 'center',
                    fontWeight: '900',
                    fontSize: 30,
                    flex:1
                },
                headerStyle :{
            elevation: 0,
            height: height * 0.1,
            marginBottom: 10,
        },
    };
    
    constructor(props){
        super(props)

        this.state = {
            testdata: data
        }
    }

    renderItem = ({item}) => (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={styles.renderitem}>
            <Image 
                source ={{uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                style={styles.renderImage}
            />
        
            <Text style={{width:width-150,textAlign:'center',fontWeight:'400',fontSize:18,marginTop:5}}>{item.title}</Text>
        </View>
        )

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',felx:1,width ,
		justifyContent: 'space-between',paddingTop:5,
        paddingHorizontal: 5,marginTop:5}}>
                    <View>
                    <Text style={{fontSize:18,fontWeight:'bold',paddingLeft:10}}>Popular</Text>
                    </View>
                    <TouchableOpacity>
                        <Text  style={{fontSize:13,fontWeight:'400',marginTop:5}}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginVertical:5}}>
                <FlatList 
                    style={{flex:1}}
                    data={this.state.testdata}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index) => index.toString()}
                    horizontal
                />
                </View>
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
    renderImage:{
        borderRadius:20,
        height:width-100,
        width:width-100,
    },
    renderitem:{
        alignContent:'center',
        alignItems:'center',
        flex:1,
        height:height*0.53,
        marginHorizontal:10,
        paddingHorizontal:0,
        paddingVertical:5,
    },
})

export default Movies;