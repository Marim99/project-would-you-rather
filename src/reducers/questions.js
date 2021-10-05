import { RECEIVE_QUESTION } from "../actions/questions";
import { ANSWER_QUESTION } from "../actions/questions";
import { CREATE_QUESTION } from "../actions/questions";
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
