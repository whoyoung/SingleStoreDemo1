import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

let ios = Platform.OS !== 'android';
export default styles = {
    navigationButtonLeft: {
        marginTop:ios? 20 : 0,
        marginLeft:10,
        color:'white',
        fontSize:15
    },
    systemNavigatorStyle:{ height:ios?64:44 },
    systemTitleStyle:{color: 'white' ,marginTop:0},
    systemNavigationButtonLeft:ios?{ height: 20, width: 20, marginRight: 5 }:{ height: 20, width: 20, marginRight: 5,bottom:5},
};
