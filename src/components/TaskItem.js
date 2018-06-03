
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  RefreshControl,TextInput,
  TouchableOpacity,
  FlatList,
  AppRegistry
} from 'react-native';

export default class TaskItem extends Component{

    render(){
        return(

            <View
                style ={{flex:1}}            
            >
                <TouchableOpacity
                 style={{position:'absolute',top:0,bottom:0,left:0,right:0}}
                 onPress={(event)=>{

                     
                 }}
                 >
                </TouchableOpacity>
                <Text
                style={{margin:20,color: this.props.completed ? 'green' : 'black'}} >
                {this.props.taskName}
                </Text>
            
            </View>
        )
    }

}