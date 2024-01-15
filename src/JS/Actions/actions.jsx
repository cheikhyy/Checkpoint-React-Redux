import { ADD_ARTICLE } from "../Constants/actions-types";

export const addTask = newTask => {
    return {
        type: ADD_ARTICLE,
        payload: newTask
    }
}
