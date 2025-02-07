import React, { createContext, useState, useEffect, useContext } from "react";
import ApiService from "./ApiService";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [topic, setTopic] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [selectedLevel, setSelectedLevels] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [testAttemptData, setTestAttemptData] = useState({
    score: "",
    correctAns: "",
    wrongAns: "",
    totalQuestionAttempt: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (subject) {
          const subjectData = await ApiService.fetchQuestionsBySubject(subject);
          setCurrentData(subjectData);
        }

        if (year) {
          const yearData = await ApiService.fetchQuestionsByYear(year);
          setCurrentData(yearData);
        }

        if (subjectName && topic) {
          const topicData = await ApiService.fetchDataSubjectTopic(
            subjectName,
            topic
          );
          setCurrentData(topicData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [subject, year, topic, subjectName]); 
  return (
    <DataContext.Provider
      value={{
        subject,
        setSubject,
        year,
        setYear,
        topic,
        setTopic,
        subjectName,
        setSubjectName,
        subjectData,
        yearData,
        topicData,
        selectedSubject,
        setSelectedSubject,
        currentData,
        setTestAttemptData,
        selectedLevel,
        setSelectedLevels,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
