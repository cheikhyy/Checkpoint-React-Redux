// rootReducer
import { ADD_ARTICLE } from "../Constants/actions-types";

// initialisation 

const initialState = {
    tasks: [
        {
            id: 1,
            title: '',
            content: ''
        }
    ]
}
// initial-Task
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer
