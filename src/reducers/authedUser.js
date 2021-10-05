import { SET_AUTHED_USER } from "../actions/authedUser";
import { LOG_OUT } from "../actions/authedUser";
export default function authedUser(state=null,action){
    switch(action.type){
        case SET_AUTHED_USER :
            return action.id
        case LOG_OUT :
            return null
            default :
            return state
    }
}