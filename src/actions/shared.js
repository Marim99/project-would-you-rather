import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./user";

//const AUTHED_ID = 'sarahedo'
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      //  dispatch(setAuthedUser(AUTHED_ID))
      dispatch(receiveQuestions(questions));
    });
  };
}
