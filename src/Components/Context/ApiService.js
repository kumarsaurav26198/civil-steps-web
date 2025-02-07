import axios from "axios";

// const BASE_URL = "https://api.civilsteps.com/api";
const BASE_URL = "https://api.civilsteps.com/api";

const ApiService = {
 fetchSubjects: async () => {
  try {
   const response = await axios.get(`${BASE_URL}/subjects`);
   return response.data;
  } catch (error) {
   throw new Error(`Error fetching subjects: ${error.message}`);
  }
 },

 fetchYears: async () => {
  try {
   const response = await axios.get(`${BASE_URL}/year`);
   console.log("year response:", response.data);
   return response.data;
  } catch (error) {
   throw new Error(`Error fetching years: ${error.message}`);
  }
 },

 fetchTopicsBySubject: async (subjectId) => {
  try {
   const response = await axios.get(
    `${BASE_URL}/sub-topic/subject/${subjectId}/topics`
   );
   return {
    topics: response.data.topic,
    subject: response.data.subject,
   };
  } catch (error) {
   throw new Error(`Error fetching topics: ${error.message}`);
  }
 },

 //  fetch Questions By Subject
 fetchQuestionsBySubject: async (subject) => {
  try {
   const response = await axios.get(`${BASE_URL}/question/sub/${subject}`);
   return response.data;
  } catch (error) {
   throw new Error(`Error fetching questions: ${error.message}`);
  }
 },
 // fetch Questions By Year
 fetchQuestionsByYear: async (year) => {
  try {
   const response = await axios.get(`${BASE_URL}/question/year/${year}`);
   return response.data;
  } catch (error) {
   throw new Error(`Error fetching questions: ${error.message}`);
  }
 },
 fetchDataSubjectTopic: async (subjectName, topic) => {
  const apiUrl = `${BASE_URL}/${subjectName}/${topic}`;
  try {
   const response = await fetch(apiUrl);
   if (!response.ok) {
    throw new Error("Failed to fetch data");
   }
   const data = await response.json();
   console.log("data:", data);
   return data;
  } catch (error) {
   throw error;
  }
 },
};

export default ApiService;
