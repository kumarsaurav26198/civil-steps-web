import axios from "axios";
import * as types from "./actionTypes";
import { baseURL } from "../../services/apiEndPoints";
const token = localStorage.getItem("token");

export const getTest = (subject, topic, level, user_ID) => (dispatch) => {
  dispatch({ type: types.GET_TEST_DATA_REQUEST });
  console.log("token:", token);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return axios
    .get(
      // `https://api.civilsteps.com/api/questions?subject=${subject}&topic=${topic}&level=${level}&user_ID=${user_ID}`,
      `${baseURL}/api/questions?subject=${subject}&topic=${topic}&level=${level}&user_ID=${user_ID}`,
      config
    )
    .then((response) => {
      if (response.status === 403) {
        dispatch({
          type: types.GET_TEST_DATA_FAILURE,
          payload: "Unauthorized",
        });
      } else {
        dispatch({ type: types.GET_TEST_DATA_SUCCESS, payload: response.data });
      }
    })
    .catch((error) => {
      console.error("API Error:", error); // Log the error
      dispatch({ type: types.GET_TEST_DATA_FAILURE, payload: error.message }); // Proper error handling
    });
};

// Fetch subjects
export const GetSubjects = () => async (dispatch) => {
  dispatch({ type: types.GET_SUBJECTS_REQUEST });

  try {
    const response = await axios.get(
      // `https://api.civilsteps.com/api/sub-topic/subjects`
      `${baseURL}/api/sub-topic/subjects`
    );
    console.log("response:", response.data.data);
    dispatch({
      type: types.GET_SUBJECTS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    console.error(`Error fetching subjects: ${error.message}`);
    dispatch({
      type: types.GET_SUBJECTS_FAILURE,
      payload: error.message,
    });
  }
};

export const getSubjectOfTopics = (subjectId) => async (dispatch) => {
  dispatch({ type: types.GET_SUBJECT_OF_TOPIC_REQUEST });
  try {
    const response = await axios.get(
      // `https://api.civilsteps.com/api/sub-topic/subject/${subjectId}/topics`
      `${baseURL}/api/sub-topic/subject/${subjectId}/topics`
    );
    console.log("API Response:", response.data); // Log the response

    dispatch({
      type: types.GET_SUBJECT_OF_TOPIC_SUCCESS,
      payload: {
        topics: response.data.topic,
        subject: response.data.subject,
      },
    });
  } catch (error) {
    console.error("API Error:", error); // Log the error
    dispatch({
      type: types.GET_SUBJECT_OF_TOPIC_FAILURE,
      payload: error.message,
    });
  }
};

export const submitAnswers =
  (userId, answers, subject, topic, level, token, currentDate) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.SUBMIT_ANSWERS_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Authorization header
        },
      };

      const body = {
        userId,
        answers,
        subject,
        topic,
        level,
        currentDate,
      };

      const response = await axios.post(
        // "https://api.civilsteps.com/api/submit",
        `${baseURL}/api/submit`,
        body,
        config
      );

      dispatch({
        type: types.SUBMIT_ANSWERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: types.SUBMIT_ANSWERS_FAILURE,
        payload: error.response
          ? error.response.data
          : { message: error.message },
      });
    }
  };

// Fetch unlocked levels
export const fetchUnlockedLevels = (userId) => async (dispatch) => {
  dispatch({ type: types.FETCH_UNLOCKED_LEVELS_REQUEST });

  try {
    const response = await axios.get(
      // `https://api.civilsteps.com/api/levels/?userId=${userId}`,
      `${baseURL}/api/levels/?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization header
        },
      }
    );
    dispatch({
      type: types.FETCH_UNLOCKED_LEVELS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_UNLOCKED_LEVELS_FAILURE,
      payload: error.message,
    });
  }
};
