

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  RefreshControl,TextInput,
  TouchableHighlight,
  FlatList,
  AppRegistry
} from 'react-native';

import {addNewTask} from '../actions'

export default class AddComponent extends Component{

    constructor(props){
        super(props)
        this.state=({
            newTaskName:'',
        })
    }

    render(){
        return(
            <View style = {styles.root} >
                <TextInput 
                    style ={styles.input} 
                    keyboardType = 'default'
                    placeholderTextColor='white'
                    placeholder='enter task name'
                    onChangeText={(text)=>{
                        this.setState({newTaskName:text})
                    }}
                
                />
                
                <TouchableHighlight 
                    style={{marginLeft:10}}
                    onPress={(event)=>{
                        text = this.state.addNewTask.trim()
                        if(!text){
                            return
                        }
                        this.props.clickedAdd(text)
                    }}
                
                >
                
                
                </TouchableHighlight>
            
            
            </View>

        )
    }
}
const styles = StyleSheet.create({
    root:{
        backgroundColor:'tomato',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        height:64
    },
    input:{
        height: 40,
        width:288,
        margin:10,
        padding:10,
        borderWidth:1,
        color:white,

    },

})