import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = " ANSWER_QUESTION";
export const CREATE_QUESTION = " CREATE_QUESTION";
export function addQuestions(questions) {
  return {
    type: ADD_QUESTION,
    questions,
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions,
  };
}
function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}
export function handleCreateQuestion({
  optionOneText,
  optionTwoText,
  authedUser,
}) {
  return (dispatch) => {
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(createQuestion(question)));
  };
}
function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}
export function handleAddAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(addAnswer({ authedUser, qid, answer }));
    return _saveQuestionAnswer({ authedUser, qid, answer });
  };
}
