
import AddComponent from '../components/AddComponent'
import {addNewTask} from '../actions'

import {connect} from 'react-redux'

const mapStateToProps = state =>{
  return{

  }
}
const mapDispatchProps = (dispatch)=>{
  return{
    clickedAdd: (inputTaskName)=>{
      dispatch(addNewTask(inputTaskName))
    }
  }
}

export default connect(mapStateToProps,mapDispatchProps)(AddComponent)