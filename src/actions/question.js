export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export function addQuestions (questions) {
    return {
      type: ADD_QUESTION,
      questions,
    }
  }
  export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTION,
      questions,
    }
  }