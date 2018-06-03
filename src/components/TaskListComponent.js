
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
import TaskItemContainer from '../containers/TaskItemContainer'

export default class AddComponent extends Component{

    render(){
        return(

            <FlatList
                data = {this.props.tasks}
                renderItem = {(index,item)=>{
                    return(
                        <TaskItemContainer {...item}/>
                    )
                }}
                keyExtractor = {(index,item)=>item.taskName}
            
            ></FlatList>
        )
    }

}