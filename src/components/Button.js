import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
class Button extends Component {

render() {
    const {title}=this.props;
    return (
        <TouchableOpacity style={[styles.container]}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
}

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderColor:'#E0DFDE',
        borderRadius: height * 0.05,
        borderWidth: 1,
        flex:1,
        height: height * 0.1,
        justifyContent:'center',
        marginHorizontal:10,
        width: width * 0.3,
    },
    title:{
        color:'#E0DFDE',
        fontSize:20,
        fontWeight:'400',
    }
})

export default Button;
