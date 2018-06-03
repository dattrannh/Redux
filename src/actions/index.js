import {ADD_NEW_TASK,ADD_NEW_TASK, TOGGLE_ONE_TASK} from './actionType'

var taskId = 0
export const addNewTask = (input) =>{
    return {
        type: ADD_NEW_TASK,
        taskId: taskId++,
        taskName: input
    }
}

export const toggleTask = (taskId) =>{
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId,

    }
}