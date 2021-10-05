export const RECEIVE_USERS = "RECEIVE_USERS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const CREATE_QUESTION = "CREATE_QUESTION";
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function addAnswer({ authedUser, questionId, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    questionId,
    answer,
  };
}
export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}
