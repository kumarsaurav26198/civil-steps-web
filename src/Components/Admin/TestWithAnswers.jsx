import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";

const TestWithAnswers = () => {
 const userDetails = JSON.parse(localStorage.getItem("userDetails"));
 const location = useLocation();
 const { subject, subOfTopic, topic, topicSub, year } = location.state.payload;
 const [questions, setQuestions] = useState([]);
 const [userAnswers, setUserAnswers] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
  const fetchQuestions = async () => {
   try {
    let url;
    if (subject) {
     url = `https://api.civilsteps.com/api/question/sub/${subject}`;
    } else if (year) {
     url = `https://api.civilsteps.com/api/question/year/${year}`;
    } else if (topicSub && topic) {
     url = `https://api.civilsteps.com/api/${topicSub}/${topic}`;
    }
    if (url) {
     const response = await axios.get(url);
     setQuestions(response.data);
    }
   } catch (error) {
    console.error("Error fetching questions:", error);
   }
  };

  fetchQuestions();
 }, [subject, subOfTopic, topic, topicSub, year]);

 const handleAnswerSelect = (questionId, selectedOption) => {
  setUserAnswers({ ...userAnswers, [questionId]: selectedOption });
  localStorage.setItem(
   "userAnswers",
   JSON.stringify({ ...userAnswers, [questionId]: selectedOption })
  );
 };

 const calculateScore = () => {
  let score = 0;
  questions.forEach((question) => {
   const correctAnswer = question.options[question.correctOption];
   const userAnswer = userAnswers[question._id];
   if (userAnswer === correctAnswer) {
    score++;
   }
  });

  return score;
 };
 const score = calculateScore();
 const handleSubmitTest = async () => {
  try {
   setIsSubmitted(true);

   const userData = {
    userId: userDetails._id,
    score,
    questionsAttempted: Object.keys(userAnswers).length,
    correctAnswers: calculateScore(),
    wrongAnswers: Object.keys(userAnswers).length - calculateScore(),
    ...userDetails,
   };
   localStorage.removeItem("userAnswers");
   navigate("/result", {
    state: {
     score,
     totalQuestions: questions.length,
     questionsAttempted: Object.keys(userAnswers).length,
    },
   });
  } catch (error) {
   console.log(error);
  }
 };
 console.log("subject:", subject);
 console.log("subOfTopic:", subOfTopic);
 console.log("topic:", topic);
 console.log("topicSub:", topicSub);
 console.log("year:", year);
 return (
  <div>
   <Box
    textAlign={"center"}
    fontSize={"1.1rem"}
    width={"70vw"}
    boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.6)"}
    margin={"auto"}
    marginBottom={"3vw"}
    padding={"3vw"}
   >
    <h1
     style={{
      width: "100%",
      backgroundColor: "#FAB519",
      fontSize: "1.4rem",
     }}
     fontWeight={"100"}
    >
     Test Page
    </h1>
    {questions.map((question, index) => (
     <Box
      mt={5}
      key={question._id}
      position={"relative"}
      height={"80vh"}
      textAlign={"left"}
      p={3}
     >
      <h2
       style={{
        fontSize: "1.3rem",
        width: "100%",
        fontWeight: "600",
        marginTop: "2vh",
       }}
      >
       {`(${index + 1})  ${question.text}`}
      </h2>
      <ul style={{ listStyleType: "none" }}>
       {question.options.map((option, index) => (
        <li key={index}>
         <label>
          <input
           style={{
            width: "3vw",
            height: "2.5vh",
            marginTop: "3vh",
           }}
           type="radio"
           name={`question_${question._id}`}
           value={option}
           onChange={() => handleAnswerSelect(question._id, option)}
           checked={userAnswers[question._id] === option}
          />
          {option}
         </label>
         {!isSubmitted && userAnswers[question._id] === option && (
          <p
           style={{
            marginLeft: "2vw",
            fontWeight: "bold",
            color: "green",
           }}
          >
           <Box
            w="100%"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            position={"absolute"}
            bottom={"5px"}
            left={0}
            p={5}
           >
            <Text fontWeight={100} fontSize={"15px"}>
             Correct Answer:{"     "}
             <span style={{ color: "black" }}>
              {question.options[question.correctOption]}
             </span>
            </Text>
            <Text mt={3} fontWeight={100} fontSize={"15px"}>
             Remark: <span style={{ color: "black" }}>{question?.remarks}</span>
            </Text>
           </Box>
          </p>
         )}
        </li>
       ))}
      </ul>
     </Box>
    ))}
    <Button
     marginTop={"2vh"}
     fontWeight={"400"}
     backgroundColor={"#FAB519"}
     padding={"5px 40px"}
     _hover={{
      color: "black",
      border: "2px solid #FAB519",
      backgroundColor: "white",
     }}
     marginBottom={"5vh"}
     onClick={handleSubmitTest}
    >
     Submit test
    </Button>
   </Box>
  </div>
 );
};

export default TestWithAnswers;
