import axios from "axios";
import { baseURL } from "../../services/apiEndPoints";

const ApiService = {
  fetchSubjects: async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/subjects`,
        // "https://api.civilsteps.com/api/subjects"
      );
      console.log("Get subject response:", response);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching subjects: ${error.message}`);
    }
  },
  fetchYears: async () => {
    try {
      // const response = await axios.get("https://api.civilsteps.com/api/year");
      const response = await axios.get(`${baseURL}/api/year`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching years: ${error.message}`);
    }
  },

  fetchSubject: async () => {
    try {
      const response = await axios.get(
        // `https://api.civilsteps.com/api/sub-topic/subjects`
        `${baseURL}/api/sub-topic/subjects`
      );
      console.log("subject-response:", response.data);

      return response.data.data;
    } catch (error) {
      throw new Error(`Error fetching topics: ${error.message}`);
    }
  },

  fetchTopicsBySubject: async (subjectId) => {
    try {
      const response = await axios.get(
        `https://api.civilsteps.com/api/sub-topic/subject/${subjectId}/topics`
      );
      return {
        topics: response.data.topic,
        subject: response.data.subject,
      };
    } catch (error) {
      throw new Error(`Error fetching topics: ${error.message}`);
    }
  },
};

export default ApiService;
