import { getInitialData } from "../utils/api"
import { setAuthedUser } from "./authedUser"
import { receiveQuestions } from "./question"
import { receiveUsers } from "./user"

const AUTHED_ID = 'sarahedo'
export function handleInitialData(){
    return (dispatch)=>{
        return getInitialData().then(({users,question})=>{
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(receiveQuestions(question))
        })
    }
}