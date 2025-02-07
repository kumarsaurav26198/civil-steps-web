import React, { useState, useEffect } from "react";
import {
 Box,
 Button,
 Checkbox,
 Flex,
 Heading,
 ListItem,
 Text,
 UnorderedList,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useData } from "../Context/DataContext";
import { useLocation, useNavigate } from "react-router-dom";

const TestWithAnswers = () => {
 const [userDetails, setUserDetails] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || []
 );
 const location = useLocation();
 const navigate = useNavigate();
 const { currentData, subject, subjectName, topic, year } = useData();
 const [selectedOptions, setSelectedOptions] = useState(
  JSON.parse(localStorage.getItem("selectedOptions")) || {}
 );
 const [questionAttempts, setQuestionAttempts] = useState({});
 const [rightAttempts, setRightAttempts] = useState(0);
 const [wrongAttempts, setWrongAttempts] = useState(0);
 const [totalAttempts, setTotalAttempts] = useState(0);
 const [score, setScore] = useState(0);
 const [category, setCategory] = useState("");
 const [showPopup, setShowPopup] = useState(false);

 useEffect(() => {
  if (subject) {
   setCategory(subject);
  } else if (subjectName && topic) {
   setCategory(`${subjectName} - ${topic}`);
  } else if (year) {
   setCategory(year);
  }
 }, [subject, year, topic, subjectName]);

 useEffect(() => {
  let correctCount = 0;
  let wrongCount = 0;

  for (const [questionIndex, optionIndex] of Object.entries(selectedOptions)) {
   const question = currentData[questionIndex];
   if (question.correctOption === optionIndex) {
    correctCount++;
   } else {
    wrongCount++;
   }
  }

  const calculatedScore = correctCount * 2;
  setScore(calculatedScore);
  setRightAttempts(correctCount);
  setWrongAttempts(wrongCount);
  setTotalAttempts(correctCount + wrongCount);
 }, [selectedOptions, currentData]);

 useEffect(() => {
  if (!userDetails._id && totalAttempts > 5) {
   localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
   localStorage.setItem("questionAttempts", JSON.stringify(questionAttempts));

   localStorage.setItem("redirectTo", location.pathname);
   navigate("/login");
  }
 }, [
  totalAttempts,
  userDetails._id,
  location.pathname,
  selectedOptions,
  questionAttempts,
 ]);

 useEffect(() => {
  const storedSelectedOptions =
   JSON.parse(localStorage.getItem("selectedOptions")) || {};
  const storedQuestionAttempts =
   JSON.parse(localStorage.getItem("questionAttempts")) || {};
  setSelectedOptions(storedSelectedOptions);
  setQuestionAttempts(storedQuestionAttempts);
 }, []);

 const handleOptionSelect = (questionIndex, optionIndex) => {
  if (questionAttempts[questionIndex]) return;

  setSelectedOptions((prevSelectedOptions) => ({
   ...prevSelectedOptions,
   [questionIndex]: optionIndex,
  }));

  setQuestionAttempts((prevQuestionAttempts) => ({
   ...prevQuestionAttempts,
   [questionIndex]: true,
  }));
 };

 const handleSubmit = async () => {
  try {
   const response = await axios.post(
    `https://api.civilsteps.com/api/test-results`,
    {
     userId: userDetails._id,
     score,
     questionsAttempted: totalAttempts,
     correctAnswers: rightAttempts,
     wrongAnswers: wrongAttempts,
     totalNosQues: currentData.length,
     category: category,
    }
   );
   if (response.status === 201) {
    localStorage.removeItem("selectedOptions");
    localStorage.removeItem("questionAttempts");
    localStorage.removeItem("redirectTo");
    navigate("/results");
   }
   console.log("response:", response);
  } catch (error) {
   console.log("error:", error);
  }
 };

 useEffect(() => {
  if (totalAttempts === 5 && !userDetails._id) {
   setShowPopup(true);
  }
 }, [totalAttempts, userDetails._id]);

 const handleGoToLogin = () => {
  localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  localStorage.setItem("questionAttempts", JSON.stringify(questionAttempts));
  localStorage.setItem("redirectTo", location.pathname);
  navigate("/login");
 };

 const handleCancel = () => {
  setShowPopup(false);
  navigate("/");
 };

 return (
  <div>
   <Box
    style={{
     textAlign: "center",
     fontSize: "1.1rem",
     width: "70vw",
     boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
     margin: "auto",
     padding: "3vw",
     userSelect: "none",
    }}
   >
    <Heading mt={"10px"}>{category}</Heading>
    {currentData?.map((question, index) => (
     <Box key={index}>
      <Flex flexDirection={"column"} gap={2} py={6} px={4} textAlign={"start"}>
       <Text>
        Q {index + 1}. {question.text}
        <span style={{ marginLeft: "0.5rem" }}>:-</span>
       </Text>
       <Flex flexDirection={"column"} gap={2} width={"96%"} margin={"auto"}>
        {question.question_options.map((option, index) => (
         <Text key={index}>{option}</Text>
        ))}
       </Flex>

       <UnorderedList>
        <Flex flexDirection={"column"} gap={2} width={"96%"} margin={"auto"}>
         {question.options.map((option, optionIndex) => (
          <ListItem key={optionIndex}>
           <Checkbox
            isChecked={selectedOptions[index] === optionIndex}
            isDisabled={questionAttempts[index]}
            onChange={() => handleOptionSelect(index, optionIndex)}
           >
            {option}
           </Checkbox>
          </ListItem>
         ))}
        </Flex>
       </UnorderedList>
      </Flex>
      {questionAttempts[index] && (
       <Flex flexDirection={"column"} gap={2} py={6} px={4} textAlign={"start"}>
        <Text>
         <span style={{ fontWeight: "bolder" }}>Correct Answer :</span>{" "}
         {question.options[question.correctOption]}
        </Text>
        <Text>
         <span style={{ fontWeight: "bolder" }}>Remarks :</span>{" "}
         {question.remarks}
        </Text>
       </Flex>
      )}
     </Box>
    ))}
    <Button onClick={handleSubmit}>Submit</Button>
   </Box>
   <Box>
    <Modal isOpen={showPopup} onClose={handleCancel}>
     <ModalOverlay />
     <ModalContent>
      <ModalHeader>Confirmation</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
       You have attempted 5 questions. You have to login to attempts the remain
       question Do you want to go to the login page?
      </ModalBody>
      <ModalFooter>
       <Button colorScheme="blue" mr={3} onClick={handleGoToLogin}>
        Go to Login Page
       </Button>
       <Button onClick={handleCancel}>Cancel</Button>
      </ModalFooter>
     </ModalContent>
    </Modal>
   </Box>
  </div>
 );
};

export default TestWithAnswers;
