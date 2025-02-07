import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  submitResult: null,
  testQuestions: [],
  userAttempts: [],
  unlockedLevels: null,
  subject: null,
  topic: null,
  level: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TEST_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TEST_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        testQuestions: payload,
      };
    case types.GET_TEST_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_SUBJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        subject: payload,
      };
    case types.GET_SUBJECTS_FAILURE:
      console.log("payload:", payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_SUBJECT_OF_TOPIC_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SUBJECT_OF_TOPIC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        topic: payload,
      };
    case types.GET_SUBJECT_OF_TOPIC_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.FETCH_UNLOCKED_LEVELS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.FETCH_UNLOCKED_LEVELS_SUCCESS:
      console.log("payload:", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        unlockedLevels: payload,
      };
    case types.FETCH_UNLOCKED_LEVELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.SUBMIT_ANSWERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.SUBMIT_ANSWERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        submitResult: payload,
      };
    case types.SUBMIT_ANSWERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
