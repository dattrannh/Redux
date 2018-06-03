import { AppRegistry } from 'react-native';
// import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './src/reducers'
import TaskManagerComponent from './src/components/TaskManagerComponent'
let store =createStore(allReducers)
const App = () =>{
    <Provider store={store}>
        <TaskManagerComponent/>
    </Provider>
}

AppRegistry.registerComponent('Hello', () => App);
