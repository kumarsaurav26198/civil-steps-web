import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  ListItem,
  UnorderedList,
  SkeletonCircle,
  SkeletonText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUnlockedLevels,
  getTest,
  submitAnswers,
} from "../redux/testReducer/action";
import { useParams, useNavigate } from "react-router-dom";
import DateObject from "react-date-object";

const PremiumTestWithAnswer = () => {
  const { subject, topic, level } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userID, setUserID] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || ""
  );
  const user_ID = userID?._id;

  const date = new DateObject();
  const currentDate = date.format();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { testQuestions, isLoading, isError, submitResult } = useSelector(
    (state) => state.testReducer
  );

  useEffect(() => {
    if (userID._id && token) {
      dispatch(fetchUnlockedLevels(userID._id, token));
    }
  }, [dispatch, userID._id, token]);

  useEffect(() => {
    if (subject && topic && level) {
      dispatch(getTest(subject, topic, level, user_ID));
    }
  }, [dispatch, subject, topic, level, user_ID]);

  useEffect(() => {
    if (submitResult) {
      dispatch(fetchUnlockedLevels(userID._id));
    }
  }, [dispatch, userID._id, submitResult]);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        navigate("/test/result");
      }, 3000); // 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or if showPopup changes
    }
  }, [showPopup, navigate]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = () => {
    const answers = Object.values(selectedAnswers);

    dispatch(
      submitAnswers(user_ID, answers, subject, topic, level, token, currentDate)
    );
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  if (isLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  if (isError) {
    return <Text>Error loading data</Text>;
  }

  return (
    <div>
      <Box
        w="70%"
        h="60px"
        bg={"black"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text color={"#cccc"}>
          Subject - {subject} | Topic - {topic} | Level - {level}
        </Text>
      </Box>

      <Box
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          width: "70%",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
          margin: "auto",
          padding: "3vw",
          userSelect: "none",
          backgroundImage: `url("https://res.cloudinary.com/dzz32ksnf/image/upload/v1715192668/map-bg_xurtzo.png")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {testQuestions?.map((question, questionIndex) => (
          <Box key={questionIndex}>
            <Flex flexDirection={"column"} gap={2} py={6} px={4} textAlign={"start"}>
              <Text>
                Q {questionIndex + 1}. {question.text}
                <span style={{ marginLeft: "0.5rem" }}>:-</span>
              </Text>
              <Flex flexDirection={"column"} gap={2} width={"96%"} margin={"auto"}>
                {question.question_options.map((option, optionIndex) => (
                  <Text key={optionIndex}>{option}</Text>
                ))}
              </Flex>

              <UnorderedList>
                <Flex flexDirection={"column"} gap={2} width={"96%"} margin={"auto"}>
                  {question.options.map((option, optionIndex) => (
                    <ListItem key={optionIndex}>
                      <Checkbox
                        onChange={() =>
                          handleAnswerChange(questionIndex, optionIndex + 1)
                        }
                      >
                        {option}
                      </Checkbox>
                    </ListItem>
                  ))}
                </Flex>
              </UnorderedList>
            </Flex>
          </Box>
        ))}
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>

      <Box>
        <Modal isOpen={showPopup} onClose={handleCancel}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Test Result</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{submitResult?.message}</Text>
              <Text>
                Conclusion: {submitResult?.passed ? "Passed" : "Failed"}
              </Text>
              <Text>Score: {submitResult?.score}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => navigate("/test/result")}>
                Go to Result Page
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default PremiumTestWithAnswer;


// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   Text,
//   ListItem,
//   UnorderedList,
//   SkeletonCircle,
//   SkeletonText,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchUnlockedLevels,
//   getSubjectOfTopics,
//   getTest,
//   submitAnswers,
// } from "../redux/testReducer/action";
// import { useParams, useNavigate } from "react-router-dom";

// const PremiumTestWithAnswer = () => {
//   const { subject, topic, level } = useParams();
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [userID, setUserID] = useState(
//     JSON.parse(localStorage.getItem("userDetails")) || ""
//   );
//   const user_ID = userID._id;

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { testQuestions, isLoading, isError, submitResult } = useSelector(
//     (state) => state.testReducer
//   );
//   useEffect(() => {
//     if ((subject, topic, level)) {
//       dispatch(getTest(subject, topic, level, user_ID));
//     }
//   }, [dispatch, subject, topic, level,user_ID]);
//   useEffect(() => {
//     if (submitResult) {
//       dispatch(fetchUnlockedLevels(userID._id));
//     }
//   }, [dispatch, userID._id, submitResult]);

//   const handleAnswerChange = (questionIndex, optionIndex) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionIndex]: optionIndex,
//     });
//   };

//   const handleSubmit = async () => {
//     const userId = userID._id;
//     const answers = Object.values(selectedAnswers);

//     dispatch(submitAnswers(userId, answers, subject, topic, level, token));
//     setShowPopup(true);
//   };
//   console.log("user_ID:", user_ID);
//   const handleCancel = () => {
//     setShowPopup(false);
//   };

//   if (isLoading) {
//     return (
//       <Box padding="6" boxShadow="lg" bg="white">
//         <SkeletonCircle size="10" />
//         <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
//       </Box>
//     );
//   }

//   if (isError) {
//     return <Text>Error loading data</Text>;
//   }

//   return (
//     <div>
//       <Box
//         style={{
//           textAlign: "center",
//           fontSize: "1.1rem",
//           width: "70vw",
//           boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
//           margin: "auto",
//           padding: "3vw",
//           userSelect: "none",
//         }}
//       >
//         {testQuestions?.map((question, questionIndex) => (
//           <Box key={questionIndex}>
//             <Flex
//               flexDirection={"column"}
//               gap={2}
//               py={6}
//               px={4}
//               textAlign={"start"}
//             >
//               <Text>
//                 Q {questionIndex + 1}. {question.text}
//                 <span style={{ marginLeft: "0.5rem" }}>:-</span>
//               </Text>
//               <Flex
//                 flexDirection={"column"}
//                 gap={2}
//                 width={"96%"}
//                 margin={"auto"}
//               >
//                 {question.question_options.map((option, optionIndex) => (
//                   <Text key={optionIndex}>{option}</Text>
//                 ))}
//               </Flex>

//               <UnorderedList>
//                 <Flex
//                   flexDirection={"column"}
//                   gap={2}
//                   width={"96%"}
//                   margin={"auto"}
//                 >
//                   {question.options.map((option, optionIndex) => (
//                     <ListItem key={optionIndex}>
//                       <Checkbox
//                         onChange={() =>
//                           handleAnswerChange(questionIndex, optionIndex + 1)
//                         }
//                       >
//                         {option}
//                       </Checkbox>
//                     </ListItem>
//                   ))}
//                 </Flex>
//               </UnorderedList>
//             </Flex>
//           </Box>
//         ))}
//         <Button onClick={handleSubmit}>Submit</Button>
//       </Box>
//       <Box>
//         <Modal isOpen={showPopup} onClose={handleCancel}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Test Result</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <Text>{submitResult?.message}</Text>
//               <Text>
//                 conclusion - {submitResult?.passed ? "Passed" : "Failed"}
//               </Text>
//               <Text>Score - {submitResult?.score}</Text>
//             </ModalBody>
//             <ModalFooter>
//               <Button
//                 colorScheme="blue"
//                 mr={3}
//                 // onClick={navigate("/test/result")}
//               >
//                 Go to Result Page
//               </Button>
//               <Button onClick={handleCancel}>Cancel</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Box>
//     </div>
//   );
// };

// export default PremiumTestWithAnswer;
// =====================================================================================================================================================================================================>
// // PremiumTestWithAnswer.js
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   Text,
//   ListItem,
//   UnorderedList,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   SkeletonCircle,
//   SkeletonText,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getSubjectOfTopics,
//   getTest,
//   submitAnswers,
// } from "../redux/testReducer/action";
// import { useParams } from "react-router-dom";

// const PremiumTestWithAnswer = () => {
//   const { subject, topic, level } = useParams();
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const dispatch = useDispatch();
//   const { testQuestions, isLoading, isError } = useSelector(
//     (state) => state.testReducer
//   );

//   useEffect(() => {
//     if ((subject, topic, level)) {
//       dispatch(getTest(subject, topic, level));
//     }
//   }, [dispatch, subject, topic, level]);

//   const handleAnswerChange = (questionIndex, optionIndex) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionIndex]: optionIndex,
//     });
//   };

//   const handleSubmit = async () => {
//     const userId = "6666a9f3c71995db4ff886ba"; // Replace with actual userId
//     const subject = "Math"; // Replace with actual subject
//     const topic = "Algebra"; // Replace with actual topic
//     const answers = Object.values(selectedAnswers);
//     dispatch(submitAnswers(userId, answers, subject, topic));
//   };

//   const handleCancel = () => {
//     setShowPopup(false);
//   };

//   if (isLoading) {
//     return (
//       <Box padding="6" boxShadow="lg" bg="white">
//         <SkeletonCircle size="10" />
//         <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
//       </Box>
//     );
//   }

//   if (isError) {
//     return <Text>Error loading data</Text>;
//   }
//   console.log("subject:", subject);
//   return (
//     <div>
//       <Box
//         style={{
//           textAlign: "center",
//           fontSize: "1.1rem",
//           width: "70vw",
//           boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
//           margin: "auto",
//           padding: "3vw",
//           userSelect: "none",
//         }}
//       >
//         {testQuestions?.map((question, questionIndex) => (
//           <Box key={questionIndex}>
//             <Flex
//               flexDirection={"column"}
//               gap={2}
//               py={6}
//               px={4}
//               textAlign={"start"}
//             >
//               <Text>
//                 Q {questionIndex + 1}. {question.text}
//                 <span style={{ marginLeft: "0.5rem" }}>:-</span>
//               </Text>
//               <Flex
//                 flexDirection={"column"}
//                 gap={2}
//                 width={"96%"}
//                 margin={"auto"}
//               >
//                 {question.question_options.map((option, optionIndex) => (
//                   <Text key={optionIndex}>{option}</Text>
//                 ))}
//               </Flex>

//               <UnorderedList>
//                 <Flex
//                   flexDirection={"column"}
//                   gap={2}
//                   width={"96%"}
//                   margin={"auto"}
//                 >
//                   {question.options.map((option, optionIndex) => (
//                     <ListItem key={optionIndex}>
//                       <Checkbox
//                         onChange={() =>
//                           handleAnswerChange(questionIndex, optionIndex)
//                         }
//                       >
//                         {option}
//                       </Checkbox>
//                     </ListItem>
//                   ))}
//                 </Flex>
//               </UnorderedList>
//             </Flex>
//           </Box>
//         ))}
//         <Button onClick={handleSubmit}>Submit</Button>
//       </Box>
//   <Box>
//     <Modal isOpen={showPopup} onClose={handleCancel}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Confirmation</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           You have attempted 5 questions. You have to login to attempt the
//           remaining questions. Do you want to go to the login page?
//         </ModalBody>
//         <ModalFooter>
//           <Button colorScheme="blue" mr={3} onClick={""}>
//             Go to Login Page
//           </Button>
//           <Button onClick={handleCancel}>Cancel</Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   </Box>
//     </div>
//   );
// };

// export default PremiumTestWithAnswer;
