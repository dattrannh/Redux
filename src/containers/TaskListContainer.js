

import TaskListComponent from '../components/TaskListComponent'
import {toggleTask} from '../actions'

import {connect} from 'react-redux'

const mapStateToProps = (state)=>{
    alert(`state=${JSON.stringify(state)}`)
    return{
        
    }
}

export default connect(mapStateToProps)(TaskListComponent)