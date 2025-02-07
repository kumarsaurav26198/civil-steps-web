// TestDescription.jsx
import React, { useState, useEffect } from "react";
import {
 Box,
 Text,
 Button,
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalCloseButton,
 ModalBody,
 ModalFooter,
} from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


import { useData } from "../Context/DataContext";



const modalStyle = {
 position: "fixed",
 top: 0,
 left: 0,
 right: 0,
 bottom: 0,
 backgroundColor: "rgba(0, 0, 0, 0.5)",
 zIndex: -1,
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
};

const TestDescription = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const queryParams = new URLSearchParams(location.search);
 const {
  setSubject,
  setYear,
  setTopic,
  subjectName,
  setSubjectName,
  
 } = useData(); // Access subject, subjectName, year, and topic from DataContext
 const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  const subjectParam = queryParams.get("subject");
  const yearParam = queryParams.get("year");
  const topicParam = queryParams.get("topic");
  const sub_name = queryParams.get("sub_name");
  //   const selectedSubject = queryParams.get("selectedSubject");
  setSubject(subjectParam);
  setYear(yearParam);
  setTopic(topicParam);
  setSubjectName(sub_name);
  //   setSelectedSubject(selectedSubject);
 }, []);

 const handleOpenModal = () => {
  setIsModalOpen(true);
 };

 const handleCloseModal = () => {
  setIsModalOpen(false);
 };

 const handleAnswerSheet = () => {
  navigate(`/test/with/answer`);
 };

 const handleNavigationWthNoAnswer = () => {
  navigate(`/test/without/answer`);
 };

 
 return (
  <div>
   <Box
    width={"100vw"}
    display={"flex"}
    flexDirection={"column"}
    alignItems={"center"}
   >
    <Box
     padding={"5vw"}
     boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.6)"}
     display={"flex"}
     justifyContent={"center"}
     alignItems={"center"}
     flexDirection={"column"}
    >
     <Box
      textAlign={"center"}
      backgroundColor={"#FAB519"}
      color={"white"}
      fontSize={"1.5rem"}
      width={"70vw"}
     >
      <h1 style={{ width: "100%" }} fontWeight={"100"}>
       {subjectName} Test
      </h1>
     </Box>

     <Box width={"70vw"} marginTop={"4vh"} marginLeft={"4vw"}>
      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}>
       <span style={{ fontWeight: "600" }}> Exam Name</span>: Union Public
       Service Commission
      </Text>

      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}>
       <span style={{ fontWeight: "600" }}>No Of Questions</span>: 100
      </Text>

      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}>
       <span style={{ fontWeight: "600" }}>Total Marks</span>: 200
      </Text>

      <Box
       marginTop={"6vh"}
       fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
       fontWeight={"100"}
      >
       <h2 style={{ color: "#FAB519" }}>Instructions</h2>
       <ul color="black">
        <li style={{ marginTop: "1vh" }}>
         Arrange for Stable Internet Connectivity
        </li>
        <li style={{ marginTop: "1vh" }}>
         Make Sure your laptop should fully charged
        </li>

        <li style={{ marginTop: "1vh" }}>
         Giving exam on laptop or desktop is highly recommended
        </li>
        <li style={{ marginTop: "1vh" }}>
         Close all the tabs/browsers before starting the online examination
         start time
        </li>
        <li style={{ marginTop: "1vh" }}>
         Once the exam starts,do not switch to any other window/tab
        </li>
        <li style={{ marginTop: "1vh" }}>
         it is recommended to use web browser such as Google chrome,Mozilla
         ,etc.{" "}
        </li>
       </ul>
      </Box>
     </Box>

     {!isModalOpen && (
      <Button
       fontWeight={"400"}
       backgroundColor={"#FAB519"}
       padding={"5px 40px"}
       _hover={{
        color: "black",
        border: "2px solid #FAB519",
        backgroundColor: "white",
       }}
       marginBottom={"5vh"}
       onClick={handleOpenModal}
       margin={"0px auto"}
       marginTop={"5vh"}
       width={"60%"}
      >
       Start test
      </Button>
     )}
     {isModalOpen && (
      <Box style={modalStyle}>
       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
         <ModalHeader>Confirmation</ModalHeader>
         <ModalCloseButton />
         <ModalBody>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
           <Box padding={"5vw"} margin={"auto"}>
            <Button
             marginTop={"2vh"}
             width={"100%"}
             fontWeight={"400"}
             backgroundColor={"#FAB519"}
             padding={"5px 40px"}
             _hover={{
              color: "black",
              border: "2px solid #FAB519",
              backgroundColor: "white",
             }}
             marginBottom={"5vh"}
             onClick={handleAnswerSheet}
            >
             Start test having answer
            </Button>

            <Button
             marginTop={"2vh"}
             width={"100%"}
             fontWeight={"400"}
             backgroundColor={"#FAB519"}
             padding={"5px 40px"}
             _hover={{
              color: "black",
              border: "2px solid #FAB519",
              backgroundColor: "white",
             }}
             marginBottom={"5vh"}
             onClick={handleNavigationWthNoAnswer}
            >
             Start test not having answer
            </Button>
           </Box>
          </Box>{" "}
         </ModalBody>
         <ModalFooter>
          <Button variant="HiOutlineMail" onClick={handleCloseModal}>
           Cancel
          </Button>
         </ModalFooter>
        </ModalContent>
       </Modal>
      </Box>
     )}
      
    </Box>
   </Box>
  </div>
 );
};

export default TestDescription;

